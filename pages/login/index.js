import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout, FormInput, FormPassword } from "../../components";
import { authenticatedUser, login } from "../../redux/features/auth.slice";

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const payload = { ...data };
    dispatch(login({ payload, reset }));
  };

  console.log(authenticatedUser()?.role, "user obj");

  return (
    <AuthLayout title="Log In">
      <div className="text-center">
        <h1 className="font-semibold text-2xl md:text-3xl text-black mb-10">Account Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            errorMessage="Please add an email address"
          />

          <FormPassword register={register} name="password" errors={errors} errorMessage="Please add a password" />

          <button className={`${loading && "loading"}  btn btn-block btn-primary mt-5`} type="submit">
            {loading ? "" : "Log in"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
