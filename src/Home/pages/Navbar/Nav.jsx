import React from "react";
import styles from "./Nav.module.css";

import { FaHome } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaToggleOn } from "react-icons/fa";




const Nav = () => {

    function darkTheme(){
        document.body.style.background="lightblue";
    }
    function lightTheme(){
        document.body.style.background="white";


    }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.navitems}>
          <p>N</p>
        </div>
        <div className={styles.navdetails}>
          <p className={styles.navicons}>
            <FaHome /> </p>
          <p className={styles.navicons1}>
            <IoMan /> </p>
            <p className={styles.navicons1}>
            <PiNotebook />
            </p>
            <p className={styles.navicons1}>
            <MdOutlineWorkOutline />
            </p>
            <p className={styles.navicons1}>
            <FaBlog />
            </p>
            <p className={styles.navicons1}>
            <BsFillTelephoneOutboundFill />
            </p>
            <p className={styles.navicons1}>
            <FaToggleOn onClick={darkTheme} onDoubleClick={lightTheme} />
            </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
