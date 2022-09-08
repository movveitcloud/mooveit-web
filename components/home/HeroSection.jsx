import { MapIcon } from "@heroicons/react/outline";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="bg-[#f9f9f9]">
      <div className="flex justify-center h-[600px] rounded-2xl max-w-[90%] lg:max-w-[85%] mx-auto bg-[url('/hero-bg.png')] bg-cover">
        <div className="text-center space-y-3 sm:space-y-5 my-24 max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          <h1 className="font-semibold text-white text-3xl md:text-6xl leading-10">
            Find Storage Around <span className="mt-3 block">You Easily</span>
          </h1>
          <p className="max-w-[85%] mx-auto text-sm md:text-base text-white">
            Get access to a pool of prospective customers <br /> when you list your storage with us.
          </p>
          <Link href="/get-started">
            <a className="btn btn-primary text-sm w-[150px] font-normal">Get Started</a>
          </Link>
        </div>
      </div>

      <div className="p-8 w-[75%] sm:-mt-[12%] -mt-[50%]  mx-auto rounded-2xl bg-white">
        <h2 className="text-[#222222] text-base mb-4">Find a Storage Unit Near You</h2>
        <div className="space-y-5 text-center text-sm text-[#222222]">
          <div className="p-6 bg-[#DDDDDD66] flex flex-row  rounded-2xl">
            <div className="flex flex-row flex-grow gap-4 items-center">
              <MapIcon className="text-[#959595] w-6" />
              <input
                type="text"
                placeholder="Enter postcode or location"
                className="w-full bg-transparent h-full pr-6 border-none outline-none text-base placeholder:text-[#959595]"
              />
            </div>
            <button className="btn btn-primary font-normal flex flex-row gap-2">
              <span>Search Listings</span>
            </button>
          </div>

          <p className="text-[#959595] text-base">OR</p>

          <div className="p-6 bg-[#FFFDE3] flex flex-row  justify-center rounded-2xl">
            <div className="flex flex-row gap-4 items-center">
              <MapIcon className="text-[#959595] w-6" />
              <p className="text-[#959595] text-base">Use Live Location</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
