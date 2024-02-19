import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const Header = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { sm: "block", md: "none" },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#dbecf3",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "#000" }} />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "#000", fontWeight: "600" }}
        >
          sense.ai
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
