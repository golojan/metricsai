import React from "react";

const AdBox = () => {
  return (
    <>
      <div className="input-group mb-3 shadow-sm rounded-4 min-h-[100px] overflow-hidden py-2 bg-gradient-to-b from-[#556c91] to-[#3266af]">
        <div className="text-white text-center w-full min-h-[50px]">
          <h3 className="text-4xl my-3">Ad</h3>
          <p className="text-sm">Ad space available</p>
        </div>
      </div>
    </>
  );
};

const AdBoxMidium = () => {
  return (
    <>
      <div className="input-group mb-3 shadow-sm rounded-4 min-h-[100px] overflow-hidden py-2 bg-gradient-to-b from-[#556c91] to-[#3266af]">
        <div className="text-white text-center w-full min-h-[200px]">
          <h3 className="text-4xl my-3">Ad</h3>
          <p className="text-sm">Ad space available</p>
        </div>
      </div>
    </>
  );
};

const AdBoxLarge = () => {
  return (
    <>
      <div className="input-group mb-3 shadow-sm rounded-4 min-h-[100px] overflow-hidden py-2 bg-gradient-to-b from-[#556c91] to-[#3266af]">
        <div className="text-white text-center w-full min-h-[400px]">
          <h3 className="text-4xl my-3">Ad</h3>
          <p className="text-sm">Ad space available</p>
        </div>
      </div>
    </>
  );
};
export { AdBox, AdBoxMidium, AdBoxLarge };
