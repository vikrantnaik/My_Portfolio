import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import  wrapper  from '../../wrapper/wrapper';


const scaleVariant = {
  whileInView: {
    opacity: [0, 1],
    scale: [0, 1],
    transition :{
      duration: 1, ease : 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header  app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bedge">
          <div className="bedge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Vikrant</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Manual Tester</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-pic" />
        <motion.img
         whileInView={{ scale : [0, 1] }}
        transition={{ duration: 1, ease : 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />

    
      </motion.div>

      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView} 
       className="app__header-circles"
      >
        {[images.react, images.redux, images.javascript].map((circle , index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
        </div>
      ))}
      </motion.div>
    </div>
  );
};

export default wrapper(Header ,"home" );
