import React from "react";
import LoopIcon from "@material-ui/icons/Loop";
import loading from "../loading.gif";

export default function Loading() {
  return (
    <div className="loading-div">
      <img className="loading" src={loading} />
    </div>
  );
}
