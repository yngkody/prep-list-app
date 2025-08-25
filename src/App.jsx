// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Sidebar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import { ColorModeContext, useMode } from "./theme";

// Sample pages
function Dashboard() {
  return <h1>Dashboard</h1>;
}
function Team() {
  return <h1>Team</h1>;
}
function Contacts() {
  return <h1>Contacts</h1>;
}
function Invoices() {
  return <h1>Invoices</h1>;
}
function Profile() {
  return <h1>Profile Form</h1>;
}
function Calendar() {
  return <h1>Calendar</h1>;
}
function FAQ() {
  return <h1>FAQ</h1>;
}
function BarChart() {
  return <h1>Bar Chart</h1>;
}
function PieChart() {
  return <h1>Pie Chart</h1>;
}
function LineChart() {
  return <h1>Line Chart</h1>;
}
function Geography() {
  return <h1>Geography Chart</h1>;
}

export default function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex">
          {isSidebar && <Sidebar />}
          <Box flex={1} display="flex" flexDirection="column">
            <Topbar />
            <Box p={2}>
              <Routes>
                
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
