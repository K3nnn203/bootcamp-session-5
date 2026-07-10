import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import About from "./pages/About";
import NotFound from "./pages/404NotFound";
import ClubDetail from "./pages/ClubDetail";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/clubs/:clubId" element={<ClubDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
