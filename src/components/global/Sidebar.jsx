import { useState } from "react";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const menuItems = [
    {
      section: "Quick Start",
      items: [
        { title: "Dashboard", icon: <HomeOutlinedIcon />, to: "/" },
        { title: "View Short List", icon: <ContactsOutlinedIcon />, to: "/short-list" },
        { title: "View Progress by Station", icon: <ContactsOutlinedIcon />, to: "/station-progress" },
        { title: "Edit Prep List", icon: <ContactsOutlinedIcon />, to: "/prep-list" },
        { title: "Upload New Prep List", icon: <ContactsOutlinedIcon />, to: "/new-prep-list" },
      ],
    },
    {
      section: "Admin Portal",
      items: [
        { title: "Manage (all settings)", icon: <BarChartOutlinedIcon />, to: "/bar" },
      ],
    },
    {
      section: "Data",
      items: [
        { title: "Reports and Analytics", icon: <PieChartOutlineOutlinedIcon />, to: "/reports-analytics" },
      ],
    },
  ];

  return (
    <>
      {/* Menu button */}
      <IconButton onClick={toggleDrawer} sx={{ m: 1 }}>
        <MenuOutlinedIcon sx={{ color: colors.grey[100] }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "80vw",
            maxWidth: 280,
            height: "100vh", // FULL HEIGHT
            borderRadius: "20px",
            bgcolor: colors.grey[700],
            display: "flex",
            flexDirection: "column",
            p: 2,
          },
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" color={colors.grey[100]} sx={{ fontFamily: "'Praise', cursive" }}>
            Preppery
          </Typography>
          <Typography variant="subtitle1" color={colors.greenAccent[500]}>
            Admin Portal
          </Typography>
        </Box>

        {/* Scrollable Menu Items */}
        <Box sx={{ overflowY: "auto", flex: 1 }}>
          <List>
            {menuItems.map((section) => (
              <Box key={section.section} mb={2}>
                <Typography variant="subtitle2" color={colors.grey[300]} sx={{ ml: 1, mb: 1 }}>
                  {section.section}
                </Typography>
                {section.items.map((item) => (
                  <ListItemButton
                    key={item.title}
                    component={Link}
                    to={item.to}
                    sx={{ borderRadius: 1, mb: 0.5 }}
                    onClick={toggleDrawer}
                  >
                    <ListItemIcon sx={{ color: colors.grey[100], minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        sx: { whiteSpace: "normal", wordBreak: "break-word", color: colors.grey[100] },
                      }}
                    />
                  </ListItemButton>
                ))}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
