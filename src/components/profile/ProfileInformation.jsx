import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ProfileInformation = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "start !important",
            alignItems: "end",
            mt: "-30px",
            ml: "-28px",
          },
        }}
      >
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={handleClose}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};
export default ProfileInformation;
