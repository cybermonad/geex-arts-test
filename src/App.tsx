import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ProfilePage from "./pages/Profile"
import Navbar from "./components/Navbar/Navbar"
// import NavDrawer from "./components/NavDrawer/NavDrawer"
import FeedPage from "./pages/Feed/FeedPage"

export default function App() {
  return (
    <>
      <Navbar />
      {/* <NavDrawer /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

