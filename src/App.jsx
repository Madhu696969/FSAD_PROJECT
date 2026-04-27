import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";

import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import DonorForm from "./Pages/DonorForm";
import ConsumerForm from "./Pages/ConsumerForm";
import SignIn from "./Pages/SignIn";

import DonorHomePage from "./Components/Donor/DonorHomePage";
import DonateItem from "./Components/Donor/DonateItem";
import Feedback from "./Components/Donor/Feedback";
import DonorHelp from "./Components/Donor/DonorHelp";
import DonorProfile from "./Components/Donor/DonorProfile";

import ConsumerDashBoard from "./Components/Consumer/ConsumerDashBoard";
import AvailableDonations from "./Components/Consumer/AvailableDonations";
import MyRequests from "./Components/Consumer/MyRequests";
import FeedBack from "./Components/Consumer/FeedBack";
import ConsumerHelp from "./Components/Consumer/ConsumerHelp";
import ConsumerProfile from "./Components/Consumer/ConsumerProfile";

import AdminHome from "./Components/Admin/AdminHome";
import ManageRequests from "./Components/Admin/ManageRequests";
import ManageResources from "./Components/Admin/ManageResources";
import ManageFeedbacks from "./Components/Admin/ManageFeedbacks";
import AdminProfile from "./Components/Admin/AdminProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"             element={<LandingPage />} />
        <Route path="/about"        element={<About />} />
        <Route path="/signup"       element={<SignUp />} />
        <Route path="/consumerform" element={<ConsumerForm />} />
        <Route path="/donorform"    element={<DonorForm />} />
        <Route path="/signin"       element={<SignIn />} />
        <Route path="/donor" element={
          <PrivateRoute role="DONOR"><DonorHomePage /></PrivateRoute>
        } />
        <Route path="/donor/donateitem" element={
          <PrivateRoute role="DONOR"><DonateItem /></PrivateRoute>
        } />
        <Route path="/donor/Feedback" element={
          <PrivateRoute role="DONOR"><Feedback /></PrivateRoute>
        } />
        <Route path="/donor/help" element={
          <PrivateRoute role="DONOR"><DonorHelp /></PrivateRoute>
        } />
        <Route path="/donor/profile" element={
          <PrivateRoute role="DONOR"><DonorProfile /></PrivateRoute>
        } />
        <Route path="/consumer" element={
          <PrivateRoute role="CONSUMER"><ConsumerDashBoard /></PrivateRoute>
        } />
        <Route path="/consumer/donations" element={
          <PrivateRoute role="CONSUMER"><AvailableDonations /></PrivateRoute>
        } />
        <Route path="/consumer/requests" element={
          <PrivateRoute role="CONSUMER"><MyRequests /></PrivateRoute>
        } />
        <Route path="/consumer/Feedback" element={
          <PrivateRoute role="CONSUMER"><FeedBack /></PrivateRoute>
        } />
        <Route path="/consumer/help" element={
          <PrivateRoute role="CONSUMER"><ConsumerHelp /></PrivateRoute>
        } />
        <Route path="/consumer/profile" element={
          <PrivateRoute role="CONSUMER"><ConsumerProfile /></PrivateRoute>
        } />
        <Route path="/admin/home" element={
          <PrivateRoute role="ADMIN"><AdminHome /></PrivateRoute>
        } />
        <Route path="/admin/manage-requests" element={
          <PrivateRoute role="ADMIN"><ManageRequests /></PrivateRoute>
        } />
        <Route path="/admin/manage-resources" element={
          <PrivateRoute role="ADMIN"><ManageResources /></PrivateRoute>
        } />
        <Route path="/admin/manage-feedbacks" element={
          <PrivateRoute role="ADMIN"><ManageFeedbacks /></PrivateRoute>
        } />
        <Route path="/admin/profile" element={
          <PrivateRoute role="ADMIN"><AdminProfile /></PrivateRoute>
        } />

      </Routes>
    </Router>
  );
};

export default App;