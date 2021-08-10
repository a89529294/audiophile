import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MediaQueryContext = createContext(null);

export default function MyContext({ children }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 76rem)" });
  const isTablet = useMediaQuery({ query: "(min-width: 30rem)" });
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
