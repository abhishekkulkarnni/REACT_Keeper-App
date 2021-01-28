import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {currentYear} by Abhishek Kulkarni.</p>
    </footer>
  );
}

export default Footer;
