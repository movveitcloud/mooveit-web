import React from "react";

const FormInput = ({ label, type, name, register, errors, errorMessage }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-base text-gray-800 mb-2 inline-block text-left">{label}</label>
      <input
        className={`${
          errors[name] ? "border-red-600" : "input-primary"
        } text-black input input-bordered focus:outline-offset-0 focus:outline-1 disabled:bg-[#ececec] disabled:text-black`}
        type={type}
        {...register(name, {
          required: true,
          pattern: name == "email" && {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        })}
      />
      {name == "email" && errors.email?.message ? (
        <span className="text-red-600 text-sm text-left">{errors.email?.message}</span>
      ) : (
        errors[name] && <span className="text-red-600 text-sm text-left">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
