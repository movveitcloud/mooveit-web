import React from "react";
import Skeleton from "react-loading-skeleton";

const ListingSkelenton = () => {
  return (
    <div className="w-full">
      <Skeleton height={200} borderRadius={12} />
      <Skeleton height={20} width={275} />
      <Skeleton height={20} width={300} />
      <Skeleton height={20} width={250} />
      <Skeleton height={20} width={100} />
      <Skeleton height={20} width={250} />

      <div className="flex justify-between w-full mt-2">
        <Skeleton height={20} width={100} />
        <Skeleton height={20} width={50} />
      </div>
    </div>
  );
};

export default ListingSkelenton;
