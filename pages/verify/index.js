import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, logout, verifyEmail } from "../../redux/features/auth.slice";

const OtpInput = ({ name, data, tabIndex, inputFocus, handleChange }) => {
  return (
    <input
      name={name}
      type="text"
      autoComplete="off"
      className="w-9 h-9 md:w-12 md:h-12 text-center rounded-md border focus:outline-primary"
      value={data[name]}
      onChange={handleChange}
      tabIndex={tabIndex}
      maxLength="1"
      onKeyUp={inputFocus}
      autoFocus={tabIndex == 1 ? true : false}
    />
  );
};

const VerifyEmail = () => {
  const initialState = { otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "" };
  const { verifyEmailLoading } = useSelector((state) => state.auth);
  const [pageReady, setPageReady] = useState(false);
  const [data, setData] = useState(initialState);
  const { otp1, otp2, otp3, otp4, otp5, otp6 } = data;
  const router = useRouter();
  const dispatch = useDispatch();
  const user = authenticatedUser();

  const disableBtn = !otp1 || !otp2 || !otp3 || !otp4 || !otp5 || !otp6;

  const handleLogout = () => {
    dispatch(logout());
    location.assign("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const inputFocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    const payload = { email: user.email, otp: Object.values(data).join("") };
    dispatch(verifyEmail({ payload }));
  };
  const resendOtp = () => {};

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
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
          <p className="text-[#959595] my-2">
            We've sent a one time password (OTP) to your email address. Kindly check
          </p>
          <p className="text-primary">{user?.email}</p>
          <form className="flex gap-3 my-10 px-3">
            <OtpInput name="otp1" tabIndex="1" data={data} handleChange={handleChange} inputFocus={inputFocus} />
            <OtpInput name="otp2" tabIndex="2" data={data} handleChange={handleChange} inputFocus={inputFocus} />
            <OtpInput name="otp3" tabIndex="3" data={data} handleChange={handleChange} inputFocus={inputFocus} />
            <OtpInput name="otp4" tabIndex="4" data={data} handleChange={handleChange} inputFocus={inputFocus} />
            <OtpInput name="otp5" tabIndex="5" data={data} handleChange={handleChange} inputFocus={inputFocus} />
            <OtpInput name="otp6" tabIndex="6" data={data} handleChange={handleChange} inputFocus={inputFocus} />
          </form>
          <button
            className={`${
              verifyEmailLoading && "loading"
            } btn btn-primary btn-wide md:w-[350px] disabled:bg-[#DDDDDD] disabled:text-white`}
            onClick={handleSubmit}
            disabled={disableBtn}>
            {verifyEmailLoading ? "" : "Verify Email"}
          </button>
          <p className="text-[#959595] mt-3">
            Didn't get the OTP?
            <button className="btn-link text-[#222222] hover:text-primary ml-1" onClick={resendOtp}>
              {" "}
              Click here to resend{" "}
            </button>
          </p>
        </div>
      </div>
    )
  );
};

export default VerifyEmail;
