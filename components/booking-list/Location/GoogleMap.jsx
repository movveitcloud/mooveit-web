import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            // width="698"
            width="100%"
            height="450"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=7%20Talabi%20street,%20Adeniyi%20Jones,%20Ikeja,%20Lagos%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"></iframe>
        </div>
      </div>
    </div>
  );
};
export default GoogleMap;