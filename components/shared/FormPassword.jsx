import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const FormPassword = ({ name, register, errors, errorMessage, label }) => {
  const [inputType, setInputType] = useState("password");
  const router = useRouter();
  // const pathname = router.pathname;

  return (
    <div className="flex flex-col w-full">
      <label className="text-base text-gray-800 mb-2 inline-block text-left">{label || "Password"}</label>
      <div className="relative">
        <input
          className={`${
            errors[name] ? "border-red-600" : "input-primary"
          } text-black input input-bordered focus:outline-offset-0 focus:outline-1 disabled:bg-[#ececec] disabled:text-black w-full`}
          type={inputType}
          {...register(name, {
            required: true,
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/i,
              message: "Password must contain at least 6 characters, 1 uppercase, 1 lowercase and 1 special character",
            },
          })}
        />

        {inputType === "password" && (
          <EyeIcon
            className="w-6 h-6 absolute text-primary cursor-pointer right-3 top-[25%]"
            onClick={() => setInputType("text")}
          />
        )}
        {inputType === "text" && (
          <EyeOffIcon
            className="w-6 h-6 absolute text-primary cursor-pointer right-3 top-[25%]"
            onClick={() => setInputType("password")}
          />
        )}
      </div>
      {errors.password?.message ? (
        <span className="text-red-600 text-sm text-left">{errors.password?.message}</span>
      ) : (
        errors[name] && <span className="text-red-600 text-sm text-left">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormPassword;
