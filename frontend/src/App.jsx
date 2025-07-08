import { Route, Routes } from "react-router-dom"
import  CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import Navbar from "./parts/Navbar.jsx"
import { Box, useColorModeValue } from "@chakra-ui/react"
import React from "react"

function App() {
  return (
    <Box  minH={"100vh"} bg={useColorModeValue("gray.200", "gray.900")}> 
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App
