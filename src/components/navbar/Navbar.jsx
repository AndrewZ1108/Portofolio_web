/** @format */

import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}>
          Drew Dev
        </motion.span>
        <div className='socialmedia'>
          <a
            href='https://www.instagram.com/andrewzenrico11/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src='/instagram.png' alt='Instagram' />
          </a>
          <a
            href='https://www.facebook.com/share/6z4pyVDnDJC2WTof/?mibextid=JRoKGi'
            target='_blank'
            rel='noopener noreferrer'>
            <img src='/facebook.png' alt='Facebook' />
          </a>
          <a
            href='https://twitter.com/andrewzenrico11'
            target='_blank'
            rel='noopener noreferrer'>
            <img src='/twitter.png' alt='Twitter' />
          </a>
          <a
            href='https://www.linkedin.com/in/andrew-enrico-andhyka-29134123b/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src='/linkedin.png' alt='LinkedIn' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
