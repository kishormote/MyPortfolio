import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Box, Container } from "@mui/material";

function MainLayout() {
  return (
    <Box className="app-container">
      <Navbar />
      <Container component="main" className="main-content">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default MainLayout; 