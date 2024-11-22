import React from "react";
import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer>
      <img width="120px" src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
