import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout, FormPassword, PageLoading } from "../../components";
import { errorPopUp } from "../../helpers/toastify";
import { authenticatedUser, resetPassword, verifyResetToken } from "../../redux/features/auth.slice";
//import { login } from "../../redux/features/auth.slice";

const ResetPassword = () => {
  const { verifyLoading, resetLoading, resetTokenData } = useSelector((state) => state.auth);
  const user = authenticatedUser();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = router.query.token;
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
      dispatch(resetPassword({ payload, token, reset }));
    }
  };

  useEffect(() => {
    if (user) {
      router.replace(user.role == "partner" ? "/listings" : "/your-storage");
      return;
    }
    if (token !== undefined && !user) {
      dispatch(verifyResetToken({ token }));
    }
  }, [token]);

  if (verifyLoading) {
    return <PageLoading loading={verifyLoading} />;
  }

  return (
    resetTokenData?.success && (
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
            <button className={`${resetLoading && "loading"}  btn btn-block btn-primary mt-8`} type="submit">
              {resetLoading ? "" : "Reset Password"}
            </button>
          </form>
        </div>
      </AuthLayout>
    )
  );
};

export default ResetPassword;
