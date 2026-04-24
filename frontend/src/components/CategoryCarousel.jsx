import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Cloud Architect",
  "Full Stack Developer",
  "Data Engineer",
  "ML Engineer",
];

const CategoryCarousel = () => {
  return (
    <div className="py-10">
      <Carousel
        className="w-full max-w-2xl mx-auto"
        opts={{
          align: "start",          
          loop: true,             
          dragFree: false,         
        }}
      >
        <CarouselContent className="gap-4">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 text-sm font-medium border-gray-300 
                           hover:bg-[#6A38C2] hover:text-white hover:border-[#6A38C2]
                           transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-40px] hover:bg-gray-100 transition" />
        <CarouselNext className="right-[-40px] hover:bg-gray-100 transition" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;