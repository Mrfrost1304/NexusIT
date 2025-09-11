

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans h-[70vh]">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full p-8 md:p-12">

        {/* Top Row: Contact and Social Links */}
        <div className="flex justify-between items-center">
          <a href="#" className="hover:text-white">Contact us</a>
          <div className="space-x-4 md:space-x-6">
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

        {/* Middle Section: Brand Logo and Name */}
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Replace this div with your actual logo component or image */}
            <div className="w-24 h-24 bg-gray-400 rounded-2xl flex items-center justify-center">
              {/* Your logo SVG or image can go here */}
            </div>
            <span className="text-7xl md:text-8xl font-bold text-gray-400">NEXUS IT</span>
          </div>
        </div>

        {/* Bottom Row: Copyright and Privacy */}
        <div className="flex justify-between items-center text-xs">
          <p>&copy; 2025 NexusTT. All rights reserved.</p>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
