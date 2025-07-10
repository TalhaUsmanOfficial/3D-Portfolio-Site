/*
! Created On Wed July 09 1:07 AM 2025

! @author: Talha Usman
! Status: Developer
*/

import React from "react";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-neutral-900 flex justify-between items-center flex-wrap gap-5">
      <div className="text-neutral-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/TalhaUsmanOfficial"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/github.svg"
            alt="GitHub URL"
            className="w-1/2 h-1/2"
          />
        </a>
        <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="Twitter URL"
            className="w-1/2 h-1/2"
          />
        </div>
        <a
          href="https://www.instagram.com/talha_usman_official/"
          target="_blank"
          className="social-icon"
        >
          {/* <div> */}
          <img
            src="/assets/instagram.svg"
            alt="Instagram URL"
            className="w-1/2 h-1/2"
          />
          {/* </div> */}
        </a>
      </div>
      <p className="text-neutral-500">
        &copy; {new Date().getFullYear()} Talha Usman. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
