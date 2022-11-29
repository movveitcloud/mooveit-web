import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { AuthLayout, FormInput, FormPassword } from "../../components";
import { signup } from "../../redux/features/auth.slice";

const Signup = () => {
  const [active, setActive] = useState("partner");
  const { signupLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const payload = { ...data, role: active };
    dispatch(signup({ payload, reset }));
  };

  return (
    <AuthLayout title="Sign Up">
      <div className="text-center">
        <h1 className="py-3 font-semibold text-2xl md:text-3xl text-black">Create an account</h1>
        <div className="flex justify-center my-3 md:my-6">
          <div className="flex space-x-4 bg-white p-4 rounded-xl shadow">
            <button
              className={`py-2 px-6 rounded-lg text-sm transition-all duration-300 border ${
                active == "customer" ? "bg-primary text-white border-primary" : "border-[#ccc]"
              }`}
              onClick={() => setActive("customer")}>
              Customer
            </button>
            <hr className="bg-[#ccc] h-full w-[1px]" />
            <button
              className={`py-2 px-6 rounded-lg text-sm transition-all duration-300 border ${
                active == "partner" ? "bg-primary text-white border-primary" : "border-[#ccc]"
              }`}
              onClick={() => setActive("partner")}>
              Partner
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            errorMessage="Please add an email address"
          />

          <div className="flex flex-col xl:flex-row xl:gap-2 ">
            <FormInput
              label="First Name"
              name="firstName"
              type="text"
              register={register}
              errors={errors}
              errorMessage="Please add your first name"
            />
            <FormInput
              label="Last Name"
              name="lastName"
              type="text"
              register={register}
              errors={errors}
              errorMessage="Please add your last name"
            />
          </div>
          <FormPassword register={register} name="password" errors={errors} errorMessage="Please add a password" />
          <button className={`${signupLoading && "loading"}  btn btn-block btn-primary mt-8 mb-6`} type="submit">
            {signupLoading ? "" : active == "partner" ? "Become a partner" : "Create account"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
