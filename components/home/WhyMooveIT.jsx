import Image from "next/image";
import Link from "next/link";

const WhyMooveIT = () => {
  return (
    <section className="max-full bg-[#f9f9f9]">
      <div className="flex ">
        <div className="w-full bg-primary pb-[6rem] pt-[3rem] text-white md:w-[50%]">
          <div className="mx-auto w-[90%] text-left text-sm leading-7 md:w-[74%] lg:max-w-[85%] 2xl:text-base">
            <h2 className="my-[2rem] text-2xl font-semibold text-white">Movve It - The Future of Moving &amp; Storage Solutions</h2>
            <p className="mt-8 mb-4 font-light ">
            Welcome to Movve It - your one-stop solution to all your moving and storage needs.
            </p>
            <p className="font-light ">
            Our goal is to consolidate all aspects of moving into a convenient all-in-one package,
saving you countless hours of searching for separate service providers and dealing with
endless paperwork and hidden fees.            </p>
<p className="font-light ">At Movve It, we understand the struggles of moving and storage, which is why we&#39;re
committed to providing you with exceptional service and support. Our team of young,
tech-savvy individuals is dedicated to bringing ease, convenience, and transparency to
the process.</p>
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
