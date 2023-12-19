import { Box, Link, Stack } from "@mui/material";

const style ={
  Link: {
    paddingRight : "30px"

  }
}

const Header = (props) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-around" alignItems="center" p={2}>
        <Link style={style.Link} href="/" underline="none"  color={"inherit"}>Home</Link>
        <Link style={style.Link} href="/about" underline="none"  color={"inherit"}> About </Link>
        <Link style={style.Link} href="/contact" underline="none" color={"inherit"}>Contact</Link>
        <Link style={style.Link} href="/list" underline="none" color={"inherit"}>Product</Link>
        {/* <Link style={style.Link} href="/CardItem" underline="none" color={"inherit"}>Card</Link> */}
      </Stack>
    </Box>
  );
};

export default Header;



