import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MediaQueryContext = createContext(null);

export default function MyContext({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1024 });
  const [screenSize, setScreenSize] = useState("mobile");

  React.useEffect(() => {
    setScreenSize(isDesktop ? "desktop" : isTablet ? "tablet" : "mobile");
  }, [isTablet, isDesktop]);

  return (
    <MediaQueryContext.Provider value={{ screenSize }}>
      {children}
    </MediaQueryContext.Provider>
  );
}
