import { LocationMarkerIcon, MapIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const HeroSection = () => {
  const router = useRouter();

  const handleSearch = () => {
    router.push("/search");
  };

  return (
    <main className="bg-[#f9f9f9] mb-[10%]">
      <div className="flex justify-center h-[600px] rounded-2xl max-w-[90%] lg:max-w-[85%] mx-auto bg-[url('/hero-bg.png')] bg-cover relative">
        <div className="text-center space-y-3 sm:space-y-5 my-24 max-w-[80%] md:max-w-2xl mx-auto">
          <h1 className="font-semibold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Find Storage Around <span className="sm:mt-3 block">You Easily</span>
          </h1>
          <p className="sm:max-w-[85%] mx-auto text-sm md:text-base text-white">
            Get access to a pool of prospective customers when you list your storage with us.
          </p>
          <Link href="/get-started">
            <a className="btn btn-primary text-sm w-[150px] font-normal">Get Started</a>
          </Link>
        </div>

        <div className="p-8 w-[80%] sm:w-[90%] absolute -bottom-[10%]  sm:-bottom-[25%]  mx-auto rounded-2xl bg-white">
          <h2 className="text-[#222222] text-base mb-4">Find a Storage Unit Near You</h2>
          <div className="space-y-5 text-center text-sm text-[#222222]">
            <div className="p-6 bg-[#DDDDDD66] flex flex-row gap-4 rounded-2xl">
              <div className="flex flex-row flex-grow gap-4 items-center">
                <MapIcon className="text-primary w-6" />
                <input
                  type="text"
                  placeholder="Enter postcode or location"
                  className="w-full bg-transparent h-full pr-6 outline-none text-base placeholder:text-[#959595]"
                />
              </div>
              <button className="btn btn-primary w-[220px] font-normal flex flex-row gap-2" onClick={handleSearch}>
                <SearchIcon className="w-5" />
                <span>Search Listings</span>
              </button>
            </div>

            <p className="text-[#959595] text-base">OR</p>

            <button className="w-full p-6 bg-accent flex flex-row  justify-center rounded-2xl active:scale-[95%] transition-transform ">
              <div className="flex flex-row gap-4 items-center">
                <LocationMarkerIcon className="text-primary w-6" />
                <p className="text-primary text-base">Use Live Location</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
