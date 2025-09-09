import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ isOpen }) => {
  return (
   <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto mt-4 bg-white rounded-lg shadow-lg p-12"
        >
          <div className="flex gap-16 items-start">
            {/* Web Solutions */}
            <div className="flex-1">
              <h4 className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
                WEB SOLUTIONS
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">Website Design</h5>
                  <p className="text-gray-600 text-sm">
                    Responsive websites built for growth.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">Mobile Apps</h5>
                  <p className="text-gray-600 text-sm">
                    Custom apps for every platform.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">AI & Automation</h5>
                  <p className="text-gray-600 text-sm">
                    Automate tasks with smart solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="flex-1">
              <h4 className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
                CLOUD & DEVOPS
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">Cloud Migration</h5>
                  <p className="text-gray-600 text-sm">
                    Move your business to the cloud.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">DevOps Services</h5>
                  <p className="text-gray-600 text-sm">
                    Faster launches, seamless updates.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">Managed IT</h5>
                  <p className="text-gray-600 text-sm">
                    Reliable support for your systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="flex-1">
              <h4 className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
                PROCESS
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">How It Works</h5>
                  <p className="text-gray-600 text-sm">
                    Our proven 4-step workflow.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">FAQs</h5>
                  <p className="text-gray-600 text-sm">
                    Find quick answers here.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black mb-1">Contact</h5>
                  <p className="text-gray-600 text-sm">
                    Connect with our experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-black text-white rounded-2xl py-10 px-16 flex flex-col justify-between h-75 w-85 flex-shrink-0">
              <div>
                <h4 className="text-2xl font-bold leading-tight mb-3">
                  Get your custom quote
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Share your needs for a tailored proposal.
                </p>
              </div>
              <div>
                <button className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer">
                  Request →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export const SupportDropdown = () => {
  return (
    <>
      <el-dropdown class="inline-block">
        <button class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-500 shadow-xs  nav-link">
          Support
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            class="-mr-1 size-5 text-gray-400"
          >
            <path
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
        </button>

        <el-menu
          anchor="bottom end"
          popover
          class=" my-3 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div class="py-1">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
            >
              Help Center
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
            >
              Contact Us
            </a>
          </div>
        </el-menu>
      </el-dropdown>
    </>
  );
};

export default Dropdown;
