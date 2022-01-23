import React, { forwardRef } from "react";

function ImageContent({ ref2 }, ref) {
  return (
    <div ref={ref} className="image-container">
      <div className="overlay">
        <div
          className="card-action glass-effect"
          onClick={() => {
            ref2.current.style.visibility = "visible";
            ref2.current.style.opacity = "1";
            ref2.current.style.zIndex = "0";
            ref.current.style.visibility = "hidden";
            ref.current.style.opacity = "0";
            ref.current.style.zIndex = "-1";
          }}
        >
          Date and Location
        </div>
      </div>
      <img src="main-image.jpg" className="main-image" />
      <span className="image-name">
        <span>Invitation from</span>
        <br />
        Sriya <div>& Ankush</div>
      </span>
    </div>
  );
}

export default forwardRef(ImageContent);
