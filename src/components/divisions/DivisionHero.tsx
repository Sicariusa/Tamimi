import React from 'react';
import { motion } from 'framer-motion';
import { divisions as allDivisions } from '../../content/divisions';

type Division = typeof allDivisions[number];

export default function DivisionHero({ division }: { division: Division }) {
  return (
    // Full-bleed hero that spans the viewport width
    <div className="relative h-[60vh] min-h-[420px] w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
      {/* Background image */}
      {division.heroImage && (
        <>
          <img
            src={division.heroImage}
            alt={division.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Foreground content */}
      <motion.div
        className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {division.established && (
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 text-white"
            style={{ backgroundColor: `${division.color}33` }}
          >
            Established {division.established}
          </div>
        )}

        <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6">
          {division.name}
        </h1>

        <p className="text-lg lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
          {division.description}
        </p>
      </motion.div>
    </div>
  );
}