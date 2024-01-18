import React from "react";
import styles from "./Myportfolio.module.css";

import image1 from "../../../assets/m-portfolio-1.jpg";
import image2 from "../../../assets/m-portfolio-2 (1).jpg";
import image3 from "../../../assets/m-portfolio-3.jpg";
import image4 from "../../../assets/m-portfolio-4.jpg";
import image5 from "../../../assets/m-portfolio-5.jpg";
import image6 from "../../../assets/m-portfolio-6.jpg";
import image7 from "../../../assets/m-portfolio-7.jpg";
import image8 from "../../../assets/m-portfolio-8.jpg";
import image9 from "../../../assets/m-portfolio-9.jpg";

import { useState } from "react";


import blog1 from '../../../assets/blog-4.jpg'
import blog2 from '../../../assets/blog-2.jpg'
import blog3 from '../../../assets/blog-3.jpg'
import blog4 from '../../../assets/blog-1.jpg'

const Myportfolio = () => {
  const [hello, setHello] = useState(false);

  const item1 = () => {
    setHello(true);
    console.log(hello);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.portfolio}>
          <h3 style={{ fontSize: "2rem" }}>My Portfolio</h3>
          <div className={styles.nav}>
            <p>All</p>
            <p>Branding</p>
            <p>Photography</p>
            <p>Fashion</p>
            <p>Product</p>
          </div>
          <div>
            {" "}
            {hello ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <img
                  src={image1}
                  alt="logo"
                  style={{ height: "20rem", width: "50%" }}
                />
              </div>
            ) : null}
          </div>

          <div className={styles.gridcontainer}>
            <div className={styles.item1} data-aos="fade-right" onClick={item1}>
              <img
                style={{ width: "90%", height: "90%" }}
                src={image1}
                alt=""
              />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>

            <div className={styles.item2} data-aos="fade-right">
              <img
                style={{ width: "90%", height: "70%" }}
                src={image2}
                alt=""
              />

              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item3} data-aos="fade-right">
              <img src={image3} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item4} data-aos="fade-right">
              <img
                style={{ width: "90%", height: "70%" }}
                src={image4}
                alt=""
              />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item5} data-aos="fade-right">
              <img src={image5} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item6} data-aos="fade-right">
              <img src={image6} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item7} data-aos="fade-right">
              <img src={image7} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item8} data-aos="fade-right">
              <img src={image8} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
            <div className={styles.item9} data-aos="fade-right">
              <img src={image9} alt="" />
              <div className={styles.imagetext}>
                <h4>Bottle Illustration</h4>
                <p>figma shoot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blog}>
        <div>
          <h3  style={{ fontSize: "2rem" }}>Latest Blog</h3>
        </div>

        <div className={styles.blogcontainer}>
          <div className={styles.blogitem}  data-aos="fade-right">
            <img src={blog1} alt="" />
            <p>29/FEB/2020 - BY ALEX</p>
            <h3>Five Solid Evidences Attending Design Is Good For Your Career Development.</h3>
          </div>
          <div className={styles.blogitem}  data-aos="fade-right">
          <img src={blog2} alt="" />
          <p>05/JAN/2020 - BY SMITH</p>
          <h3>Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure</h3>
          </div>
          <div className={styles.blogitem}  data-aos="fade-left">
            <img src={blog3} alt="" />
            <p>12/AUG/2020 - BY RIO</p>
            <h3>I Will Tell You The Truth About Design In The Next 60 Seconds.</h3>
          </div>
          <div className={styles.blogitem}  data-aos="fade-left">
            <img src={blog4} alt="" />
            <p>22/JUN/2020 - BY SVEI</p>
            <h3>What You Know About Design And What You Don't Know About Design.</h3>
          </div>
        </div>

      </div>
    </>
  );
};

export default Myportfolio;
