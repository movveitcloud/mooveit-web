import React, { useState } from "react";

const ContactCard = ({ item: { title, content, contents, icon }, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      // className={`justify-center bg-[#F7F7F7] w-full p-7 rounded-lg transition-colors duration-300 ${
      //   index == 4 ? "col-span-full" : ""
      // }`}
      className="justify-center bg-[#F7F7F7] w-full p-7 rounded-lg transition-colors duration-300 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex justify-center">
        <span className={`rounded-full p-3 text-primary bg-[#11851114]`}>{icon}</span>
      </div>
      <h3 className="font-semibold whitespace-nowrap text-center text-lg my-2">{title}</h3>
      <div className="text-info">
        {contents ? (
          contents.map((val, indx) => (
            <p key={indx} className="text-center">
              {val}
            </p>
          ))
        ) : (
          <p className="text-center">{content}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
