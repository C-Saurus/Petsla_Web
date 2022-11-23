import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={style.backToTopBtn}
      onClick={scrollToTop}
      style={{ opacity: isVisible ? "0.7" : "0" }}
    >
      <i class="fas fa-chevron-up" style={{ color: "#fff" }}></i>
    </div>
  );
}
