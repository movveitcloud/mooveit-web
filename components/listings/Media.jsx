import React, { useState } from "react";
import Accordion from "../shared/Accordion";
import { useRef } from "react";

const Media = ({ formDetails, handleChange }) => {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const uploadFile = () => {
    fileRef.current.click();
    setFile(fileRef.current.files[0]);
  };

  return (
    <Accordion title="Media">
      <div className="space-y-6">
        <div className="bg-[#EEEEEE] px-5 py-5 text-center">
          <div className="mx-auto flex justify-center item-center rounded-full mb-[.6rem] w-16 h-16">
            <img src="/upload.svg" alt="icon" className="w-8 m-auto" />
          </div>
          <p className="text-center mx-auto text-[#959595]">
            Upload pictures/
            <br />
            videos of your listing
          </p>
          <button
            onClick={() => uploadFile()}
            className="border-[#222222] px-[1.5rem] mb-3 py-[.3rem] border text-sm rounded-[5px] text-[#222222] mt-[1rem]">
            UPLOAD
          </button>
          <div className="text-center hidden">
            <input type="file" name="space" ref={fileRef} />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Media;
