import React from 'react'
import { BsGithub, BsInstagram ,BsLinkedin} from 'react-icons/bs'



const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/vikrantnaik"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/vikr_45/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/vikrantnaik45/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia