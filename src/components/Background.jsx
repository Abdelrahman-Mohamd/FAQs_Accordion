import desktopBackImg from "../assets/images/background-pattern-desktop.svg";
import mobileBackImg from "../assets/images/background-pattern-mobile.svg";

import { useEffect } from "react";
import { useState } from "react";

function Background() {
  let [browserWindow, setBrowserWindow] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setBrowserWindow(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <img
      src={browserWindow <= 375 ? mobileBackImg : desktopBackImg}
      alt="Background"
      className="w-[100%]"
    />
  );
}
export default Background;
