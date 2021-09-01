import React from "react";
import {
  Box,
  Link,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { devType } from "../../types";
import { orange } from "@material-ui/core/colors";
import { ReactComponent as ActionRepo } from "../../assets/icons/actionRepo.svg";
import { ReactComponent as Fire } from "../../assets/icons/fire.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161b22",
  },
  container:{
    borderColor:"#30363d",
    },
  nameLink: { fontSize: "20px", color: "#58a6ff", fontWeight: 600 },
  fireIcon: {
    fill: orange[500],
    marginRight: "4px",
    fontSize: "16px",
  },
  repoLink: { fontSize: "16px", color: "#58a6ff", fontWeight: 600 },
  actionIcon: {
    fill: "#848d96",
    marginRight: "4px",
    fontSize: "16px",
  },
  typoCol: { color: "#848d96" },
  btnFollow:{
    border: '1px solid rgba(255, 255, 255, 0.23)',
    padding: '3px 12px',
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500,
    backgroundColor:"#21262d",
    textTransform:"none",
  },
  heartIcon:{
    marginRight:"4px"
  },
  indextypo:{
    fontSize:"12px",
    color: "#848d96"
  }
}));

type DeveloperCardProps = {
  data: devType;
  index: number;
};

const DeveloperCard = (props: DeveloperCardProps) => {
  const { data, index = 0 } = props;
  const { name, username, url, avatar, repo, type } = data;
  const classes = useStyles();

  if (!data) return null as any;
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      borderBottom={0.5}
      className={classes.container}
      p={2}
    >

      <Box display="flex" flex="0.35">
        <Typography className={classes.indextypo}>{index}</Typography>
        <Box mr={1} ml={1}>
          <Avatar src={avatar} />
        </Box>
        <Box display="flex" flexDirection="column">
          <Link
            className={classes.nameLink}
            href={url}
            target="_blank"
          >
            {name}
          </Link>
          <Typography className={classes.typoCol}>
            {username}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" flex="0.35">
        <Typography className={classes.typoCol}>
          <Fire className={classes.fireIcon} />
          POPULAR REPO
        </Typography>
        <Link
          href={repo?.url}
          target="_blank"
          className={classes.repoLink}
        >
          <ActionRepo className={classes.actionIcon} />
          {repo?.name}
        </Link>

        <Typography className={classes.typoCol}>
          {repo?.description}
        </Typography>
      </Box>

      <Box
        flex="0.25"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box display="flex">
          {type !== "user" && (
            <Box mr={1.5}>
              <Button
                className={classes.btnFollow}
                variant="outlined">
                <Heart className={classes.heartIcon} />
                Sponser
              </Button>
            </Box>
          )}

          <Button className={classes.btnFollow} variant="outlined">
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeveloperCard;
