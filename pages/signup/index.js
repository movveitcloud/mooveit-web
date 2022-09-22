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
        <h1 className="font-semibold text-2xl md:text-3xl text-black">Create an account</h1>
        <div className="bg-white rounded-2xl my-10 flex gap-5 items-center justify-center w-fit p-3 mx-auto shadow">
          <span
            className={`${active == "customer" && "bg-primary text-white py-2 px-5 rounded-xl "} cursor-pointer`}
            onClick={() => setActive("customer")}>
            Customer
          </span>
          <span
            className={`${active == "partner" && "bg-primary text-white py-2 px-5 rounded-xl "} cursor-pointer`}
            onClick={() => setActive("partner")}>
            Partner
          </span>
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

          <div className="flex flex-col md:flex-row md:gap-5">
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
          <button className={`${signupLoading && "loading"}  btn btn-block btn-primary mt-8`} type="submit">
            {signupLoading ? "" : active == "partner" ? "Become a partner" : "Create account"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
