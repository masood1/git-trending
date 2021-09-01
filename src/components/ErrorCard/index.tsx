import React from "react";
import { Box } from "@material-ui/core";
import gitcat from "../../assets/img/gitCat.png";

const ErrorCard = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <img alt="git cat error" width="550px" height="350px" src={gitcat} />
      </Box>
      <Box mb={4} display="flex" justifyContent="center">
        !Oops Somthing went wrong
      </Box>
    </>
  );
};

export default ErrorCard;
