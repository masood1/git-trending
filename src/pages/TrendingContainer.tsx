import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
} from "@material-ui/core";
import { Route, useHistory, Switch, useLocation } from "react-router-dom";
import * as RoutePath from "../routes/constants";
import { makeStyles } from "@material-ui/core/styles";
import DeveloperList from "./DeveloperList";
import RepositoryList from "./RepositoryList";
import { SimpleButton } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161b22",
  },
  textHeading: {
    textAlign: "center",
    color: "#c9d1d9",
  },
  bodyText: {
    color: "#848d96",
    textAlign:"center",
  },
  barBox: {
    border: "1px #30363d solid",
    marginTop: "16px",
    borderRadius: "2px",
    width: "80%",
  },
  header: {
    backgroundColor: "#161b22",
    borderBottom: "1px #30363d solid",
    padding: "10px",
  },
  btnGroup: {
    border: "1.5px #30363d solid",
    borderRadius: "6px",
    width: "fit-content",
  },
  btnGroupedHorizontal: {
    borderRight: "none",
  },
}));


enum selectionType {
  REPO = "Repository",
  DEV = "Developer",
}

const TrendingContainer = () => {
  const classes = useStyles();
  const [btnSelected, setBtnSelected] = useState(selectionType.REPO);
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);

  const getBtnColor = (type: selectionType) =>
    btnSelected === type ? "primary" : "secondary";

  const onRepoClick = () => {
    setBtnSelected(selectionType.REPO);
    history.push(RoutePath.TRENDING)
  };
  const onDevClick = () => {
    setBtnSelected(selectionType.DEV);
    history.push(RoutePath.TRENDING_DEVELOPER)
  };

  useEffect(() => {
    if(location?.pathname?.includes(RoutePath.TRENDING_DEVELOPER)){
      setBtnSelected(selectionType.DEV);
    }
  }, [])

  return (
    <Box mb={6}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Box pt={5} pb={5}>
          <Typography
            className={classes.textHeading}
            variant="h3"
            gutterBottom
          >
            Trending
          </Typography>

          <Typography variant="h5" className={classes.bodyText}>
            {btnSelected === selectionType.REPO
              ? "See what the GitHub community is most excited about today."
              : "These are the developers building the hot tools today."}
          </Typography>
        </Box>
      </Box>

      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.barBox}>
          <Box className={classes.header}>
            <Box className={classes.btnGroup}>
              <SimpleButton
                onClick={onRepoClick}
                variant="contained"
                color={getBtnColor(selectionType.REPO)}
              >
                Repositories
              </SimpleButton>
              <SimpleButton
                onClick={onDevClick}
                variant="contained"
                color={getBtnColor(selectionType.DEV)}
              >
                Developers
              </SimpleButton>
            </Box>
          </Box>
          
          <Switch>
            <Route exact path={RoutePath.TRENDING}>
              <RepositoryList />
            </Route>
            <Route path={RoutePath.TRENDING_DEVELOPER}>
              <DeveloperList />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingContainer;
