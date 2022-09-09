import { CheckCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import { Meta } from "../../components/navigation";

const AccountVerify = () => {
  return (
    <>
      <Meta title="Account Verified" />
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
          <div className="bg-[#CFE8A9] rounded-full w-fit flex justify-center p-5 items-center mb-10">
            <CheckCircleIcon className="text-primary w-14 md:w-20" />
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">Your Account Has Been Verified</h2>
          <p className="text-[#959595] my-4">
            You will be automatically redirected in (3s) or click the button below to get started.
          </p>
          <button className="btn btn-primary btn-wide w-6xl mt-5">proceed to dashboard</button>
        </div>
      </div>
    </>
  );
};

export default AccountVerify;
