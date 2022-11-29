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
        <h2 className="hidden md:inline font-semibold text-4xl text-[#222222]">Try Out Storage Listing</h2>
        <p className="text-base my-6  text-[#959595]">
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
