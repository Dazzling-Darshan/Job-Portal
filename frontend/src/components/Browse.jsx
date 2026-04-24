import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'

const randomJobs = [1, 2, 3, 4, 5, 56, 7];

const Browse = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Heading */}
        <h1 className="font-semibold text-2xl text-gray-800 mb-6">
          Search Results 
          <span className="text-[#7209b7]"> ({randomJobs.length})</span>
        </h1>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            randomJobs.map((item, index) => {
              return <Job key={index} />
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Browse