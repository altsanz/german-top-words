import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
const Drawer = () => {
  let navigate = useNavigate();
  return (
    <MUIDrawer open variant="permanent">
      <List>
        <ListItem
          button
          key="translate"
          onClick={() => navigate("/translate-the-word")}
        >
          <ListItemText primary="Translate" />
        </ListItem>
        <ListItem
          button
          key="gender"
          onClick={() => navigate("/guess-the-gender")}
        >
          <ListItemText primary="Guess the gender" />
        </ListItem>
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
