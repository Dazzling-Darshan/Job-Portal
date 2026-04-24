import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 cursor-pointer 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Company Info */}
      <div className="mb-3">
        <h1 className="font-semibold text-lg text-gray-800 tracking-tight">
          Company Name
        </h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      {/* Job Info */}
      <div className="mb-4">
        <h1 className="font-bold text-xl text-gray-900 mb-1">Job Title</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo
          natus perferendis reiciendis veniam facere quibusdam sed.
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-3 mt-2">
        <Badge
          className="bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-blue-100 transition"
          variant="ghost"
        >
          12 Positions
        </Badge>

        <Badge
          className="bg-red-50 text-[#F83002] font-semibold px-3 py-1 rounded-full hover:bg-red-100 transition"
          variant="ghost"
        >
          Part Time
        </Badge>

        <Badge
          className="bg-purple-50 text-[#7209b7] font-semibold px-3 py-1 rounded-full hover:bg-purple-100 transition"
          variant="ghost"
        >
          24 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
