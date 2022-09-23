import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, logout, resendVerifyEmail } from "../../redux/features/auth.slice";

const VerifyEmail = () => {
  const [pageReady, setPageReady] = useState(false);
  const { resendEmailVerifyLoading } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = authenticatedUser();

  const handleLogout = () => {
    dispatch(logout());
    location.assign("/login");
  };
  const handleSubmit = () => {
    const payload = { email: user.email };
    dispatch(resendVerifyEmail({ payload }));
  };

  useEffect(() => {
    if (!user) {
      router.replace("login");
    }
    if (user && user.isVerified) {
      router.replace(`${user.role == "partner" ? "/listings" : "/your-storage"}`);
    }
    setPageReady(true);
  }, []);

  return (
    pageReady && (
      <div className="flex flex-col h-screen bg-[#F9F9F9]">
        <div className="shadow">
          <nav className="max-w-[85%] w-full mx-auto py-6 flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            <div className="flex items-center text-black gap-5">
              <p onClick={handleLogout} className="cursor-pointer">
                Log out
              </p>
            </div>
          </nav>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center text-center px-5">
          <div className="bg-accent rounded-full w-fit flex justify-center p-5 items-center h-auto mb-10">
            <AtSymbolIcon className="text-primary w-14 md:w-20" />
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">Verify your Email Address</h2>
          <p className="text-[#959595] my-2">We've sent a verification link to your email. Kindly check.</p>
          <p className="text-primary">{user?.email}</p>
          <button
            className={`${resendEmailVerifyLoading && "loading"} btn btn-primary btn-wide w-6xl my-10`}
            onClick={handleSubmit}>
            {resendEmailVerifyLoading ? "" : "resend verification link"}
          </button>
          <p className="text-[#959595]">
            Didn't receive the email?
            <button className="btn-link text-[#222222] hover:text-primary ml-1">Click to resend </button>
          </p>
        </div>
      </div>
    )
  );
};

export default VerifyEmail;
