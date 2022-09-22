import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout, FormInput } from "../../components";
import { forgotPassword } from "../../redux/features/auth.slice";

const ForgotPassword = () => {
  const { forgotLoading } = useSelector((state) => state.auth);
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
    dispatch(forgotPassword({ payload, reset }));
  };

  return (
    <AuthLayout title="Forgot Password">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl md:text-3xl text-black mb-2">Forgot Password</h1>
          <p className="text-sm text-[#222222] font-light">A password reset link will be sent to your email</p>
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
          <button className={`${forgotLoading && "loading"}  btn btn-block btn-primary mt-8`} type="submit">
            {forgotLoading ? "" : "Send Reset Link"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
