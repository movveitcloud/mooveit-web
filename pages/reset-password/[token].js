import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout, FormPassword } from "../../components";
import { errorPopUp } from "../../helpers/toastify";
//import { login } from "../../redux/features/auth.slice";

const ResetPassword = () => {
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

    const { password, confirmPassword } = data;
    if (password !== confirmPassword) return errorPopUp({ msg: "Passwords do not match" });
    if (password == confirmPassword) {
      const payload = { password: password };
      // dispatch(login({ payload, reset }));
    }
  };

  return (
    <AuthLayout title="Reset Password">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl md:text-3xl text-black mb-2">Reset Password</h1>
          <p className="text-sm text-[#222222] font-light">A password reset link will be sent to your email</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormPassword
              register={register}
              label="Password"
              name="password"
              errors={errors}
              errorMessage="Please add a password"
            />
            <FormPassword
              register={register}
              label="Confirm Password"
              name="confirmPassword"
              errors={errors}
              errorMessage="Please add a password"
            />
          </div>
          <button className={`${loading && "loading"}  btn btn-block btn-primary mt-8`} type="submit">
            {loading ? "" : "Reset Password"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
