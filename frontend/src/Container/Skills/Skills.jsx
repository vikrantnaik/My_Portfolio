import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import wrapper from "../../wrapper/wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../Constants";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experiance</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] ,  scale : [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgraoundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] ,  scale : [0, 1]  }}
          transition={{ duration: 0.5 }}
          // whileHover={{ scale: 1, ease: "easeInOut" }}
          className="app__experiance-cotainer"
        >
          <div className="app__exp-title">
            <h1>Tata Consultancy Services</h1>
            <h3>Manual Tester</h3>
          </div>
          <div className="app__experiance-comapanyLogo app__flex">
            <img src={images.tcs} alt="company-logo" />
          </div>
          <p className="app__exp-disc p-text">
             As a Software Testing Specialist, I take pride in ensuring the
            highest quality standards for software applications. My attention to
            detail and comprehensive approach to testing enable me to identify
            and resolve potential issues, contributing to the delivery of
            reliable and robust products.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default wrapper(Skills, "skills");
