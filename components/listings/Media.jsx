import React, { useState, useEffect, useContext } from "react";
import Accordion from "../shared/Accordion";
import { useRef } from "react";
import { UploadIcon, XIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { ListingInputContext } from "../../context";
import { useSelector } from "react-redux";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const Media = ({ edit, id, incomplete }) => {
  const { formDetails, setFormDetails } = useContext(ListingInputContext);
  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false);
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
    setUploading(true);
    files = [...files, e.target.files];
    files?.forEach(async (file, i) => {
      if (file[i].size > 5031070) {
        toast.error("Please upload a file smaller than 5 MB");
        setUploading(false);
      } else {
        toast.success("File uploaded successfully");

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
          setUploading(true);

          const response = await API({
            method: "patch",
            url: `/listings/${listingId}/upload`,
            headers: headers,
            data: formData,
          });

          setFormDetails({ ...formDetails, image: response.data.data });
          setUploading(false);
        } catch (error) {
          setUploading(false);
        }
      }
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
        <div className="rounded-lg bg-[#EEEEEE] px-5 py-5 text-center">
          {formDetails?.image?.length === 0 ? (
            <>
              <div className="item-center mx-auto mb-[.6rem] flex h-16 w-16 justify-center rounded-full">
                <UploadIcon className="w-6 text-[#959595]" />
              </div>
              <p className="mx-auto text-center text-sm text-[#959595]">Upload pictures/videos of your listing</p>
              <p className="mx-auto text-center text-xs text-[#959595]"> jpeg, png, mov, and mp4 allowed</p>
              <p className="mx-auto text-center text-xs text-[#959595]"> max size is 5MB</p>
            </>
          ) : (
            ""
          )}
          <div className="flex flex-wrap">
            {formDetails?.image?.map((img, index) => (
              <div key={index} className="relative mb-[2.5rem] mr-2 h-[200px] w-full rounded-md md:w-[32%]">
                {uploading ? (
                  <div>
                    <Skeleton height={225} />
                  </div>
                ) : img.substring(img.lastIndexOf(".") + 1).toLowerCase() === "mp4" ||
                  img.substring(img.lastIndexOf(".") + 1).toLowerCase() === "mov" ? (
                  <>
                    <video src={img} controls className="mb-2 h-full w-[95%] rounded object-cover"></video>
                    <span className="absolute -right-0  -top-2 cursor-pointer  rounded-[50%] bg-black  p-2  hover:bg-red-500 ">
                      <XIcon
                        id={index}
                        key={index}
                        className="w-4 font-bold  text-white"
                        onClick={(e) => {
                          removeItem(e, index);
                        }}
                      />
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={img}
                      id={index}
                      alt="pic1"
                      name="media"
                      className="mb-2 h-full w-[95%] rounded object-cover"
                    />
                    <span className="absolute -right-0  -top-2 cursor-pointer  rounded-[50%] bg-black  p-2  hover:bg-red-500 ">
                      <XIcon
                        id={index}
                        key={index}
                        className="w-4 font-bold  text-white"
                        onClick={(e) => {
                          removeItem(e, index);
                        }}
                      />
                    </span>
                  </>
                )}
              </div>
            ))}
            {formDetails?.image?.length > 0 && (
              <div className="mb-[2.5rem] mr-2 flex  h-[200px] w-full items-center rounded-md md:w-[32%]">
                <PlusCircleIcon
                  className="mx-auto w-14  font-bold text-[#989797] hover:text-primary"
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
              className="mb-3 mt-[1rem] rounded-[5px] border border-[#222222] px-[1.5rem] py-[.3rem] text-sm text-[#222222]">
              Upload
            </button>
          )}
          <div className="hidden text-center">
            <input
              accept="video/mp4,video/x-m4v,video/mov,video/*,image/jpg, image/png, image/*"
              type="file"
              multiple
              name="file"
              onChange={onSelectFile}
              ref={fileRef}
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Media;
