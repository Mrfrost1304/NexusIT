import { useState } from 'react';
import image4 from '../assets/Images/image4.avif'

const EmailSuscribeSection = () => {
    const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log('Submitted email:', email);
      // In a real application, you would send this data to a backend.
      setEmail('');
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  return (
   <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      
      
      {/* Container for the left image */}
      <div className="mb-8 lg:mb-0 lg:mr-10 w-full lg:w-1/2 max-w-xl">
        <img
          src={image4}
          alt="Laptop displaying data insights"
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          
        />
      </div>

      {/* Container for the right form */}
      <div className="flex w-full max-w-xl h-99 bg-white p-8 rounded-lg shadow-xl border border-gray-200 justify-center items-center">
        <div>
             <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Discover expert IT insights
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Subscribe for the latest in IT trends, tips, and updates tailored for startups and SMBs.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            {submitted ? 'Subscribed!' : 'Submit'}
          </button>
        </form>
        </div>
       
      </div>
    </div>
  )
}

export default EmailSuscribeSection