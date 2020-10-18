import React from "react";
import "./App.css";

// import LandingPage_temp from "./screens/LandingPage/index";
import HomePage from "./screens/HomePage";
import AboutSection from "./screens/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HomePage />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;