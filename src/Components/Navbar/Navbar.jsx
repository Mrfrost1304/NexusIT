import { useState } from "react";
import { Menu} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ServiceDropdown, { SupportDropdown } from "./Dropdown";
import MobileMenu from "./MobileView";
import AnimationDropdown from "./AnimationDropdown";
const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg hover:cursor-pointer">NexusIT Solutions</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 relative">
            {/* Services Dropdown */}
           
           <AnimationDropdown label="Services" menuClassName="left-1/2 -translate-x-125  w-[1260px] p-12 rounded-lg">
           <ServiceDropdown></ServiceDropdown>
           </AnimationDropdown>
            <button className="text-white hover:text-gray-300 nav-link cursor-pointer">Process</button>
            <button className="text-white hover:text-gray-300 nav-link cursor-pointer">Blog</button>
           <AnimationDropdown label="Support" menuClassName="right-0 w-44">
           <SupportDropdown></SupportDropdown>
           </AnimationDropdown>
          </div>

          {/* Mobile & Desktop CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Get Quote Button */}
            <button className="bg-orange-600 hover:bg-orange-800 cursor-pointer px-4 py-2 rounded text-white font-semibold">
              Get Quote
            </button>

            {/* Hamburger Menu (Mobile Only) */}
            <button
              className="md:hidden p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

 

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

      {/* Overlay for mobile menu */}
     <AnimatePresence>
  {mobileMenuOpen && (
    <>
      {/* Dimmed background */}
      <motion.div
        initial={{ opacity: 0 }}
    
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Sliding Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  )}
</AnimatePresence>
    </>
  );
};
export default Navbar;
