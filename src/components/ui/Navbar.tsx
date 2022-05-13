import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useDispatch } from "react-redux";
import { openSideMenu } from "../../state/action-creators/ui";
import { logout } from "../../state/action-creators/auth";

export const Navbar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout())
  };

  const onSubmit = () => {
    dispatch(openSideMenu());
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={onSubmit}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">TPS</Typography>

        <Button
          style={{ margin: "0 0 0 auto" }}
          variant="contained"
          onClick={onLogout}
        >
          Cerrar Sesion
        </Button>
      </Toolbar>
    </AppBar>
  );
};
