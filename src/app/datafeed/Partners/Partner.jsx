import React from "react";
import Image from "next/image";
import "./partner.css";

import AirBnb from "@/assets/Airbnb.svg";
import Dropbox from "@/assets/Dropbox.svg";
import Reddit from "@/assets/Reddit.svg";
import Spotify from "@/assets/Spotify.svg";
import Twitch from "@/assets/Twitch.svg";

const imagData = [
  { id: 1, img: AirBnb },
  { id: 2, img: Dropbox },
  { id: 3, img: Reddit },
  { id: 4, img: Spotify },
  { id: 5, img: Twitch },
];

// PARTNER AND PARTNERS ARE TIGHTLY COUPLED AND CLOSELY REPLATED TO EACH OTHER HENCE IN THE SAME FILE. ALSO SHOWS THE CONCEPT OF PROPS

function Partners() {
  return (
    <div className="partners-container">
      <h1>Our customers</h1>
      <div className="partners">
        {imagData.map((partner) => (
          <Partner key={partner.id} partner={partner.img} />
        ))}
      </div>
    </div>
  );
}
function Partner({ partner }) {
  return <Image className="partner" src={partner} />;
}

export default Partners;
