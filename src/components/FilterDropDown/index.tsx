/* eslint-disable no-use-before-define */
import React from "react";
import {
  alpha,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Autocomplete, {
  AutocompleteCloseReason,
} from "@material-ui/lab/Autocomplete";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 13,
      paddingRight: "15px",
      paddingLeft: "15px",
    },
    button: {
      fontSize: 13,
      width: "100%",
      textAlign: "left",
      paddingBottom: 8,
      color: "#848d96",
      fontWeight: 600,
      "&:hover,&:focus": {
        color: "#0366d6",
      },
      "& span": {
        width: "100%",
      },
      "& svg": {
        width: 16,
        height: 16,
      },
    },
    popper: {
      border: "1px solid rgba(27,31,35,.15)",
      boxShadow: "0 3px 12px rgba(27,31,35,.15)",
      borderRadius: 3,
      width: 300,
      zIndex: 1,
      fontSize: 13,
      color: "rgb(201 209 217)",
      backgroundColor: "#161b22",
    },
    header: {
      fontWeight: 600,
      forSize: "14px",
      padding: "4px",
    },
    inputBase: {
      padding: 10,
      width: "100%",
      "& input": {
        borderRadius: 4,
        backgroundColor: "#161b22",
        padding: 8,
        transition: theme.transitions.create([
          "border-color",
          "box-shadow",
        ]),
        border: "1px solid #ced4da",
        fontSize: 14,
        "&:focus": {
          boxShadow: `${alpha(
            theme.palette.primary.main,
            0.25
          )} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    paper: {
      boxShadow: "none",
      margin: 0,
      color: "#848d96",
      fontSize: 13,
      backgroundColor: "#161b22",

    },
    option: {
      minHeight: "auto",
      alignItems: "flex-start",
      backgroundColor: "#161b22",
      color: "#c9d1d9",
      padding: 8,
      '&[aria-selected="true"]': {
        backgroundColor: theme.palette.primary.main,
      },
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    popperDisablePortal: {
      position: "relative",
    },

    text: {
      flexGrow: 1,
    },
    textFont: {
      fontSize: "14px",
      fontWeight: "normal",
      color: "#848d96",
      textAlign: "center",
    },
  })
);

interface LabelType {
  name: string;
  code?: string;
}

interface DropDownProps {
  title: string;
  heading: string;
  labels: LabelType[];
  selectionValue: LabelType;
  setSelectionValue: any;
  noSearch?:boolean;
}


const FilterDropDown = (props: DropDownProps) => {
  const {
    title,
    heading,
    labels,
    selectionValue,
    setSelectionValue,
    noSearch = false,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    event: React.ChangeEvent<{}>,
    reason: AutocompleteCloseReason
  ) => {
    if (reason === "toggleInput") {
      return;
    }
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const onValueChange = (
    event: React.ChangeEvent<{}>,
    newValue: any
  ) => {
    setSelectionValue(newValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? "git-drop" : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ButtonBase
          disableRipple
          className={classes.button}
          aria-describedby={id}
          onClick={handleClick}
        >
          <span className={classes.textFont}>{title} : {selectionValue ? selectionValue.name: "Any"}</span>

          <ArrowDropDownIcon />
        </ButtonBase>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <div className={classes.header}>{heading}</div>

        <Autocomplete
          open
          onClose={handleClose}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          value={selectionValue}
          onChange={onValueChange}
          disablePortal
          renderTags={() => null}
          noOptionsText="No labels"
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <div className={classes.text}>{option.name}</div>
            </React.Fragment>
          )}
          options={[...labels]}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              placeholder={"Filter " + title}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
    </React.Fragment>
  );
};

export default FilterDropDown;
