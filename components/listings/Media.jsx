import React, { useState, useEffect, useContext } from "react";
import Accordion from "../shared/Accordion";
import { useRef } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import { ListingInputContext } from "../../context";

const Media = () => {
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [, refresh] = useState();
  const fileRef = useRef(null);

  const uploadFile = () => {
    fileRef.current.click();
    setFile(fileRef.current.files[0]);
  };

  const onSelectFile = (e) => {
    let arrayofFiles = [];
    const files = [...e.target.files];
    files?.forEach((file) => {
      const newArr = URL.createObjectURL(file);
      arrayofFiles = [...arrayofFiles, newArr];
    });
    setPreview([...preview, ...arrayofFiles]);
    setFormDetails({ ...formDetails, media: [...preview] });
  };

  const removeImageFromArray = {};

  useEffect(() => {
    refresh();
  }, [file]);

  return (
    <Accordion title="Media">
      <div className="space-y-6">
        <div className="bg-[#EEEEEE] px-5 py-5 text-center rounded-lg">
          {preview?.length === 0 ? (
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
            {preview?.map((img, index) => (
              <div key={index} className="w-[32%] h-[200px] mb-3 rounded mr-2">
                <img src={img} id={index} alt="pic1" className="w-full h-full object-cover rounded" />
                {/* <button
                  id={index}
                  key={index}
                  onClick={(e) => {
                    removeImageFromArray(e);
                  }}>
                  X
                </button> */}
              </div>
            ))}
          </div>
          <button
            onClick={() => uploadFile()}
            className="border-[#222222] px-[1.5rem] mb-3 py-[.3rem] border text-sm rounded-[5px] text-[#222222] mt-[1rem]">
            Upload
          </button>
          <div className="text-center hidden">
            <input accept="image/*" type="file" multiple name="file" onChange={onSelectFile} ref={fileRef} />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Media;
