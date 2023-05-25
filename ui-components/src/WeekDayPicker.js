/** @format */

import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  root: { "& .MuiButton-root": { cursor: "pointer", width: 40 } },
});
const weekDays = ["S", "M", "Tu", "W", "Th", "F", "Sa"];

const WeekDayPicker = () => {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.root} disableElevation size="small">
      {weekDays.map((day, i) => (
        <Button
          color="primary"
          onClick={() => {}}
          key={day}
          value={i}
          variant="contained"
        >
          {day}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeekDayPicker;
