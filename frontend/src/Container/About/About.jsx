import React, { useEffect, useState } from 'react'
import './About.scss';
import { motion } from 'framer-motion'
import {urlFor , client} from '../../client'
import wrapper from '../../wrapper/wrapper';

const About = () => {
  
  
  const [abouts, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => {
        setAbout(data)
        console.log(data)
     })
  },[])

  return (
  

    <div id ="about" className='app__about'>
      <h2 style={{paddingTop : 31}} className='head-text'>I Know that <span>Good Apps</span><br /> Means <span>Good Business</span></h2>
    <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profiles-item'
            key={about.title}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop : 20}}>{about.title}</h2>
            <p className='p-text'style={{marginTop : 10}}>{about.description }</p>
            
        </motion.div>
      ))}

      </div>
      </div>
  )
}

export default wrapper(About, "about");