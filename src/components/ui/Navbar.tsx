import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useDispatch } from "react-redux";
import { openSideMenu } from "../../state/action-creators/ui";

export const Navbar = () => {
  const dispatch = useDispatch();

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
      </Toolbar>
    </AppBar>
  );
};
