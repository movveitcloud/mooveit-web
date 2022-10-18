import React from "react";
import { DashboardLayout } from "../../components";

const Reviews = () => {
  return <DashboardLayout>Review page</DashboardLayout>;
};

export default Reviews;

//Exclude this page during build
export const getStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }
  return { notFound: true };
};
