import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
const MobileMenu = ({ isOpen, onClose }) => {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-80 bg-black text-white shadow-lg z-50 overflow-y-auto"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <span className="font-semibold text-lg">Menu</span>
              <button onClick={onClose} className="p-1">
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
              {/* Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left py-2 text-lg hover:text-gray-300"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-3 space-y-4 border-l border-gray-700">
                        <div>
                          <h6 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Web Solutions</h6>
                          <div className="space-y-2">
                            <a href="#" className="block text-sm hover:text-gray-300">Website Design</a>
                            <a href="#" className="block text-sm hover:text-gray-300">Mobile Apps</a>
                            <a href="#" className="block text-sm hover:text-gray-300">AI & Automation</a>
                          </div>
                        </div>
                        <div>
                          <h6 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Cloud & DevOps</h6>
                          <div className="space-y-2">
                            <a href="#" className="block text-sm hover:text-gray-300">Cloud Migration</a>
                            <a href="#" className="block text-sm hover:text-gray-300">DevOps Services</a>
                            <a href="#" className="block text-sm hover:text-gray-300">Managed IT</a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Process */}
              <button className="block w-full text-left py-2 text-lg hover:text-gray-300">
                Process
              </button>

              {/* Blog */}
              <button className="block w-full text-left py-2 text-lg hover:text-gray-300">
                Blog
              </button>

              {/* Support */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left py-2 text-lg hover:text-gray-300"
                  onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                >
                  Support
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${mobileSupportOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <AnimatePresence>
                  {mobileSupportOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-3 space-y-2 border-l border-gray-700">
                        <a href="#" className="block text-sm hover:text-gray-300">Help Center</a>
                        <a href="#" className="block text-sm hover:text-gray-300">Contact Us</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-700">
                <button className="w-full bg-orange-600 hover:bg-orange-800 px-4 py-3 rounded text-white font-semibold">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
