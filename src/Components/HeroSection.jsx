import image from '../assets/Images/image.png'


const HeroSection = () => {
  return (
    <section className="bg-black text-white py-16 h-svh">
      <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 pt-10">
            Simplifying IT for <br /> seamless growth
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Dependable IT solutions tailored for startups and SMBs. From web to
            mobile, cloud to automation, we build scalable solutions for your
            business.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-600 hover:bg-orange-800 text-white px-6 py-3 rounded-md font-medium cursor-pointer">
              Request a quote
            </button>
            <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition cursor-pointer">
              Explore services
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative w-full flex justify-center items-center h-[500px]"> {/* Add a fixed height for the relative container */}
          {/* Image 1 - background large */}
          <img
            src={image}
            alt="Main"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-auto object-cover rounded-lg shadow-lg"
          />
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;