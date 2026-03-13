import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import DonorForm from "./Pages/DonorForm";
import ConsumerForm from "./Pages/ConsumerForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/DonorForm" element={<DonorForm/>}/>
        <Route path="/ConsumerForm" element={<ConsumerForm/>} />
      </Routes>
    </Router>
  );
};

export default App;