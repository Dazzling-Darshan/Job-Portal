import React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    fitlerType: "Salary",
    array: ["0-40K", "42-1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  return (
    <div className="w-full max-w-sm p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      
      {/* Header */}
      <h1 className="text-lg font-semibold text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 mb-4 border-gray-200" />

      {/* Filters */}
      <RadioGroup className="space-y-2">
        {
          fitlerData.map((data, index) => (
            <div key={index}>
              
              {/* Section Title */}
              <h1 className="font-semibold text-gray-700 text-base mb-2">
                {data.fitlerType}
              </h1>

              {/* Options */}
              <div className="space-y-2">
                {
                  data.array.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                    >
                      <RadioGroupItem value={item} id={item} />
                      <Label 
                        htmlFor={item}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {item}
                      </Label>
                    </div>
                  ))
                }
              </div>

            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard