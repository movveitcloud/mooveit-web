import React, { useEffect, useState } from "react";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { AddDriverModal, DashboardLayout, DriverCard, PendingModal } from "../../components";
import { dummyDrivers } from "../../helpers/data";
import { getDrivers } from "../../redux/features/drivers.slice";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
};

const Drivers = () => {
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const { drivers, loading } = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const { value } = e.target;
    let result = [];
    result = drivers?.filter((a) => a.firstName.toLowerCase().includes(value.toLowerCase()));
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
      <div>
        <div className="flex flex-col md:flex-row justify-between pb-8">
          <div>
            <h2>Drivers ({filteredDrivers.length})</h2>
          </div>
          <div className="flex gap-5 flex-col md:flex-row mt-6 md:mt-0">
            <div className="flex border border-gray-400 mr-6 p-2 px-3 rounded-md align-center items-center w-full">
              <SearchIcon className="w-4 h-4 mr-3" />
              <input
                type="text"
                className="text-sm outline-none bg-transparent"
                placeholder="Search by first name"
                onChange={handleSearch}
              />
            </div>

            <label htmlFor="addDriver" className="modal-button btn btn-accent normal-case flex gap-2 items-center">
              <PlusIcon className="w-4" /> Add Driver
            </label>
          </div>
        </div>

        <AddDriverModal setFilteredDrivers={setFilteredDrivers} />

        {loading ? (
          <div className="h-[400px] flex justify-center items-center">
            <PulseLoader loading={loading} color="#EDCC5B" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...filteredDrivers].reverse()?.map((driver, i) => (
              <DriverCard data={driver} key={i} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Drivers;
