import { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): ReactElement => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
