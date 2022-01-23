import React, { createRef } from "react";
import ImageContent from "./imageContent";
import TextContent from "./textContent";

function Content() {
  const ref1 = createRef();
  const ref2 = createRef();
  return (
    <main className="main-container">
      <ImageContent ref={ref1} ref2={ref2} />
      <TextContent ref={ref2} ref1={ref1} />
    </main>
  );
}

export default Content;
