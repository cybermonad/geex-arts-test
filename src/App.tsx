import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ProfilePage from "./pages/Profile"
import Navbar from "./components/Navbar/Navbar"
import FeedPage from "./pages/Feed/FeedPage"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#06082c",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#f1f3f7",
        contrastText: "#06082C"
      },
      info: {
        main: "#9395b8"
      }
    },
    typography: {
      fontFamily: "Inter, Arial, Helvetica, sans-serif"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </ThemeProvider>
  )
}

