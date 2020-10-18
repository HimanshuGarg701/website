import React from "react";

import AmanProfileImage from "../assets/teamProfile/Aman.png";
import JainamProfileImage from "../assets/teamProfile/Jainam.png";
import JohanaProfileImage from "../assets/teamProfile/Johana.png";
import JohnathanProfileImage from "../assets/teamProfile/Johnathan.png";
import KevinProfileImage from "../assets/teamProfile/Kevin.png";
import LeishaProfileImage from "../assets/teamProfile/Leisha.png";
import MeghaProfileImage from "../assets/teamProfile/Megha.png";
import NyaProfileImage from "../assets/teamProfile/Nya.png";
import OrionProfileImage from "../assets/teamProfile/Orion.png";

import missionPicture from "../assets/mission.png";

import "../styles/AboutSection.css";

const AboutSection = () => {
  const profiles = [
    { name: "Leisha Murthy", position: "President", image: LeishaProfileImage },
    {
      name: "Megha Babariya",
      position: "Vice President",
      image: MeghaProfileImage
    },
    { name: "Kevin Manago", position: "Treasurer", image: KevinProfileImage },
    {
      name: "Orion Culbertson",
      position: "Logistics Lead",
      image: OrionProfileImage
    },
    {
      name: "Johnathan Huynh",
      position: "Day of Logistics",
      image: JohnathanProfileImage
    },
    {
      name: "Nya Bautista",
      position: "Sponshorship Lead",
      image: NyaProfileImage
    },
    { name: "Aman Kumar", position: "Design Lead", image: AmanProfileImage },
    {
      name: "Jainam Shah",
      position: "Web Developer",
      image: JainamProfileImage
    },
    {
      name: "Johana Matute",
      position: "Marketing Lead",
      image: JohanaProfileImage
    }
  ];
  return (
    <div style={{ paddingRight: "10%", paddingLeft: "10%" }}>
      <div className="headingText1" style={{ textAlign: "center" }}>
        <span className="highlight">About Us</span>
      </div>
      <div style={{ marginTop: 50 }}>
        <div className="headingText2">
          <span className="highlight">OUR MISSION</span>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div
            className="descriptionText"
            style={{ width: 380, marginBottom: 20 }}
          >
            Our organization’s purpose is to plan and host California’s most
            talented collegiate hackers, designers, and developers, to a 24-hour
            hackathon. We work towards giving students an environment for
            maximum innovation, collaboration, and education.
          </div>
          <div>
            <img src={missionPicture} style={{ height: 250, width: "auto" }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 50 }}>
        <div className="headingText2">
          <span className="highlight">OUR TEAM</span>
        </div>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {profiles.map(profile => (
              <div key={profile.name} style={{ marginBottom: 20, margin: 20 }}>
                <div>
                  <img
                    src={profile.image}
                    style={{ height: 140, width: 140, borderRadius: 70 }}
                  />
                </div>
                <div className="profileName" style={{ marginTop: 6 }}>
                  {profile.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div style={{ marginTop: 20 }}>
        <div className="about-h3">Meet Our Team:</div>
        <div className="about-reg1" style={{ marginTop: 8 }}>
          With our next season of SF Hacks and brand new initiative for virtual
          building, we’re looking for NEW DIRECTORS to join the our design team
          as Illustrators and Graphics Designers! All SFSU students are welcome
          regardless of major or experience!
        </div>
        <div className="about-reg1">
          Email us at{" "}
          <a
            href="mailto: sfhacksteam@gmail.com"
            style={{ textDecoration: "none" }}
          >
            sfhacksteam@gmail.com
          </a>{" "}
          with your portfolio.
        </div>
      </div>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        {profiles.map(profile => {
          return (
            <div
              style={{
                flex: "0 0 25%",
                padding: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  backgroundColor: "#512783",
                  width: "210px"
                }}
              >
                <img className="about-profile-img" src={profile.image} />
                <div style={{ padding: 10, paddingLeft: 15 }}>
                  <div className="about-profile-name">{profile.name}</div>
                  <div className="about-profile-pos">{profile.position}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default AboutSection;
