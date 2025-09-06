// Alumni_Dashboard/Sidebar.jsx
import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  MonetizationOn as MonetizationOnIcon,
  Event as EventIcon,
  Work as WorkIcon,
  Newspaper as NewspaperIcon,
  Forum as ForumIcon,
  HeadsetMic as HeadsetMicIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const sidebarColor = "#179BA0";
const textColor = "#fff";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Donate", icon: <MonetizationOnIcon />, path: "/alumni-donation" },
  { text: "Organize Event", icon: <EventIcon />, path: "/organize-event" },
  { text: "Give Jobs", icon: <WorkIcon />, path: "/give-jobs" },
  { text: "News", icon: <NewspaperIcon />, path: "/news" },
  { text: "Forum", icon: <ForumIcon />, path: "/forum" },
];

const otherItems = [
  { text: "Support", icon: <HeadsetMicIcon />, path: "/support" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Log Out", icon: <LogoutIcon />, path: "/logout" },
];

export default function Sidebar({ onNavigate }) {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    if (onNavigate) onNavigate(); // closes drawer on mobile
  };

  return (
    <Box
      sx={{
        bgcolor: sidebarColor,
        color: textColor,
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        px: 2,
        py: 3,
        overflowY: "auto",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        ALUMNI
      </Typography>

      <Typography variant="caption" sx={{ opacity: 0.7, mb: 1 }}>
        MAIN MENU
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => go(item.path)}
            sx={{ color: textColor, borderRadius: 1, mb: 0.5 }}
          >
            <ListItemIcon sx={{ color: textColor }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.3)" }} />

      <Typography variant="caption" sx={{ opacity: 0.7, mb: 1 }}>
        OTHER
      </Typography>
      <List>
        {otherItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => go(item.path)}
            sx={{ color: textColor, borderRadius: 1, mb: 0.5 }}
          >
            <ListItemIcon sx={{ color: textColor }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
