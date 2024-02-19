import { Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MessageInput = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <input
        type="text"
        style={{
          border: "none",
          padding: "15px 45px",
          borderRadius: "10px",
          outline: "none",
          width: "100%",
        }}
      />

      {/* <Fab
              sx={{
                bgcolor: "#000",
                color: "#fff",
                position: "absolute",
                top: "10",
                left: "0px",
                width:"35px",
                height:"35px"
              }}
              aria-label="add"
              size="small"
            >
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontSize: "20px", fontWeight: "600" }}
              >
                S
              </Typography>
            </Fab> */}

      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0px",
          // background: "forestgreen",
          height: "100%",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            background: "#000",
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            padding: "10px",
            border: "none",
            width: "30px",
            height: "30px",
            textAlign: "center",
          }}
        >
          <Typography color="#fff" sx={{ color: "#fff", textAlign: "center" }}>
            S
          </Typography>
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0px",
          // background: "forestgreen",
          height: "100%",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            background: "#667EFA",
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            padding: "8px",
            border: "none",
          }}
        >
          <SendIcon
            color="#fff"
            sx={{ color: "#fff", width: "10px", height: "10px" }}
          />
        </button>
      </div>
    </Box>
  );
};
export default MessageInput;
