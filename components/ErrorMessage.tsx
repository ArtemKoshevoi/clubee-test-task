import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Box>
      <Typography color="red">{message}</Typography>
    </Box>
  );
};

export default ErrorMessage;
