import React from "react";

const EmptyStorage = () => {
  return (
    <div className="text-center text-xl font-bold ">
      <div className="flex justify-center">
        <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
          <p className="mt-5 font-semibold text-[#12181F]">Your Storage</p>
          <div className="flex flex-col items-center space-y-4 px-4 py-24">
            <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
            <p className="w-[80%] text-center text-xl font-bold text-[#AAAAAA]">{`You have not booked any storage at this time.`}</p>
            <div className="border-1 btn mt-2  border-accent px-9 text-black hover:border-accent hover:bg-accent ">
              <p>Find listings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyStorage;
