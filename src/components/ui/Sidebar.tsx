import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { RootState } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { closeSideMenu } from "../../state/action-creators/ui";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", path: "/", icon: <InboxOutlinedIcon /> },
  { text: "Usuarios", path: "/usuarios", icon: <InboxOutlinedIcon /> },
  {
    text: "Proveedores",
    path: "/proveedores",
    icon: <MailOutlineOutlinedIcon />,
  },
];

export const Sidebar = () => {
  const { sidemenuOpen } = useSelector((state: RootState) => state.ui);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(closeSideMenu());
  };

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={onSubmit}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text) => (
            <ListItem key={text.text} component={Link} to={text.path}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
};
