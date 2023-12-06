import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../Constants";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "works", "contact"].map((items) => (
          <li className="app__flex p-text" key={`links-${items}`}>
            <div />
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt1 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "contact", "work", "skills"].map((items) => (
                <li key={items}>
                  <a href={`#${items}`} onClick={() => setToggle(false)}>
                    {items}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
