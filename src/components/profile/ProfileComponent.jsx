import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProfileInformation from "./ProfileInformation";
const ProfileComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        mt: "auto",
        bgcolor: "",
        borderTop: ".2px solid #fafafa",
        height: "60px",
        display: "flex",
        alignItems: "center",
        px: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box>
          <Typography variant="body2" sx={{ color: "#fff", fontSize: "10px" }}>
            Good Morning
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "600", fontSize: "12px", color: "#fff" }}
          >
            Mridul Hasan
          </Typography>
        </Box>
        <KeyboardArrowDownIcon
          sx={{ fontSize: 40, color: "#fff" }}
          onClick={handleClickOpen}
        />
        <ProfileInformation open={open} onClose={handleClose} />
      </Stack>
    </Box>
  );
};
export default ProfileComponent;
