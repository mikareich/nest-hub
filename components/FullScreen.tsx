import { useEffect } from "react";

const Fullscreen = function () {
  const toggleFullscreen = () =>
    typeof window !== "undefined" && window.document.fullscreenElement
      ? // Exit fullscreen mode
        window.document.exitFullscreen()
      : // Enter fullscreen mode
        window.document.documentElement.requestFullscreen();

  const keyboardShortcuts = ["f", "F"];

  useEffect(() => {
    window.addEventListener("dblclick", toggleFullscreen);
    window.addEventListener(
      "keydown",
      ({ key }) => keyboardShortcuts.includes(key) && toggleFullscreen()
    );
  }, []);

  return null;
};

export default Fullscreen;
