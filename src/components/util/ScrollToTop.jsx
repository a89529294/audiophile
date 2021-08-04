import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ScrollToTop() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default ScrollToTop;
