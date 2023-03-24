import React, { useContext } from "react";

const Access = ({ storageAccessPeriod, storageAccessType, parkingInstruction, parkingPermit }) => {
  console.log(parkingPermit);
  return (
    <>
      <div className="mt-2 flex cursor-pointer justify-between  px-4  text-[#222222] md:px-6">
        <h2 className="text-left text-sm font-semibold capitalize md:text-base">Access</h2>
      </div>
      <div className="grid grid-cols-1 gap-2 gap-y-4 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Storage Access Period</h3>
          <div className="items-center ">{storageAccessPeriod}</div>
        </div>

        <div>
          <h3 className="font-semibold ">Storage Access Type</h3>
          <div className="items-center ">{storageAccessType}</div>
        </div>

        {/* <div className="items-center">
          <p className="font-bold">Parking Permit</p>
          {parkingPermit}
        </div>

        <div>
          <h3 className="font-bold">Parking Instructions</h3>
          <div className="items-center">{parkingInstruction}</div>
        </div> */}
      </div>
    </>
  );
};

export default Access;
