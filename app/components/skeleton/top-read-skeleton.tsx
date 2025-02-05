import React from 'react';

const TopReadSkeleton = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100">
      <h2 className="text-red-600 text-lg font-bold mb-4">Top Read</h2>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <div className="h-3 bg-gray-300 rounded w-20"></div>
              <div className="h-3 bg-gray-300 rounded w-16 ml-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopReadSkeleton;
