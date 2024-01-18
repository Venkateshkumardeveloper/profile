import React from "react";
import styles from "./Eduaction.module.css";

const Education = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.education}>
          <h3 className={styles.educationtitle}>Education & Skills</h3>
          <div className={styles.educationdetails}>
            <div className={styles.educationbox} data-aos="fade-up">
              <div className={styles.educationboxdetails}>
                <p>2018-2020</p>
                <h4>Ph.D in Horriblensess</h4>
                <p>University Of Evil Doing</p>
              </div>
              <div className={styles.educationboxdetails}>
                <p>2013-2016</p>
                <h4>Bsc. in Computer Science</h4>
                <p>World University</p>
              </div>
              <div className={styles.educationboxdetails}>
                <p>2010-2012</p>
                <h4>Graphic Artist Training</h4>
                <p>Graphic Master Institute</p>
              </div>
            </div>
            <div className={styles.educationinfo} data-aos="fade-up">
              <div className={styles.educationtech}>
                <span className={styles.number}>92%</span>
                <div className={styles.educationpercentage}>
                  <h6 className={styles.text}>HTML</h6>
                  <div className={styles.mainpercentage}>
                    <div className={styles.percentage}></div>
                    <div className={styles.percentage1}></div>
                  </div>
                </div>
              </div>
              <div className={styles.educationtech}>
                <span className={styles.number}>85%</span>
                <div className={styles.educationpercentage}>
                  <h6 className={styles.text}>React Js</h6>
                  <div className={styles.mainpercentage}>
                    <div className={styles.percentage}></div>
                    <div className={styles.percentage1}></div>
                  </div>
                </div>
              </div>
              <div className={styles.educationtech}>
                <span className={styles.number}>90%</span>
                <div className={styles.educationpercentage}>
                  <h6 className={styles.text}>Vue Js</h6>
                  <div className={styles.mainpercentage}>
                    <div className={styles.percentage}></div>
                    <div className={styles.percentage1}></div>
                  </div>
                </div>
              </div>
              <div className={styles.educationtech}>
                <span className={styles.number}>80%</span>
                <div className={styles.educationpercentage}>
                  <h6 className={styles.text}>Ui/Ux</h6>
                  <div className={styles.mainpercentage}>
                    <div className={styles.percentage}></div>
                    <div className={styles.percentage1}></div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
