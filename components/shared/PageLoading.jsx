import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoading = ({ loading }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <BeatLoader loading={loading} color="#EDCC5B" />
    </div>
  );
};

export default PageLoading;
