import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import gitcat from "../../assets/img/gitCat.png";

interface ErrorCardProps {
  title?: string;
}
const useStyles = makeStyles((theme) => ({
  textHeading: {
    textAlign: "center",
    color: "#c9d1d9",
    fontSize: "20px",
  },
}));

const ErrorCard = (props: ErrorCardProps) => {
  const { title = "!Oops Somthing went wrong" } = props;
  const classes = useStyles();

  return (
    <>
      <Box
        mb={1}
        mt={4}
        className={classes.textHeading}
        display="flex"
        justifyContent="center"
      >
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
