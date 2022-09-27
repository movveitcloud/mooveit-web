import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, verifyEmail } from "../../redux/features/auth.slice";
import { PageLoading } from "../../components";

const AccountVerify = () => {
  const [timer, setTimer] = useState(5);
  const [count, setCount] = useState(false);
  const { verifyEmailData, verifyEmailLoading } = useSelector((state) => state.auth);
  const user = authenticatedUser();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = router.query.token;

  const handleProceed = () => {
    router.replace(`${user.role == "partner" ? "/listings" : "/your-storage"}`);
  };

  useEffect(() => {
    if (user && user.isVerified) {
      router.replace(user.role == "partner" ? "/listings" : "/your-storage");
      return;
    }
    // if (token !== undefined && !user) {
    //   router.replace("/");
    // }
    if (token !== undefined && user) {
      dispatch(verifyEmail({ token, setCount }));
    }
  }, [token]);

  // useEffect(() => {
  //   const redirect = setInterval(() => {
  //     if (timer > 2) {
  //       setTimer(timer - 1);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(redirect);
  //   };
  // }, [count]);

  if (verifyEmailLoading) {
    return <PageLoading loading={verifyEmailLoading} />;
  }

  return (
    verifyEmailData?.success && (
      <div className="flex flex-col h-screen bg-[#F9F9F9]">
        <div className="shadow">
          <nav className="max-w-[85%] w-full mx-auto py-6 flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="max-h-8" />
              </a>
            </Link>
            {/* <div className="flex items-center text-black gap-5">
              <Link href="/signup">Sign Up</Link>
            </div> */}
          </nav>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center text-center px-5">
          <div className="bg-accent rounded-full w-fit flex justify-center p-5 items-center mb-10">
            <CheckCircleIcon className="text-primary w-14 md:w-20" />
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">Your Account Has Been Verified</h2>
          <p className="text-[#959595] my-4">
            You will be automatically redirected in (5s) or click the button below to get started.
          </p>
          <button className="btn btn-primary btn-wide w-6xl mt-5" onClick={handleProceed}>
            proceed to dashboard
          </button>
        </div>
      </div>
    )
  );
};

export default AccountVerify;
