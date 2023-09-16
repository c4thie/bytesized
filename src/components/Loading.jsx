import React from "react";
import { spinner } from "../assets";

const Loading = () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "100px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
