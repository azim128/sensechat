import { Box, Toolbar, Typography } from "@mui/material";
import MessageInput from "./MessageInput";
import logo from "../../assets/Sense.AI.png";
const ChatWrapper = () => {
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",

        p: 3,
      }}
    >
      <Box sx={{ flex: "1", overflowY: "auto" }}>
        <Toolbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
        >
          <img src={logo} alt="" style={{ width: "auto", height: "140px" }} />

          <Box
            sx={{
              bgcolor: "#000",
              color: "#fff",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="add"
            size="large"
          >
            <Typography
              variant="body2"
              sx={{ color: "#fff", fontSize: "120px", fontWeight: "600" }}
            >
              S
            </Typography>
          </Box>
          <Typography sx={{ mt: "24px" }}>
            ২১ এর সাথে শুদ্ধ ও সমৃদ্ধ হোক বাংলা ভাষা
          </Typography>
        </div>
      </Box>
      <MessageInput />
    </Box>
  );
};
export default ChatWrapper;
