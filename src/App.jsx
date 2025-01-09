import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import "./App.css";

// Create a dark theme with glass morphism effects
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#06b6d4",
      light: "#22d3ee",
      dark: "#0891b2",
    },
    secondary: {
      main: "#f43f5e",
      light: "#fb7185",
      dark: "#e11d48",
    },
    accent: {
      teal: "#14b8a6",
      purple: "#a855f7",
      orange: "#f97316",
      yellow: "#facc15",
    },
    background: {
      default: "#0f172a",
      paper: "rgba(15, 23, 42, 0.8)",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
      accent: "#22d3ee",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: "#e6f1ff",
      fontWeight: 700,
    },
    h2: {
      color: "#64ffda",
      fontWeight: 600,
    },
    h3: {
      color: "#e6f1ff",
      fontWeight: 600,
    },
    h4: {
      color: "#8892b0",
      fontWeight: 500,
    },
    body1: {
      color: "#8892b0",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            linear-gradient(135deg, #0f172a 0%, #1e293b 100%),
            radial-gradient(circle at top right, rgba(6, 182, 212, 0.15) 0%, transparent 35%),
            radial-gradient(circle at bottom left, rgba(244, 63, 94, 0.15) 0%, transparent 35%)
          `,
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: 16,
          border: "1px solid rgba(148, 163, 184, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            borderColor: "rgba(34, 211, 238, 0.3)",
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "rgba(100, 255, 218, 0.1)",
          },
        },
        contained: {
          background: "linear-gradient(45deg, #64ffda 30%, #14cba8 90%)",
          color: "#0a192f",
          "&:hover": {
            background: "linear-gradient(45deg, #14cba8 30%, #64ffda 90%)",
          },
        },
        outlined: {
          borderColor: "#64ffda",
          color: "#64ffda",
          "&:hover": {
            borderColor: "#14cba8",
            color: "#14cba8",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
