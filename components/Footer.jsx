import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import {GiMusicalNotes} from "react-icons/gi";
import {HiMusicNote} from "react-icons/hi";
import {SlMusicToneAlt} from "react-icons/sl"

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Instruments Bazaar All Rights Reserved</p>
      <p className="icons">
        <HiMusicNote /> <SlMusicToneAlt /> <GiMusicalNotes />
      </p>
    </div>
  );
};

export default Footer;
