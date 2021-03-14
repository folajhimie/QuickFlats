import React from "react";
import HeroBox from "../components/Herobox/herobox.component";
import Services from "../components/Services/services.component";

const HomePage = () => {
  window.onscroll = function () {
    var y = window.pageYOffset;
    if (y > 200) {
      document.getElementById("c-nav").classList.add("nav-scroll");
      document.getElementById("logo").classList.remove("hide");
    } else {
      document.getElementById("logo").classList.add("hide");
      document.getElementById("c-nav").classList.remove("nav-scroll");
    }
  };
  return (
    <div>
      <HeroBox />
      <Services />
    </div>
  );
};

export default HomePage;
