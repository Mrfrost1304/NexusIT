import image2 from '../assets/Images/image2.avif'
import image1 from '../assets/Images/image1.avif'
import image4 from '../assets/Images/image4.avif'
const HeroSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Simplifying IT for <br /> seamless growth
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Dependable IT solutions tailored for startups and SMBs. From web to
            mobile, cloud to automation, we build scalable solutions for your
            business.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium">
              Request a quote
            </button>
            <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
              Explore services
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          {/* Image 1 - background large */}
          <img
            src={image2}
            alt="Main"
            className="absolute top-0 left-10 w-64 h-40 object-cover rounded-lg shadow-lg"
          />
          {/* Image 2 - overlay */}
          <img
            src={image1}
            alt="Overlay"
            className="absolute top-20 right-0 w-52 h-32 object-cover rounded-lg shadow-lg"
          />
          {/* Image 3 - bottom */}
          <img
            src={image4}
            alt="Bottom"
            className="absolute bottom-0 left-20 w-60 h-36 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection