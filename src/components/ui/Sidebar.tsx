import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import { RootState } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { closeSideMenu } from "../../state/action-creators/ui";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { sidemenuOpen } = useSelector((state: RootState) => state.ui);

  const location = useLocation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(closeSideMenu());
  };

  const { role } = useSelector((state: RootState) => state.auth);

  let menuItems;

  if (role === "Administrador") {
    menuItems = [
      { text: "Dashboard", path: "/", icon: <GridViewOutlinedIcon /> },
      { text: "Usuarios", path: "/usuarios", icon: <GroupOutlinedIcon /> },
      {
        text: "Proveedores",
        path: "/proveedores",
        icon: <AccountCircleOutlinedIcon />,
      },
      {
        text: "Categorias",
        path: "/categorias",
        icon: <CategoryOutlinedIcon />,
      },
      {
        text: "Productos",
        path: "/productos",
        icon: <Inventory2OutlinedIcon />,
      },
      {
        text: "Transacciones",
        path: "/transacciones",
        icon: <InventoryOutlinedIcon />,
      },
    ];
  } else {
    menuItems = [
      { text: "Dashboard", path: "/", icon: <GridViewOutlinedIcon /> },
    ];
  }

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={onSubmit}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h5" align="center">
            Menú
          </Typography>
        </Box>

        <List>
          {menuItems.map((text) => (
            <ListItemButton
              key={text.text}
              component={Link}
              to={text.path}
              selected={text.path === location.pathname}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
};
