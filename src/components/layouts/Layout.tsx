import { FC } from "react";

import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Sidebar, Navbar } from "..";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ title = "TPS", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Toaster />
      <title>{title}</title>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
