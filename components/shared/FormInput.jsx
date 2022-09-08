import React from "react";

const FormInput = ({ label, type, name, disabled, register, errors, errorMessage }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-base text-gray-800 mb-2 inline-block text-left">{label}</label>
      <input
        className={`${
          errors[name] ? "border-red-600" : "input-primary"
        } text-black input input-bordered focus:outline-offset-0 focus:outline-1 disabled:bg-[#ececec] disabled:text-black`}
        type={type}
        {...register(name, { required: true })}
        disabled={disabled}
      />
      {errors[name] && <span className="text-red-600 text-sm text-left">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
