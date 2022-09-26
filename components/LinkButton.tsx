import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  buttonTitle: string;
}

const LinkButton = ({ href, buttonTitle }: LinkButtonProps) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Link href={href} passHref={true}>
        <Button variant="contained">{buttonTitle}</Button>
      </Link>
    </Box>
  );
};

export default LinkButton;
