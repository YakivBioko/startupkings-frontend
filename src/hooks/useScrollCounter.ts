import React from "react";

export default function useScrollCounter(offset: number) {
  const [reached, setReached] = React.useState(false);
  React.useEffect(() => {
    const showTitle = () => setReached(window.scrollY > offset);
    window.addEventListener("scroll", showTitle);
    return () => {
      window.removeEventListener("scroll", showTitle);
    };
  }, [offset]);

  return reached;
}
