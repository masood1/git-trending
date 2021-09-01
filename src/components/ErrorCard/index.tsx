import React from "react";
import { Box } from "@material-ui/core";
import gitcat from "../../assets/img/gitCat.png";

interface ErrorCardProps {
  title?: string;
}

const ErrorCard = (props: ErrorCardProps) => {
  const { title = "!Oops Somthing went wrong" } = props;

  return (
    <>
      <Box mb={4} display="flex" justifyContent="center">
        {title}
      </Box>
      <Box display="flex" justifyContent="center">
        <img
          alt="git cat error"
          width="550px"
          height="350px"
          src={gitcat}
        />
      </Box>
    </>
  );
};

export default ErrorCard;
