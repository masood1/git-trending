import React, { FunctionComponent } from "react";
import {
  Box,
  Link,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as ActionRepo } from "../../assets/icons/actionRepo.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Fork } from "../../assets/icons/fork.svg";
import {repoType, gitUserType } from "../../types";

type Props = {
  data: repoType;
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161b22",
  },
  container: {
    borderColor: "#30363d",
  },
  avatarSmall: {
    width: "20px",
    height: "20px",
  },
  nameLink: { fontSize: "20px", color: "#58a6ff", fontWeight: 400, display:"flex", alignItems:"center" },

  actionIcon: {
    fill: "#848d96",
    marginRight: "4px",
    fontSize: "16px",
  },
  typoCol: { fontSize: "12px", color: "#848d96" },
  infoVal: {
    display: "flex",
    alignItems: "center",
    "&:hover, &:focus": {
      color: "#58a6ff",
    },
    fontSize: "12px",
    color: "#848d96",
    marginRight: "16px",
    cursor: "pointer",
  },

  btnStar: {
    border: "1px solid rgba(255, 255, 255, 0.23)",
    padding: "3px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500,
    backgroundColor: "#21262d",
    textTransform: "none",
  },
  descriptionText: { fontSize: "14px", color: "#848d96" },
}));

const RepositoryCard: FunctionComponent<Props> = ({
  data,
}): JSX.Element => {
  const classes = useStyles();
  const {
    author,
    name,
    url,
    description,
    language,
    stars,
    forks,
    builtBy,
    currentPeriodStars,
  } = data;

  if (!data) return null as any;
  return (
    <Box
      width="100%"
      p={2}
      display="flex"
      borderBottom={0.5}
      className={classes.container}
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column">
        <Link className={classes.nameLink} href={url} target="_blank">
          <ActionRepo className={classes.actionIcon} />
          <Box>{author} / <b>{name}</b> </Box>
        </Link>
        <Typography className={classes.descriptionText}>
          {description}
        </Typography>

        <Box mt={1} display="flex" alignItems="center">
          {language && (
            <Box className={classes.infoVal}>{language}</Box>
          )}

          {stars && (
            <Box className={classes.infoVal}>
              <Star className={classes.actionIcon} />
              {stars}
            </Box>
          )}

          {forks && (
            <Box className={classes.infoVal}>
              <Fork className={classes.actionIcon} />
              {forks}
            </Box>
          )}

          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <Typography className={classes.typoCol}>
                Built by
              </Typography>
            </Box>

            {builtBy?.map((user: gitUserType) => (
              <Link
                key={`built_by_${user?.username}`}
                target="_blank"
                href={user?.href}
              >
                <Avatar
                  className={classes.avatarSmall}
                  src={user?.avatar}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box display="flex">
          <Button className={classes.btnStar}>
            <Star className={classes.actionIcon} /> Star
          </Button>
        </Box>
        <Typography className={classes.typoCol}>
          <Box display="flex" alignItems="center">
            <Star className={classes.actionIcon} />
            {currentPeriodStars?.toLocaleString()} stars
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default RepositoryCard;
