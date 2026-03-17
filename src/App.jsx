import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import DonorForm from "./Pages/DonorForm";
import ConsumerForm from "./Pages/ConsumerForm"
import SignIn from "./Pages/SignIn";
import DonorHomePage from "./Components/Donor/DonorHomePage";
import DonateItem from "./Components/Donor/DonateItem";
import Feedback from "./Components/Donor/Feedback";
import DonorHelp from "./Components/Donor/DonorHelp";
import ConsumerDashBoard from "./Components/Consumer/ConsumerDashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/consumerform" element={<ConsumerForm/>} />
        <Route path="/donorform" element={<DonorForm/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/donor" element={<DonorHomePage/>} />
        <Route path="/donor/donateitem" element={<DonateItem/>} />
        <Route path="/donor/Feedback" element={<Feedback/>} />
        <Route path="/donor/help" element={<DonorHelp/>}/>
        <Route path="consumer" element={<ConsumerDashBoard/>} />
      </Routes>
    </Router>
  );
};

export default App;