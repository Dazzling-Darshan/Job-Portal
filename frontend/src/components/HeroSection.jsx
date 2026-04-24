import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-6 my-16 max-w-4xl mx-auto">
        
        {/* Badge */}
        <span className="px-5 py-2 mx-auto rounded-full bg-linear-to-r from-orange-100 to-orange-50 text-[#F83002] font-semibold text-sm shadow-sm">
          🚀 No. 1 Job Hunt Platform
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Search, Apply & <br />
          Get Your{" "}
          <span className="bg-linear-to-r from-[#6A38C2] to-purple-500 bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover thousands of job opportunities tailored just for you. Start
          your journey today and land your dream career effortlessly.
        </p>

        {/* Search Bar */}
        <div className="flex w-full sm:w-[70%] md:w-[60%] lg:w-[50%] shadow-xl border border-gray-200 px-4 py-2 rounded-full items-center gap-3 mx-auto bg-white hover:shadow-2xl transition duration-300">
          
          <input
            type="text"
            placeholder="🔍 Find your dream job..."
            className="outline-none border-none w-full text-gray-700 placeholder-gray-400"
          />

          <Button className="rounded-full bg-[#6A38C2] hover:bg-purple-700 transition duration-300 px-5 py-2">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;