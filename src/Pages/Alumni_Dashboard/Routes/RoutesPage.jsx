import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "../Layoutes/SidebarLayout";
import Dashboard from "../OtherPages/Dashboard";
import AlumniDonationPage from "../DonationPage/AlumniDonationPage";
import Profile from "../OtherPages/Profile";
import OrganizeEvent from "../OtherPages/OrganizeEvent";
import GiveJobs from "../OtherPages/GiveJobs";
import News from "../OtherPages/News";
import Forum from "../OtherPages/Forum";
import Support from "../OtherPages/Support";
import Settings from "../OtherPages/Settings";
import LogOut from "../OtherPages/LogOut";
import DonationForm from "../DonationPage/DonationForm";
import YourDonations from "../DonationPage/YourDonations";
import AllDonations from "../DonationPage/AllDonations";

const RoutesPage = () => {
  return (
    <Router>
      <SidebarLayout>
        <Routes>
          {/* Main menu */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/alumni-donation" element={<AlumniDonationPage />} />
          <Route path="/organize-event" element={<OrganizeEvent />} />
          <Route path="/give-jobs" element={<GiveJobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/forum" element={<Forum />} />

          {/* Other menu */}
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<LogOut />} />

          {/* DonationForm */}
          <Route path="/donationform" element={<DonationForm />} />
          <Route path="/your-donations" element={<YourDonations />} />
          <Route path="/all-donations" element={<AllDonations />} />


          {/* Redirect unknown paths to Dashboard */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </SidebarLayout>
    </Router>
  );
};

export default RoutesPage;
