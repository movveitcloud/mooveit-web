import Link from "next/link";
import React from "react";

const StorageListingCTA = () => {
  return (
    <div className="flex items-center gap-12 bg-white p-8 rounded-2xl max-w-[90%] lg:max-w-[85%] mx-auto">
      <div className="w-[500px] h-[350px]">
        <img src="/auth-image.png" alt="try out storage listing" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div>
        <h2 className="font-semibold text-4xl text-[#222222]">Try Out Storage Listing</h2>
        <p className="text-base my-6 text-[#959595]">
          Get access to a pool of prospective customers when you list your storage with us.
        </p>
        <Link href="/signup">
          <a className="btn btn-primary w-[175px] text-xs font-light">Become a Partner</a>
        </Link>
      </div>
    </div>
  );
};

export default StorageListingCTA;
