import React from 'react'

const MessageSection = () => {
     const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle form submission here,
    // like sending the data to an API endpoint.
    console.log('Form submitted!');
  };
  return (
   <section className="w-full bg-gray-100 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className="flex flex-col pl-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Discuss your IT needs with us
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out for tailored IT solutions.
          </p>
          <p className="text-lg font-bold mb-2">
            Contact: - <span className="text-black">+91 8009676899</span>
          </p>
          <p className="text-lg font-bold">Location - Remote</p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-100 p-6 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">FULL NAME</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="email@website.com"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">YOUR MESSAGE</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border rounded-md p-3"
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacyPolicy" className="font-medium text-gray-700">I agree to the privacy policy.</label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white cursor-pointer bg-orange-600 hover:bg-orange-800 active:bg-orange-900 "
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default MessageSection;