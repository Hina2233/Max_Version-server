import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../assets/Wen-Banner-02.png";
import { motion } from "framer-motion";

const UserHome = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img 
          src={Banner} 
          alt="Banner" 
          className="max-w-banner responsive-img"
        />
      </div>
      <div className="welcomeMessage">
        <motion.h1 
          className="main-heading"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Pizza Heaven!
        </motion.h1>
        <motion.p 
          className="sub-heading"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Choose your way to pizza perfection.
        </motion.p>
      </div>
      <div className="buttonsContainer">
        <Link to="/Customize" className="pizza-button">
          Make Your Own Pizza
        </Link>
        <Link to="/menu" className="flavours-button">
          Select from Our Flavours
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
