/** @format */

import React from "react";
import MUIButton from "@mui/material/Button";

const Button = (props) => {
  return (
    <MUIButton variant="outlined" color="secondary">
      {props.label}
    </MUIButton>
  );
};

export default Button;
