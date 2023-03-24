import React, { useEffect } from "react";
import Link from "next/link";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";
//import { storageFeatures } from "../../helpers/data";
import { DuplicateIcon, StarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getStorageFeatures } from "../../redux/features/config.slice";
import Image from "next/image";

const ListingCard = ({ item }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorageFeatures());
  }, []);

  const { storageFeatures } = useSelector((state) => state.config);
  const getFeatures = () => {
    const filter = storageFeatures.filter((p) => item?.storageFeatures?.includes(p.value));
    return filter;
  };

  return (
    <Link href={`/book/${item?._id}`}>
      <a className="h-full w-full rounded-lg bg-white p-5 transition-shadow duration-500 hover:shadow sm:w-[375px]">
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
          <Image
            src={item?.media?.[0]}
            alt="Listing"
            className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
            placeholder="blur"
            blurDataURL="/dummyListing.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {item?.media?.length > 1 && (
            <DuplicateIcon className="drop-shado absolute top-3 right-3 w-7 rotate-180 fill-[#e2e1e1]" />
          )}
        </div>
        <div className="">
          <h3 className="py-3 font-bold text-[#222222]">{`${item?.storageTitle?.slice(0, 38)}${
            item?.storageTitle?.length > 38 ? "..." : ""
          }`}</h3>
          <p className="flex flex-row items-center gap-2 text-primary">
            <LocationMarkerIcon className="w-4" />
            <span
              className="tooltip tooltip-primary text-sm uppercase"
              data-tip={item?.address}>{`${item?.address?.slice(0, 38)}${
              item?.address?.length > 38 ? "..." : ""
            }`}</span>
          </p>

          <div className="space-y-4 py-3">
            <div className="flex flex-row gap-3">
              <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                <ClockIcon className="w-4 text-[#222222]" />
                <span className="text-[12px] uppercase text-[#222222]">{`${item?.storageAccessPeriod} ACCESS`} </span>
              </p>
              <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                <MapIcon className="w-4 text-[#222222]" />
                <span className="text-[12px] uppercase text-[#222222]">{`${item?.storageSize?.name} SQ. FT`}</span>
              </p>
            </div>

            {/*storage features */}
            <div className="flex flex-row items-center gap-2">
              {getFeatures()?.map(({ value, label, image }) => (
                <span key={value} className="tooltip tooltip-primary" data-tip={label}>
                  <img src={image} alt="feature-icon" className="h-4 w-4" />
                </span>
              ))}
            </div>

            {/* {(item?.delivery || item?.packing) && (
              <div className="flex flex-row gap-3">
                {item?.delivery && (
                  <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                    <span className="rounded-full bg-accent p-[6px]">
                      <TruckIcon className="w-4 text-primary" />
                    </span>
                    <span className="text-[12px] text-[#222222]">Delivery</span>
                  </p>
                )}
                {item?.packing && (
                  <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                    <span className="rounded-full bg-accent p-[6px]">
                      <ArchiveIcon className="w-4 text-primary" />
                    </span>
                    <span className="text-[12px] text-[#222222]">Pack & Move</span>
                  </p>
                )}
              </div>
            )} */}

            <div className="flex flex-row gap-6 ">
              {item?.services?.map(
                (val,i) =>
                  (val === "delivery" || val === "packing") && (
                    <div className="flex flex-row gap-6 " key={i}>
                      {val === "delivery" && (
                        <p className="flex flex-row items-center gap-2">
                          <span className="rounded-full bg-accent p-[6px]">
                            <TruckIcon className="w-4 text-primary" />
                          </span>
                          <span className="text-[12px]">Delivery</span>
                        </p>
                      )}

                      {val === "packing" && (
                        <p className="flex flex-row items-center gap-2">
                          <span className="rounded-full bg-accent p-[6px]">
                            <ArchiveIcon className="w-4 text-primary" />
                          </span>
                          <span className="text-[12px]">Pack & Move</span>
                        </p>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-row items-center justify-between">
            <p className="text-xl font-semibold text-primary">
              {formatMoney(item?.monthlyRate)} <span className="text-xs font-normal text-[#959595]">/month</span>
            </p>
            {/* <div className="flex items-center">
              <StarIcon className="w-5 text-accent" /> <p className="text-sm">4.76</p>
            </div> */}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ListingCard;
