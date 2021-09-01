import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={10}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
