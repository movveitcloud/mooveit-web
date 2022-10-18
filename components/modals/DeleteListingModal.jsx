import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListing, getListings } from "../../redux/features/listings.slice";

const DeleteListingModal = ({ id }) => {
  const { deleteLoading } = useSelector((state) => state.listing);
  const closeModal = useRef(null);
  const dispatch = useDispatch();

  const refreshListings = () => {
    dispatch(getListings());
  };
  const handleDelete = () => {
    dispatch(deleteListing({ id, refreshListings, closeModal }));
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal">
        <label className="modal-box py-10 relative w-[80%] md:w-[50%] max-w-[500px] rounded-xl z-20">
          <div className="w-[80%] mx-auto text-left">
            <div className="flex justify-center mb-4 w-full">
              <label className="text-center inline-block">Are you sure you want to delete this listing?</label>
            </div>

            <div className="flex justify-center text-sm">
              <div className="flex gap-4">
                <label className="btn btn-primary w-[100px] modal-button" htmlFor={id}>
                  No
                </label>
                <p
                  className={`${deleteLoading && "loading"} btn btn-error hover:bg-[#ef4444da] w-[100px]`}
                  onClick={handleDelete}>
                  {deleteLoading ? "" : "Yes"}
                </p>
              </div>
            </div>
          </div>
        </label>
      </label>
      <label htmlFor={id} className="hidden" ref={closeModal} />
    </>
  );
};

export default DeleteListingModal;
