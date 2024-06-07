import React from "react";

const DataVisualization = () => {
  return (
    <div className="bg-gray-100 px-6 min-h-screen pt-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl text-[#0C364B] font-bold mb-6 text-center">
          Data Statistik
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="bg-gray-300 p-9 rounded-lg flex flex-col items-center">
              <h3 className="text-xl text-[#0C364B] font-semibold mb-3 self-start text-left">
                Data Terlapor
              </h3>
              <span className="text-5xl font-bold">100</span>
              <div className="w-19 h-19 bg-gray-600 rounded-full mt-1 flex items-center justify-center">
                <div className="w-11 h-11 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-300 p-9 rounded-lg flex flex-col items-center">
              <h3 className="text-xl text-[#0C364B] font-semibold mb-3 self-start text-left">
                Data Tertangani
              </h3>
              <span className="text-5xl font-bold">80</span>
              <div className="w-19 h-19 bg-gray-600 rounded-full mt-1 flex items-center justify-center">
                <div className="w-11 h-11 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-300 p-9 rounded-lg flex flex-col items-center">
              <h3 className="text-xl text-[#0C364B] font-semibold mb-3 self-start text-left">
                Data dalam Penanganan
              </h3>
              <span className="text-5xl font-bold">15</span>
              <div className="w-19 h-19 bg-gray-600 rounded-full mt-1 flex items-center justify-center">
                <div className="w-11 h-11 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-300 p-9 rounded-lg flex flex-col items-center">
              <h3 className="text-xl text-[#0C364B] font-semibold mb-3 self-start text-left">
                Data Belum Ditangani
              </h3>
              <span className="text-5xl font-bold">5</span>
              <div className="w-19 h-19 bg-gray-600 rounded-full mt-1 flex items-center justify-center">
                <div className="w-11 h-11 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 h-full rounded-lg flex items-center justify-center col-span-1">
            <div className="w-48 h-48 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
