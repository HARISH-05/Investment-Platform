import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";
import {Register1} from "./register1";
import{ Dashboard} from "./Dashboard";
import { Home } from "./home";
import { Contact } from "./contact";
import "./App.css";
import { Equity } from "./components/investmentpages/equity";
import { Govtbonds } from "./components/investmentpages/govtbonds";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Nps } from "./components/investmentpages/nps";
import { Nsc } from "./components/investmentpages/nsc";
import { Postoffice } from "./components/investmentpages/postoffice";
import { Sgb } from "./components/investmentpages/sgb";
import { Ulip } from "./components/investmentpages/ulip";
import Ppf from "./components/investmentpages/ppf";
import Bank from "./bank";

import Feedback from "./components/microservices/feedback";
import AboutUs from "./aboutus";
import ContactUs from "./contactus";
import Services from "./services";
import PrivacyPolicy from "./privacypolicy";
import { Profile } from "./profile";
// import {Ppf}
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/register1" element={<Register1 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ppf" element={<Ppf />} />
          <Route path="/sgb" element={<Sgb />} />
          <Route path="/ulip" element={<Ulip />} />
          <Route path="/postoffice" element={<Postoffice />} />
          <Route path="/nsc" element={<Nsc />} />
          <Route path="/nps" element={<Nps />} />
          <Route path="/govtbongs" element={<Govtbonds />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
