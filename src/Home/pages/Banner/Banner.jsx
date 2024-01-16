import React, { useEffect } from "react";
import styles from "./Banner.module.css";

import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // Customize your AOS options here
    });
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.banneritems}>
          <div className={styles.banneritems1}>
            
            <p>+04 6545-9535-6515</p>
            <p>nairobi-designer@domain.com</p>
          </div>

          <div className={styles.banneritems1}>
            <p className={styles.banneritems1text}>EN</p>
            <p className={styles.banneritems1text1}>FR</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.about} data-aos="fade-right">
            <p className={styles.hello}>Hello, My name is</p>
            <p className={styles.nairobi}>Nairobi Gadot</p>
            <p className={styles.ui}>UI/UX Developer</p>
            <p className={styles.description}>
              I design and develop services for customers of all sizes,
              specializing in creating styilish, moderb websites,webservices and
              online stores
            </p>
            <button className={styles.button}>DOWNLOAD CV</button>
          </div>
          <div className={styles.image}>
            {/* <img src="../../../assets/nairobi.png" alt="logo" /> */}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
