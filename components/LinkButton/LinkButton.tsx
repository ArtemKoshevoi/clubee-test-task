import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const LinkButton = () => {
  return (
    <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
      <Link href="/new-article">
        <Button variant="contained">New Article</Button>
      </Link>
    </Box>
  );
};

export default LinkButton;
