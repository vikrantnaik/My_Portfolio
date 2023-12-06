import React from "react";
import { NavigationDots, SocialMedia } from "../Components";

const wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Vikrant Naik</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default wrapper;
