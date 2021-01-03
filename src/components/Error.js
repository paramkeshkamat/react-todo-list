import React from "react";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

const Error = () => {
  return (
    <div className="Error">
      <p>
        <ErrorOutlineOutlinedIcon />
        Please enter a value!
      </p>
    </div>
  );
};

export default Error;
