import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
const HistoryComponent = () => {
  return (
    <>
      <div style={{width:"100%"}}>
        <button style={{ display: "flex" , margin:"10px auto",justifyContent:"space-between",alignItems:"center" ,width:"94%",borderRadius:"15px",outline:"none",border:"none",fontSize:"16px" , padding:"10px"}}>
          New Chat
          <AddIcon />
        </button>
      </div>
      <Divider/>
      <List sx={{ mx: 1 }}>
        {["Ilorem fodd", "Starred kfkl", "Send siom", "Drafts"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ bgcolor: "#7A99FF", mb: 1, borderRadius: "10px" }}
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </>
  );
};
export default HistoryComponent;
