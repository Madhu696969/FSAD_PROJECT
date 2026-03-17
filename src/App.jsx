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
import AvailableDonations from "./Components/Consumer/AvailableDonations";
import MyRequests from "./Components/Consumer/MyRequests";
import FeedBack from "./Components/Consumer/FeedBack";
import ConsumerHelp from "./Components/Consumer/ConsumerHelp";
import ConsumerProfile from "./Components/Consumer/ConsumerProfile";
import DonorProfile from "./Components/Donor/DonorProfile";

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
        <Route path="/donor/profile" element={<DonorProfile/>} />
        <Route path="/consumer" element={<ConsumerDashBoard/>} />
        <Route path="/consumer/donations" element={<AvailableDonations/>} />
        <Route path="/consumer/requests" element={<MyRequests/>} />
        <Route path="/consumer/Feedback" element={<FeedBack/>}/>
        <Route path="/consumer/help" element={<ConsumerHelp/>}/>
        <Route path="/consumer/profile" element={<ConsumerProfile/>}/>
      </Routes>
    </Router>
  );
};

export default App;