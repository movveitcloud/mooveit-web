import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout, FormInput, FormPassword } from "../../components";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [formDetails, setFormDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setFormDetails({ role: "partner", ...formDetails, ...data });
    reset({ email: "", password: "" });
  };

  return (
    <AuthLayout>
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
            {loading ? "" : "sign in"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
