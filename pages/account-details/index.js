import { DashboardLayout } from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { authenticatedUser, updateUser } from "../../redux/features/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { getBanks } from "../../redux/features/config.slice";
import BankDetails from "../../components/account-details/BankDetails";

const AccountDetailsPage = () => {
  const [formDetails, setFormDetails] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    sortCode: "",
  });
  const bankFetched = useRef(false);

  const { updateLoading, user } = useSelector((state) => state.auth);
  const userDetail = authenticatedUser();
  const dispatch = useDispatch();
  const { banks } = useSelector((state) => state.config);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const initData = useCallback(() => {
    setFormDetails({
      bankName: userDetail.bankName,
      accountName: userDetail.accountName,
      accountNumber: userDetail.accountNumber,
      sortCode: userDetail.sortCode,
    });
  }, [userDetail]);

  const handleUpdate = () => {
    const payload = {
      bankName: formDetails.bankName,
      accountName: formDetails.accountName,
      accountNumber: formDetails.accountNumber,
      sortCode: formDetails.sortCode,
    };

    dispatch(updateUser({ payload, id: userDetail?._id }));
  };

  useEffect(() => {
    if (!banks.length && !bankFetched.current) {
      dispatch(getBanks());
      bankFetched.current = true;
    }
  }, [banks, dispatch]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <DashboardLayout name="Account Details">
      <div className="mx-auto w-[95%] max-w-[960px] text-sm sm:w-[90%] md:w-[80%] xl:w-[75%]">
        {userDetail.role === "partner" && (
          <BankDetails
            banks={banks}
            formDetails={formDetails}
            setFormDetails={setFormDetails}
            handleChange={handleChange}
          />
        )}
        <div className="my-8 flex justify-end">
          <div className="flex gap-4">
            <button
              className="btn btn-outline btn-primary font-normal normal-case hover:btn-accent md:w-[175px]"
              onClick={initData}>
              Discard Changes
            </button>
            <button
              className={`${updateLoading ? "loading" : ""} btn btn-primary font-normal normal-case md:w-[175px]`}
              onClick={handleUpdate}>
              {updateLoading ? "" : "Update Details"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountDetailsPage;
