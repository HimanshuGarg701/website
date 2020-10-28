import React from "react";
import "./App.css";

// import LandingPage_temp from "./screens/LandingPage/index";
import LandingSection from "./screens/LandingSection";
import AboutSection from "./screens/AboutSection";
import EventsSection from "./screens/EventsSection";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SponsorsSection from "./screens/SponsorsSection";
import FAQSection from "./screens/FAQSection";

function App() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <EventsSection />
      <AboutSection />
      {/* <SponsorsSection /> */}
      {/* <FAQSection /> */}
      <Footer />
    </div>
  );
}

export default App;
