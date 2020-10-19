import React from "react";
import SFHACKS_Logo from "../assets/SF_Hacks_Logo.png";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingTop: 0,
          paddingBottom: 0,
          borderBottomWidth: 5,
          borderBottomStyle: "solid",
          borderBottomColor: "#7a42c8",
          boxShadow: "0 4px 20px 10px RGBA(124, 67, 203, 0.5)",
          position: "fixed",
          top: 0,
          zIndex: 1
        }}
      >
        <div style={{ marginLeft: 50 }}>
          <img src={SFHACKS_Logo} style={{ height: 80, width: "auto" }} />
        </div>
      </div>
      <div style={{ height: 80 }} />
    </div>
  );
};

export default Navbar;
