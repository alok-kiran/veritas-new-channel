import React from 'react';

const FeaturedNewsSkeleton = () => {
  return (
    <div className="mb-8 hover-scale transition-all duration-200 animate-scale-in cursor-pointer w-full">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 w-full mb-4"></div>
        <div className="h-4 bg-gray-200 w-5/6 mb-4"></div>
        <div className="h-4 bg-gray-200 w-4/6 mb-4"></div>
        <div className="h-3 bg-gray-300 w-2/3 mb-2"></div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-300 rounded-full mr-2"></div>
          <div className="h-3 bg-gray-300 w-20"></div>
          <div className="h-3 bg-gray-300 w-16 ml-auto"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturedNewsSkeleton;