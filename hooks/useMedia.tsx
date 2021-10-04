import { useEffect, useState } from "react";

export default function useMedia() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const resizeWindow = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });
  return width;
}
