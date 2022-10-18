import React, { useContext, useEffect, useState } from "react";
import {
  AvailabilityStepper,
  BasicInformationStepper,
  DashboardLayout,
  NewListingLayout,
  PricingStepper,
  SpaceDetailsStepper,
  Steppers,
} from "../../../components";
import { useRouter } from "next/router";
import axios from "axios";
import { ListingInputContext } from "../../../context";
import { useDispatch, useSelector } from "react-redux";
import { getSingleListing } from "../../../redux/features/listings.slice";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";

const EditListing = () => {
  const { activeStepper, setFormDetails, formDetails } = useContext(ListingInputContext);
  const { singleListing, singleListingLoading } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.id;

  useEffect(() => {
    if (query) {
      dispatch(getSingleListing({ id: query }));
    }
  }, [query]);
  useEffect(() => {
    setFormDetails({ ...formDetails, ...singleListing });
  }, [singleListing]);

  console.log(singleListing, "sing");

  return (
    <DashboardLayout>
      {singleListingLoading ? (
        <div className="h-[500px] flex justify-center items-center">
          <BeatLoader loading={singleListingLoading} color="#4543A5" />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="py-5">
            <div className="w-[80%] mx-auto">
              <Steppers />
            </div>

            <div className="w-[80%] mx-auto">
              {activeStepper == 0 && <BasicInformationStepper />}
              {activeStepper == 1 && <SpaceDetailsStepper />}
              {activeStepper == 2 && <AvailabilityStepper />}
              {activeStepper == 3 && <PricingStepper />}
            </div>
          </div>
        </motion.div>
      )}
    </DashboardLayout>
  );
};

export default EditListing;

// export const getServerSideProps = async ({ params: { id } }) => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data, errors } = await axios(`${baseURL}/listings/${id}`);

//     if (!data) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         data: data.data,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };
