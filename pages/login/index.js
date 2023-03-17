import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout, FormInput, FormPassword } from "../../components";
import { authenticatedUser, login } from "../../redux/features/auth.slice";
import { useRouter } from "next/router";

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const payload = { email: data.email.trim().toLowerCase(), password: data.password.trim() };
    dispatch(login({ payload, reset, router }));
  };

  return (
    <AuthLayout title="Log In">
      <div className="text-center">
        <h1 className="mb-10 text-2xl font-semibold text-black md:text-3xl">Account Login</h1>
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
          <div className="flex justify-end">
            <Link href="/forgot-password">
              <a className="text-sm text-red-500">Forgot Password?</a>
            </Link>
          </div>
          <button className={`${loading && "loading"}  btn btn-primary btn-block mt-8`} type="submit">
            {loading ? "" : "Log in"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
