import { AtSymbolIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import { Meta } from "../../components/navigation";

const VerifyEmail = () => {
  return (
    <>
      <Meta title="Verification Page" />
      <div className="flex flex-col h-screen bg-[#F9F9F9]">
        <div className="shadow">
          <nav className="max-w-[85%] w-full mx-auto py-6 flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            <div className="flex items-center text-black gap-5">
              <Link href="/signup">Sign Up</Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center text-center px-5">
          <div className="bg-[#CFE8A9] rounded-full w-fit flex justify-center p-5 items-center h-auto mb-10">
            <AtSymbolIcon className="text-primary w-14 md:w-20" />
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">Verify your Email Address</h2>
          <p className="text-[#959595] my-2">We’ve sent a verification link to your email. Kindly check.</p>
          <p className="text-primary">johndoughnut@gmail.com</p>
          <button className="btn btn-primary btn-wide w-6xl my-10">open email app</button>
          <p className="text-[#959595]">
            Didn’t receive the email?
            <Link href="#">
              <a className="text-black"> Click to resend </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
