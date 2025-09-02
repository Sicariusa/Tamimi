import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      title: "Headquarters",
      location: "Dammam, Eastern Province",
      address: "Saudi Arabia",
      phone: "+966 13 807 5700",
      type: "main"
    },
    {
      title: "Al-Ahsa Office",
      location: "P.O. Box 939, Al-Ahsa 31982",
      address: "Saudi Arabia",
      phone: "+966 13 510 9777",
      email: "hcphelpdesk@al-tamimi.com",
      type: "regional"
    },
    {
      title: "Construction Division",
      location: "King Fahd Ibn Abdul Aziz Road",
      address: "Dammam 32234-8448, Saudi Arabia",
      phone: "+966-13-341-1391",
      email: "info@tamimiats.com",
      type: "division"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to explore partnership opportunities, 
            career prospects, or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <Building className="text-[#e9ce8c] mr-3" size={24} />
                <h3 className="text-xl font-bold text-[#12110e]">{office.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#857757] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <div className="font-medium text-[#12110e]">{office.location}</div>
                    <div className="text-gray-600 text-sm">{office.address}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-[#857757] flex-shrink-0" size={18} />
                  <a 
                    href={`tel:${office.phone}`}
                    className="text-[#12110e] hover:text-[#857757] transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>

                {office.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[#857757] flex-shrink-0" size={18} />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-[#12110e] hover:text-[#857757] transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#12110e] mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e9ce8c] focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e9ce8c] focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e9ce8c] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e9ce8c] focus:border-transparent transition-all">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Career Information</option>
                    <option>Investor Relations</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e9ce8c] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#12110e] text-white py-4 rounded-lg font-semibold hover:bg-[#645c42] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-[#12110e] to-[#645c42] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Clock className="text-[#e9ce8c] flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-gray-300">Sunday - Thursday: 8:00 AM - 5:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-[#e9ce8c] flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">General Inquiries</div>
                    <div className="text-gray-300">info@tamimigroup.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-[#e9ce8c] flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">Main Office</div>
                    <div className="text-gray-300">+966 13 807 5700</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold mb-4">Follow Our Journey</h4>
                <p className="text-gray-300 text-sm">
                  Stay connected with Tamimi Group's latest developments, 
                  community initiatives, and business achievements as we 
                  continue building Saudi Arabia's future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;