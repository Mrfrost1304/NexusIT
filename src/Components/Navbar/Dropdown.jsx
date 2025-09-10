import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  return (
    <el-dropdown class="inline-block relative">
      {/* Trigger button */}
      <button class="flex items-center gap-1 hover:text-gray-300 nav-link cursor-pointer px-3 py-2 text-sm font-semibold text-white">
        Services
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-5 w-5 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
          />
        </svg>
      </button>

      {/* Dropdown content */}
      <el-menu
        anchor="bottom start"
        popover
        class="absolute left-[-2rem] top-full mt-4 w-full max-w-7xl origin-top bg-white rounded-lg shadow-lg p-12 z-40"
      >
        <div class="flex gap-16 items-start">
          {/* Web Solutions */}
          <div class="flex-1">
            <h4 class="text-sm text-gray-400 mb-6 uppercase tracking-wide">
              WEB SOLUTIONS
            </h4>
            <div class="space-y-6">
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">Website Design</h5>
                <p class="text-gray-600 text-sm">Responsive websites built for growth.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">Mobile Apps</h5>
                <p class="text-gray-600 text-sm">Custom apps for every platform.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">AI & Automation</h5>
                <p class="text-gray-600 text-sm">Automate tasks with smart solutions.</p>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div class="flex-1">
            <h4 class="text-sm text-gray-400 mb-6 uppercase tracking-wide">
              CLOUD & DEVOPS
            </h4>
            <div class="space-y-6">
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">Cloud Migration</h5>
                <p class="text-gray-600 text-sm">Move your business to the cloud.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">DevOps Services</h5>
                <p class="text-gray-600 text-sm">Faster launches, seamless updates.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">Managed IT</h5>
                <p class="text-gray-600 text-sm">Reliable support for your systems.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div class="flex-1">
            <h4 class="text-sm text-gray-400 mb-6 uppercase tracking-wide">PROCESS</h4>
            <div class="space-y-6">
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">How It Works</h5>
                <p class="text-gray-600 text-sm">Our proven 4-step workflow.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">FAQs</h5>
                <p class="text-gray-600 text-sm">Find quick answers here.</p>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-black mb-1">Contact</h5>
                <p class="text-gray-600 text-sm">Connect with our experts.</p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div class="bg-black text-white rounded-2xl py-10 px-16 flex flex-col justify-between h-75 w-85 flex-shrink-0">
            <div>
              <h4 class="text-2xl font-bold leading-tight mb-3">
                Get your custom quote
              </h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Share your needs for a tailored proposal.
              </p>
            </div>
            <div>
              <button class="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer">
                Request →
              </button>
            </div>
          </div>
        </div>
      </el-menu>
    </el-dropdown>
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
