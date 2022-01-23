import React, { forwardRef } from "react";
import SaveDate from "./saveDate";
import Timer from "./timer";

function TextContent({ ref1 }, ref) {
  return (
    <div ref={ref} className="text-container">
      <img src="bg1.png" className="bg1" />
      <div className="text-details">
        <SaveDate />
        <p className="text-details-location">Berhampur, Odisha</p>
        <p className="text-details-date">Friday, 18th Feb, 2022</p>
        <Timer />
        <div
          className="card-action black-glass-effect black-theme"
          onClick={() => {
            console.log("hello");
            ref1.current.style.visibility = "visible";
            ref1.current.style.opacity = "1";
            ref1.current.style.zIndex = "0";
            ref.current.style.visibility = "hidden";
            ref.current.style.opacity = "0";
            ref.current.style.zIndex = "-1";
          }}
        >
          Groom and Bride
        </div>
      </div>
      <img src="bg2.png" className="bg2" />
    </div>
  );
}

export default forwardRef(TextContent);
