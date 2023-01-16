import React, { useEffect, useState } from "react";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { AddDriverModal, DashboardLayout, DriverCard } from "../../components";
import { getDrivers } from "../../redux/features/drivers.slice";

const Drivers = () => {
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const { drivers, loading } = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const { value } = e.target;
    let result = [];
    result = drivers?.filter(
      (a) =>
        a.firstName.toLowerCase().includes(value.toLowerCase()) ||
        a.lastName.toLowerCase().includes(value.toLowerCase())
    );
    if (value) {
      setFilteredDrivers(result);
    } else {
      setFilteredDrivers(drivers);
    }
  };

  useEffect(() => {
    dispatch(getDrivers({ setFilteredDrivers }));
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <div className="flex h-[400px] items-center justify-center">
          <PulseLoader loading={loading} color="#EDCC5B" />
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-between pb-8 md:flex-row">
            <div>
              <h2 className="semibold">Drivers ({filteredDrivers.length})</h2>
            </div>
            <div className="mt-6 flex flex-col gap-8 md:mt-0 md:flex-row">
              <div className="align-center flex w-full items-center rounded-md border border-gray-400 p-2 px-3">
                <SearchIcon className="mr-3 h-4 w-4" />
                <input
                  type="search"
                  className="bg-transparent text-sm outline-none"
                  placeholder="Search by name"
                  onChange={handleSearch}
                />
              </div>

              <label htmlFor="addDriver" className="modal-button btn btn-accent flex items-center gap-2 normal-case">
                <PlusIcon className="w-4" /> Add Driver
              </label>
            </div>
          </div>

          <AddDriverModal setFilteredDrivers={setFilteredDrivers} />

          {filteredDrivers.length === 0 ? (
            <div className="flex justify-center">
              <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                <div className="flex flex-col items-center space-y-4 px-4 py-24">
                  <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                  <p className="text-center text-[#AAAAAA]">
                    You do not have any drivers
                    <br /> at this time.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...filteredDrivers].reverse()?.map((driver, i) => (
                <DriverCard data={driver} key={i} setFilteredDrivers={setFilteredDrivers} />
              ))}
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Drivers;
