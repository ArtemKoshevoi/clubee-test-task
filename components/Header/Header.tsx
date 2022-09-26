import { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Header = (): ReactElement => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        News
      </Typography>
    </Box>
  );
};

export default Header;
