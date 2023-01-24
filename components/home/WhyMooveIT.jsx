import Image from "next/image";
import Link from "next/link";

const WhyMooveIT = () => {
  return (
    <section className="max-full bg-[#f9f9f9]">
      <div className="flex ">
        <div className="w-full bg-primary pb-[6rem] pt-[3rem] text-white md:w-[50%]">
          <div className="mx-auto w-[90%] text-left text-sm leading-7 md:w-[74%] lg:max-w-[85%] 2xl:text-base">
            <h2 className="my-[2rem] text-2xl font-semibold text-white">Why MooveIT?</h2>
            <p className="mt-8 mb-4 font-light ">
              MooveIT provides an advanced online marketplace for self-storage and moving services that will effectively
              connect customers and service providers, bringing greater convenience for both.
            </p>
            <p className="font-light ">
              Our vision is to revolutionise the self-storage and moving industry by leveraging state-of-the-art
              technologies like AI, ML and Augmented Reality.Our vision is to revolutionise the self-storage and moving
              industry by leveraging state-of-the-art technologies like AI, ML and Augmented Reality.
              <br />
            </p>
            <Link href="/search">
              <a className="btn btn-accent mt-8 w-[175px] text-xs font-light text-[#222222]">Browse Listings</a>
            </Link>
          </div>
        </div>
        <div className="relative hidden bg-primary md:block md:w-[50%]">
          <Image
            src="/side.png"
            alt="movveit"
            // placeholder="blur"
            // blurDataURL="/fallback.png"
            className=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMooveIT;
