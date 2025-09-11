// Accessibility utilities and helpers
export class AccessibilityManager {
  private static focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ');

  // Focus management utilities
  static getFocusableElements(container: Element): HTMLElement[] {
    return Array.from(container.querySelectorAll(this.focusableSelectors)) as HTMLElement[];
  }

  static trapFocus(container: Element, event: KeyboardEvent) {
    const focusableElements = this.getFocusableElements(container);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable?.focus();
        }
      }
    }
  }

  static restoreFocus(element: HTMLElement | null) {
    if (element) {
      element.focus();
    }
  }

  // ARIA utilities
  static announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  static setAriaExpanded(element: Element, expanded: boolean) {
    element.setAttribute('aria-expanded', expanded.toString());
  }

  static setAriaHidden(element: Element, hidden: boolean) {
    if (hidden) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }

  // Keyboard navigation utilities
  static handleArrowNavigation(
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    onSelect?: (index: number) => void
  ): number {
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        newIndex = (currentIndex + 1) % elements.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = elements.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (onSelect) {
          onSelect(currentIndex);
        }
        break;
      case 'Escape':
        event.preventDefault();
        elements[currentIndex]?.blur();
        break;
    }

    if (newIndex !== currentIndex) {
      elements[newIndex]?.focus();
    }

    return newIndex;
  }

  // Color contrast utilities
  static checkColorContrast(foreground: string, background: string): {
    ratio: number;
    level: 'AAA' | 'AA' | 'A' | 'FAIL';
  } {
    const getLuminance = (color: string): number => {
      // Convert hex to RGB
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;

      // Apply gamma correction
      const gamma = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      
      return 0.2126 * gamma(r) + 0.7152 * gamma(g) + 0.0722 * gamma(b);
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    let level: 'AAA' | 'AA' | 'A' | 'FAIL';
    if (ratio >= 7) level = 'AAA';
    else if (ratio >= 4.5) level = 'AA';
    else if (ratio >= 3) level = 'A';
    else level = 'FAIL';

    return { ratio, level };
  }

  // Motion preferences
  static respectsReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  static setupReducedMotionListener(callback: (prefersReduced: boolean) => void) {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    callback(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', (e) => {
      callback(e.matches);
    });

    return () => {
      mediaQuery.removeEventListener('change', callback);
    };
  }

  // Skip links
  static createSkipLink(target: string, text: string = 'Skip to main content'): HTMLAnchorElement {
    const skipLink = document.createElement('a');
    skipLink.href = target;
    skipLink.textContent = text;
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 bg-gold text-ink px-4 py-2 rounded font-semibold z-50';
    
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(target) as HTMLElement;
      if (targetElement) {
        targetElement.focus();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });

    return skipLink;
  }

  // Form validation accessibility
  static associateErrorWithField(fieldId: string, errorMessage: string): string {
    const errorId = `${fieldId}-error`;
    const field = document.getElementById(fieldId);
    
    if (field) {
      field.setAttribute('aria-describedby', errorId);
      field.setAttribute('aria-invalid', 'true');
    }

    return errorId;
  }

  static clearFieldError(fieldId: string) {
    const field = document.getElementById(fieldId);
    
    if (field) {
      field.removeAttribute('aria-describedby');
      field.removeAttribute('aria-invalid');
    }
  }

  // Live region management
  static createLiveRegion(priority: 'polite' | 'assertive' = 'polite'): HTMLDivElement {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
    
    return liveRegion;
  }

  // Touch target size validation
  static validateTouchTargets(): Array<{ element: Element; size: { width: number; height: number } }> {
    const minSize = 44; // WCAG AA minimum
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [role="link"]');
    const violations: Array<{ element: Element; size: { width: number; height: number } }> = [];

    interactiveElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width < minSize || rect.height < minSize) {
        violations.push({
          element,
          size: { width: rect.width, height: rect.height }
        });
      }
    });

    return violations;
  }

  // Heading structure validation
  static validateHeadingStructure(): Array<{ level: number; text: string; element: Element }> {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const structure: Array<{ level: number; text: string; element: Element }> = [];
    const violations: Array<{ level: number; text: string; element: Element }> = [];

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      
      structure.push({ level, text, element: heading });
    });

    // Check for proper nesting
    for (let i = 1; i < structure.length; i++) {
      const current = structure[i];
      const previous = structure[i - 1];
      
      if (current.level > previous.level + 1) {
        violations.push(current);
      }
    }

    return violations;
  }
}

// React hooks for accessibility
export const useAccessibility = () => {
  return {
    announceToScreenReader: AccessibilityManager.announceToScreenReader,
    trapFocus: AccessibilityManager.trapFocus,
    getFocusableElements: AccessibilityManager.getFocusableElements,
    respectsReducedMotion: AccessibilityManager.respectsReducedMotion,
    handleArrowNavigation: AccessibilityManager.handleArrowNavigation,
  };
};

// Accessibility testing utilities
export const a11yTest = {
  checkColorContrast: AccessibilityManager.checkColorContrast,
  validateTouchTargets: AccessibilityManager.validateTouchTargets,
  validateHeadingStructure: AccessibilityManager.validateHeadingStructure,
  
  runFullAudit: () => {
    const results = {
      touchTargets: AccessibilityManager.validateTouchTargets(),
      headingStructure: AccessibilityManager.validateHeadingStructure(),
      timestamp: new Date().toISOString(),
    };

    console.group('🔍 Accessibility Audit Results');
    console.log('Touch Target Violations:', results.touchTargets);
    console.log('Heading Structure Violations:', results.headingStructure);
    console.groupEnd();

    return results;
  }
};

export default AccessibilityManager;