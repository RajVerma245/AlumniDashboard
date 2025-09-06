// Alumni_Dashboard/SidebarLayout.jsx
import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../SidebarForAlumniDashboard/Sidebar";

const drawerWidth = 250;

 function SidebarLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Mobile top bar */}
      {isMobile && (
        <AppBar position="fixed" sx={{ bgcolor: "#179BA0" }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" ml={1}>
              Alumni Portal
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Desktop fixed sidebar */}
      {!isMobile && (
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: "fixed",
            height: "100vh",
          }}
        >
          <Sidebar />
        </Box>
      )}

      {/* Mobile drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Sidebar onNavigate={toggleDrawer} />
      </Drawer>

      {/* Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f7fb",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* add offset so content is not under AppBar */}
        {isMobile && <Toolbar />}
        {children}
      </Box>
    </Box>
  );
}

export default SidebarLayout;