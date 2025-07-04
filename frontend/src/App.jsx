import { Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import  CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import Navbar from "./parts/Navbar.jsx"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <Box  minH={"100vh"}> 
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App
