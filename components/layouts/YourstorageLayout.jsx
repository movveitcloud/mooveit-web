import React from "react";
import { useRouter } from "next/router";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const YourstorageLayout = ({ storageStatus }) => {
  const dummyData = [
    { _id: 1, Address: "45-59 Lots Road, Chelsea, SW10 0RN", status: "enquiries" },
    { _id: 1, Address: "55-69 Lots Road, Chelsea, SW10 0RN", status: "enquiries" },
    { _id: 1, Address: "65-69 Lots Road, Chelsea, SW10 0RN", status: "active" },
    { _id: 1, Address: "75-79 Lots Road, Chelsea, SW10 0RN", status: "active" },
    { _id: 1, Address: "85-89 Lots Road, Chelsea, SW10 0RN", status: "active" },
    { _id: 1, Address: "95-99 Lots Road, Chelsea, SW10 0RN", status: "active" },
  ];
  const router = useRouter();
  const viewStorage = (_id) => router.push(`/your-storage/${_id}`);

  return (
    <div className="mt-12 flex w-full flex-wrap gap-5">
      {dummyData.map(
        ({ Address, status, _id }) =>
          storageStatus === status && (
            <div className="mb-5  w-full rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]">
              <div className="rounnded-md h-[120px]">
                <img src="/listing.png" alt="listing view" className="h-full w-full rounded-md object-cover" />
              </div>
              <div className=" mt-3 flex text-[#959595]">
                <LocationMarkerIcon className="mr-2 w-4" />
                <h4 className="text-[.6rem] lg:text-[.7rem]">{Address}</h4>
              </div>

              <div className="float-right mt-2 md:mt-4 ">
                <div className=" flex">
                  <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                  <p
                    className="cursor-pointer text-[.7rem] text-[#4543A5] lg:text-[.8rem]"
                    onClick={() => viewStorage(_id)}>
                    MANAGE
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default YourstorageLayout;
