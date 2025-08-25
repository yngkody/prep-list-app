import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100], overflow: "visible" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Box sx={{ whiteSpace: "normal", wordBreak: "break-word" }}>
        <Typography>{title}</Typography>
      </Box>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Collapse sidebar automatically on small screens
  useEffect(() => {
    if (windowWidth < 768) setIsCollapsed(true);
  }, [windowWidth]);

  const sidebarWidth = isCollapsed ? 60 : Math.min(280, windowWidth * 0.7);

  return (
    <Box
      sx={{
        height: "100vh",
        width: sidebarWidth,
        borderRadius: "20px",
        overflowY: "auto",
        backgroundColor: colors.grey[700],
        "& .pro-sidebar-inner": {
          borderRadius: "20px",
          height: "100%",
        },
        "& .pro-icon-wrapper": { backgroundColor: "transparent !important" },
        "& .pro-inner-item": {
          padding: "5px 20px !important",
          whiteSpace: "normal",
          wordBreak: "break-word",
        },
        "& .pro-inner-item:hover": { color: "#868dfb !important" },
        "& .pro-menu-item.active": { color: "#6870fa !important" },
      }}
    >
      <ProSidebar collapsed={isCollapsed} width={sidebarWidth}>
        <Menu iconShape="square">
          {/* Logo / collapse button */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h2" color={colors.grey[100]} sx={{ fontFamily: "'Praise', cursive" }}>
                  Preppery
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon sx={{ color: colors.grey[100] }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" textAlign="center">
              <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
                Michael Scott Catering
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Admin Portal
              </Typography>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* Quick Start */}
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 0" }}>
                Quick Start
              </Typography>
            )}
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="View Short List" to="/short-list" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="View Progress by Station" to="/station-progress" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Edit Prep List" to="/prep-list" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Upload New Prep List" to="/new-prep-list" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />

            {/* Admin Portal */}
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 0" }}>
                Admin Portal
              </Typography>
            )}
            <Item title="Manage (all settings)" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />

            {/* Data Section */}
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 0" }}>
                Data
              </Typography>
            )}
            <Item
              title="Reports and Analytics"
              to="/reports-analytics"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
