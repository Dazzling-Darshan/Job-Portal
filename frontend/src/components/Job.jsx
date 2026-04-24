import { Bookmark } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:border-gray-200">
      
      {/* Top Section */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <p className="font-medium">2 days ago</p>

        <Button 
          variant="outline" 
          className="rounded-full size-9 hover:bg-gray-100 transition"
        >
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {/* Company Section */}
      <div className="flex items-center gap-3 my-4">
        <Button className="p-0 rounded-full overflow-hidden hover:scale-105 transition">
          <Avatar className="w-12 h-12 border">
            <AvatarImage src="https://img.freepik.com/premium-psd/best-company-logo-transparent-background_1101614-58913.jpg" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-semibold text-gray-800 text-base">
            Company Name
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h1 className="font-semibold text-lg text-gray-900 my-2">
          Title
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          consequuntur laudantium esse explicabo. Quam, debitis!
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-2 mt-4">
        <Badge className="bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full hover:bg-blue-100 transition">
          12 Positions
        </Badge>

        <Badge className="bg-red-50 text-[#F83002] font-medium px-3 py-1 rounded-full hover:bg-red-100 transition">
          Part Time
        </Badge>

        <Badge className="bg-purple-50 text-[#7209b7] font-medium px-3 py-1 rounded-full hover:bg-purple-100 transition">
          24 LPA
        </Badge>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto flex-1 hover:bg-gray-100 transition"
        >
          Details
        </Button>

        <Button 
          className="w-full sm:w-auto flex-1 bg-[#7209b7] hover:bg-[#5a0a91] transition shadow-sm"
        >
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;