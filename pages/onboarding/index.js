import React from "react";
import { useRouter } from "next/router";
import { NewListingLayout } from "../../components";
import { ListingSteps } from "../../helpers/data";

const Onboarding = () => {
  const router = useRouter();

  return (
    <NewListingLayout>
      <div className="h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-[#222222] text-3xl font-semibold mb-4">Let’s Help You With Your First Listing</h1>
          <p className="text-[#959595]">Get started with 4 easy steps.</p>
          <div className="flex justify-center my-8">
            <div className="space-y-3">
              {ListingSteps?.map((step, i) => (
                <div className="flex gap-4 items-center text-[#222222]" key={i}>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#CFE8A9] ">
                    <p className="text-sm">{i + 1}</p>
                  </div>
                  <p className="">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-primary w-[400px]" onClick={() => router.replace("/listings/create")}>
            Next
          </button>
        </div>
      </div>
    </NewListingLayout>
  );
};

export default Onboarding;
