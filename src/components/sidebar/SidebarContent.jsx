import { Box, Divider, Fab, Stack, Toolbar, Typography } from "@mui/material";
import HistoryComponent from "./HistoryComponent";
import ProfileComponent from "../profile/ProfileComponent";
const SidebarContent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          bgcolor: "#667efa",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Fab
              sx={{
                bgcolor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
              aria-label="add"
              size="medium"
            >
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontSize: "30px", fontWeight: "600" }}
              >
                S
              </Typography>
            </Fab>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontSize: "30px", fontWeight: "600" }}
              >
                sense.ai
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
        <Divider />
        <Box sx={{ height: "81%", overflowY: "auto" }}>
          <HistoryComponent />
        </Box>
        <ProfileComponent />
      </Box>
    </>
  );
};
export default SidebarContent;
