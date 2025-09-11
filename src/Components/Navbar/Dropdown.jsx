import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ServiceDropdown = () => {
  return (
    <div className="flex gap-16 items-start">
      {/* Web Solutions */}
      <div className="flex-1">
        <h4 className="mb-6 text-sm uppercase tracking-wide text-gray-400">
          WEB SOLUTIONS
        </h4>
        <div className="space-y-6">
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              Website Design
            </h5>
            <p className="text-sm text-gray-600">
              Responsive websites built for growth.
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              Mobile Apps
            </h5>
            <p className="text-sm text-gray-600">
              Custom apps for every platform.
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              AI & Automation
            </h5>
            <p className="text-sm text-gray-600">
              Automate tasks with smart solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div className="flex-1">
        <h4 className="mb-6 text-sm uppercase tracking-wide text-gray-400">
          CLOUD & DEVOPS
        </h4>
        <div className="space-y-6">
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              Cloud Migration
            </h5>
            <p className="text-sm text-gray-600">
              Move your business to the cloud.
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              DevOps Services
            </h5>
            <p className="text-sm text-gray-600">
              Faster launches, seamless updates.
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              Managed IT
            </h5>
            <p className="text-sm text-gray-600">
              Reliable support for your systems.
            </p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="flex-1">
        <h4 className="mb-6 text-sm uppercase tracking-wide text-gray-400">
          PROCESS
        </h4>
        <div className="space-y-6">
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">
              How It Works
            </h5>
            <p className="text-sm text-gray-600">Our proven 4-step workflow.</p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">FAQs</h5>
            <p className="text-sm text-gray-600">Find quick answers here.</p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold text-black">Contact</h5>
            <p className="text-sm text-gray-600">Connect with our experts.</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="h-75 w-85 flex-shrink-0 flex flex-col justify-between rounded-2xl bg-black px-16 py-10 text-white">
        <div>
          <h4 className="mb-3 text-2xl font-bold leading-tight">
            Get your custom quote
          </h4>
          <p className="text-sm leading-relaxed text-gray-300">
            Share your needs for a tailored proposal.
          </p>
        </div>
        <div>
          <button className="flex cursor-pointer items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80">
            Request →
          </button>
        </div>
      </div>
    </div>
  );
};

export const SupportDropdown = () => {
  

  return (
    
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Contact Us
              </a>
            </div>
         
  );
};

export default ServiceDropdown;
