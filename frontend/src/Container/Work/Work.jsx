import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import wrapper from "../../wrapper/wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const workQuery = '*[_type == "works"]';

    client.fetch(workQuery).then((data) => {
      setWork(data);
    });
  }, []);

  return (
    <>
      <h2 style={{ paddingTop: 31 }} className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {work.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img" app__flex>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default wrapper(Work, "works");
