import { useEffect, useState } from "react";
import "./Scroll.css";

function Scroll() {
const [isVisible, setIsVisible] = useState(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const toggleVisibility = () => {
  if(window.pageYOffset > 800) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

  return(
    <>
    <button onClick={scrollToTop} className={isVisible ? "scroll" : "scroll_off"}>^</button>
    </>
  )
}

export default Scroll;