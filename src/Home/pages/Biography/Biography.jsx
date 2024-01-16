import React, { useEffect } from "react";
import styles from "./Biography.module.css";
import AOS from "aos";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

import { FcSmartphoneTablet } from "react-icons/fc";
import { IoDesktopSharp } from "react-icons/io5";
import { GiArcheryTarget } from "react-icons/gi";




const Biography = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // Customize your AOS options here
    });
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bio}>
          <div data-aos="fade-up" className={styles.mainimage} >
            <div className={styles.image}>
            <div className={styles.imagelogo}>
              <i className={styles.icons}>
                {" "}
                <FaFacebook />
              </i>
            </div>
            <div className={styles.imagelogo1}>
              <i className={styles.icons}>
                {" "}
                <FaTwitterSquare />
              </i>
            </div>
            <div className={styles.imagelogo2}>
              <i className={styles.icons}>
                {" "}
                <FaInstagram />
              </i>
            </div>
            <div className={styles.imagelogo3}>
              <i className={styles.icons}>
                {" "}
                <FaLinkedinIn />
              </i>
            </div>

            <div className={styles.imagelogo4}>
              <i className={styles.icons}>
                {" "}
                <FaPinterestP />
              </i>
            </div>
            </div>
            
          </div>
          <div className={styles.info} >
            <p>Ux/Ui Designer</p>
            <h3>Nairobi Gadot</h3>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.biography}>
          <h3 className={styles.biohello}>Biography</h3>
          <p>
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences
          </p>
          <p>
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </p>

          <div className={styles.details}>
            <div className={styles.details1}>
              <ul type="none">
                <li>
                  <label style={{ fontWeight: "900" }}>Name: </label>
                  <span>Nairobi Gadot</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Birthday: </label>
                  <span>4th April 1994</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Age: </label>
                  <span>26 years</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Address: </label>
                  <span>San Francisco</span>
                </li>
              </ul>
            </div>
            <div className={styles.details2}>
              <ul type="none">
                <li>
                  <label style={{ fontWeight: "900" }}>Phone: </label>
                  <span>(+38) 469 2344 2364</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Email: </label>
                  <span>info@domainname.com</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Skype: </label>
                  <span>nairob.40</span>
                </li>
                <li>
                  <label style={{ fontWeight: "900" }}>Freelance: </label>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.what}>
        <div className={styles.line}></div>

        <div className={styles.whatido}>
          <div className={styles.ido}>
            <h3 className={styles.biowhat}>What I do?</h3>
          </div>
          <div className={styles.card} data-aos="fade-right">
            <div className={styles.carddetails}>
              <i>< FcSmartphoneTablet  className={styles.whaticons} /></i>
              <div className={styles.whaticondetails}>
                <h5 style={{fontSize:"1.25rem"}}>WebDesign</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className={styles.carddetails}>
              <i><IoDesktopSharp className={styles.whaticons} /></i>
              <div className={styles.whaticondetails}>
                <h5 style={{fontSize:"1.25rem"}}>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className={styles.carddetails}>
              <i><GiArcheryTarget className={styles.whaticons} /></i>
              <div className={styles.whaticondetails}>
                <h5 style={{fontSize:"1.25rem"}}>Seo Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                       eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.awards}>
      <div className={styles.line}></div>

      <div className={styles.awardscontainer}>
        <div><h3 style={{fontSize:'2.5rem'}}>Awards</h3></div>
        <div className={styles.awardsdetails} data-aos="fade-right">
          <div className={styles.awarditem}>
            <div className={styles.awardlogo}></div>
            <div className={styles.awardtext}>
            <h6 style={{fontSize:'1.2rem'}}>Creative Designer</h6>
            <p>Site of the day</p>
            </div>
          </div>
          <div className={styles.awarditem}>
          <div className={styles.awardlogo1}></div>
            <div className={styles.awardtext}>
            <h6 style={{fontSize:'1.2rem'}}>Yearly Best Performer</h6>
            <p>Site of the day</p>
            </div>
            
          </div>
          <div className={styles.awarditem}>
          <div className={styles.awardlogo2}></div>
            <div className={styles.awardtext}>
            <h6 style={{fontSize:'1.2rem'}}>Best Learner Award</h6>
            <p>Site of the day</p>
            </div>
          </div>
          
        </div>
      </div>


      </div>
    </>
  );
};

export default Biography;
