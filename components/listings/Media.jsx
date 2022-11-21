import React, { useState, useEffect, useContext } from "react";
import Accordion from "../shared/Accordion";
import { useRef } from "react";
import { UploadIcon, XIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { ListingInputContext } from "../../context";
import { useSelector } from "react-redux";
import axios from "axios";

const Media = ({ edit, id, incomplete }) => {
  const { formDetails, setFormDetails } = useContext(ListingInputContext);
  const [preview, setPreview] = useState([]);
  const [, refresh] = useState();
  const fileRef = useRef(null);
  const { data } = useSelector((state) => state.listing);

  const uploadFile = () => {
    fileRef.current.click();
    // setFile(fileRef.current.files);
  };
  const API = axios.create({ baseURL: process.env.BASE_URL });

  const listingId = edit ? id : data?._id;

  const onSelectFile = async (e) => {
    let files = [];
    files = [...files, e.target.files];
    files?.forEach(async (file, i) => {
      const formData = new FormData();
      if (formData) {
        formData.append("id", listingId);
        formData.append("key", "media");
        formData.append("media", file[i]);
      }

      try {
        const headers = {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
          "Content-Type": "multipart/formdata",
        };
        const response = await API({
          method: "patch",
          url: `/listings/${listingId}/upload`,
          headers: headers,
          data: formData,
        });
        setFormDetails({ ...formDetails, image: response.data.data });
      } catch (error) {}
    });
  };

  const removeItem = (e) => {
    const index = e.target.id;
    let newPreview = [...formDetails.image];
    newPreview.splice(index, 1);
    setFormDetails({ ...formDetails, image: newPreview });
  };

  useEffect(() => {
    refresh();
  }, [formDetails, preview]);

  return (
    <Accordion title="Media" incomplete={incomplete}>
      <div className="space-y-6">
        <div className="bg-[#EEEEEE] px-5 py-5 text-center rounded-lg">
          {formDetails?.image?.length === 0 ? (
            <>
              <div className="mx-auto flex justify-center item-center rounded-full mb-[.6rem] w-16 h-16">
                <UploadIcon className="w-6 text-[#959595]" />
              </div>
              <p className="text-center text-sm mx-auto text-[#959595]">Upload pictures/videos of your listing</p>
            </>
          ) : (
            ""
          )}
          <div className="flex flex-wrap">
            {formDetails?.image?.map((img, index) => (
              <div key={index} className="w-full relative md:w-[32%] h-[200px] mb-[2.5rem] rounded-md mr-2">
                <img
                  src={img}
                  id={index}
                  alt="pic1"
                  name="media"
                  className="w-[95%] h-full mb-2 object-cover rounded"
                />
                <span className="bg-black p-2  hover:bg-red-500 cursor-pointer  rounded-[50%] absolute  -right-0  -top-2 ">
                  <XIcon
                    id={index}
                    key={index}
                    className="text-white w-4  font-bold"
                    onClick={(e) => {
                      removeItem(e, index);
                    }}
                  />
                </span>
              </div>
            ))}
            {formDetails?.image?.length > 0 && (
              <div className="w-full flex items-center  md:w-[32%] h-[200px] mb-[2.5rem] rounded-md mr-2">
                <PlusCircleIcon
                  className="text-[#989797] mx-auto  w-14 hover:text-primary font-bold"
                  onClick={() => uploadFile()}
                />
              </div>
            )}
          </div>
          {formDetails?.image?.length > 0 ? (
            ""
          ) : (
            <button
              onClick={() => uploadFile()}
              className="border-[#222222] px-[1.5rem] mb-3 py-[.3rem] border text-sm rounded-[5px] text-[#222222] mt-[1rem]">
              Upload
            </button>
          )}
          <div className="text-center hidden">
            <input accept="image/*" type="file" multiple name="file" onChange={onSelectFile} ref={fileRef} />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Media;
