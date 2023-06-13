import Image from "next/image";
import Link from "next/link";

const StorageListingCTA = () => {
  return (
    <div className="md:flex items-center gap-12 bg-white p-8  rounded-2xl max-w-[90%] lg:max-w-[85%] mx-auto">
      <h2 className="font-semibold text-xl text-[#222222] mb-6  md:hidden">Try Out Storage Listing</h2>
      <div className="relative md:w-[500px] h-[350px]">
        <Image
          src="/auth-image.png"
          alt="try out storage listing"
          // placeholder="blur"
          // blurDataURL="/fallback.png"
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <h2 className="hidden md:inline font-semibold text-4xl text-[#222222]">Move it and make it easy</h2>
        <p className="text-base my-6  text-[#959595]">
        Get ready to experience the all-in-one solution to your moving and storage needs. We
aren&#39;t just any storage listing company we have the most comprehensive database of
storage firms and vehicle providers, making us the "Airbnb" of storage solutions and the
most recent breakthrough in peer-to-peer moving and storage.
        </p>
        <Link href="/signup">
          <a className="btn btn-primary w-[175px] text-xs font-light">Become a Partner</a>
        </Link>
      </div>
    </div>
  );
};

export default StorageListingCTA;
