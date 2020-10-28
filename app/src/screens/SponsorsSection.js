import React from "react";

import Microsoft from "../assets/sponsors/msft.png";
import Google from "../assets/sponsors/google.png";
import Autodesk from "../assets/sponsors/autodesk.png";
import WeightWatchers from "../assets/sponsors/weight-watchers.png";
import Lyft from "../assets/sponsors/lyft.png";
import Twilio from "../assets/sponsors/twilio.png";
import InterviewCake from "../assets/sponsors/interview-cake.png";
import COSE from "../assets/sponsors/cose.png";
import COB from "../assets/sponsors/cob.png";
import Notivize from "../assets/sponsors/notivize.png";
import Pathrise from "../assets/sponsors/pathrise.png";
import Desmos from "../assets/sponsors/desmos.png";
import Walmart from "../assets/sponsors/walmart.png";
import Allbirds from "../assets/sponsors/allbirds.png";
import StickerMule from "../assets/sponsors/sticker-mule.png";
import GogoSqueez from "../assets/sponsors/gogo-squeez.png";
import Bare from "../assets/sponsors/bare.png";
import Macys from "../assets/sponsors/macys.png";
import Bobos from "../assets/sponsors/bobos.png";
import Guru from "../assets/sponsors/guru.png";
import YerbaMate from "../assets/sponsors/guayaki-yerba-mate.png";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Microsoft",
      logo: Microsoft,
    },
    {
      name: "Google",
      logo: Google,
    },
    {
      name: "Autodesk",
      logo: Autodesk,
    },
    {
      name: "Weight Watchers",
      logo: WeightWatchers,
    },
    {
      name: "Lyft",
      logo: Lyft,
    },
    {
      name: "Twilio",
      logo: Twilio,
    },
    {
      name: "Interview Cake",
      logo: InterviewCake,
    },
    {
      name: "SFSU College of Science and Engineering",
      logo: COSE,
    },
    {
      name: "SFSU Lam Family College of Business",
      logo: COB,
    },
    {
      name: "Notivize",
      logo: Notivize,
    },
    {
      name: "Pathrise",
      logo: Pathrise,
    },
    {
      name: "Desmos",
      logo: Desmos,
    },
    {
      name: "Walmart",
      logo: Walmart,
    },
    {
      name: "Allbirds",
      logo: Allbirds,
    },
    {
      name: "StickerMule",
      logo: StickerMule,
    },
    {
      name: "Gogo Squeez",
      logo: GogoSqueez,
    },
    {
      name: "Bare",
      logo: Bare,
    },
    {
      name: "Macys",
      logo: Macys,
    },
    {
      name: "Bobos",
      logo: Bobos,
    },
    {
      name: "Guru Organic Energy",
      logo: Guru,
    },
    {
      name: "Guayaki Yerba Mate",
      logo: YerbaMate,
    },
  ];

  return (
    <div style={{ margin: "60px 0" }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{ textAlign: "left",   font: "normal normal bold 45px/74px \"Montserrat\"", letterSpacing: '0', color: '#000', opacity: 1, backgroundColor:"#d7b5ff", margin:'0', padding:'0', lineHeight:'45px' }}>Sponsors</span>
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '20px' }}>
          <div style={{ maxWidth: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {sponsors.map(sponsor => (
              <div key={sponsor.name} style={{padding:'20px'}}>
                <div>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{ height: 120, width: "auto", }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SponsorsSection;