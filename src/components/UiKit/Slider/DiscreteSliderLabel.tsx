"use client";

import React from "react";
import { Card, Typography, Box, Slider } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const DiscreteSliderLabel: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Discrete Slider Label
        </Typography>

        <Box>
          <Slider
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
      </Card>
    </>
  );
};

export default DiscreteSliderLabel;
