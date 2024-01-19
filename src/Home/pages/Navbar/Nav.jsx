import React from "react";
import styles from "./Nav.module.css";

import { FaHome } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdCropPortrait } from "react-icons/md";

import { FaToggleOn } from "react-icons/fa";


import { Link } from "react-router-dom";



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
          <Link to='/'>
          <p className={styles.navicons}>
            <FaHome /> </p></Link>
            <Link to='/banner'>
          <p className={styles.navicons1}>
            <IoMan /> </p></Link>
            <Link to='/bio'>
            <p className={styles.navicons1}>
            <PiNotebook />
            </p></Link>
            <Link to='edu'>
            <p className={styles.navicons1}>
            <MdOutlineWorkOutline />
            </p>
            </Link>
            <Link to='/exp'>
            <p className={styles.navicons1}>
            <FaBlog />
            </p>
            </Link>
            <Link to='portfolio'>
            <p className={styles.navicons1}>
            <MdCropPortrait />

            </p></Link>
            <Link to='con'>
            <p className={styles.navicons1}>
            <BsFillTelephoneOutboundFill />
            </p></Link>
            <p className={styles.navicons1}>
            <FaToggleOn onClick={darkTheme} onDoubleClick={lightTheme} />
            </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
