import React from "react";

// import Accordion from "../../shared/Accordion";

const Type = ({ storageType, storageFloor, storageFeatures }) => {
  return (
    // <Accordion title="type">
    //<div className="space-y-4">
    <>
      <div className="mt-2 flex cursor-pointer justify-between  px-4  text-[#222222] md:px-6">
        <h2 className="text-left text-sm font-semibold capitalize md:text-base">Type</h2>
      </div>
      <div className="  px-4 py-4 text-sm text-[#222222] md:px-6 md:text-base">
        <div className="grid grid-cols-1 gap-3 gap-y-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">Storage Type</h3>
            <div className="items-center  tracking-wide">{storageType}</div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Storage Floor</h3>
            <div className="items-center capitalize ">{storageFloor}</div>
          </div>
        </div>

        <div className="relative">
          <h3 className="mb-2 font-semibold">Features</h3>

          <div className="flex items-center space-x-2">
            {/* {storageFeatures != "N/A"
              ? storageFeatures?.map((val, index) => (
                  <div key={index}>
                    <p className="">{val.name}</p>
                  </div>
                ))
              : "N/A"} */}
            {storageFeatures}
          </div>
        </div>
      </div>
    </>
    //</div>
    // </Accordion>
  );
};

export default Type;
