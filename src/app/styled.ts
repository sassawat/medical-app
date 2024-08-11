import { styled, Box, Typography } from "@mui/material";

export const ImageWrapper = styled(Box)({
  position: "relative",
  marginBottom: "20px",
  width: "36vh",
  height: "43vh",
  margin: "auto",
});

export const Highlight = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
});

export const Caption = styled(Typography)({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  padding: "5px 10px",
  borderRadius: "5px",
  zIndex: 3,
});
