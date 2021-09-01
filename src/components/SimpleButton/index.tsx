import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const SimpleButton = withStyles(() => ({
  root: {
    textTransform: "none",
    color: "#f0f6fc",
    fontWeight: 500,
  },
}))(Button);

export default SimpleButton;
