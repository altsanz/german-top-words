import React from "react";
import PropTypes from "prop-types";
import { LinearProgress } from "@mui/material";
const topStreak = 15;
function StreakBar({ currentStreak }) {
  let progress = 0;

  if (currentStreak >= topStreak) {
    progress = 100;
  } else {
    progress = Math.round((100 / topStreak) * currentStreak);
  }
  console.log(progress);

  return <LinearProgress variant="determinate" value={progress} />;
}

StreakBar.propTypes = {
  currentStreak: PropTypes.number,
};

export default StreakBar;
