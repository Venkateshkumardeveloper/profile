import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {

    const data=[{
        title: "Sr. Front-end Engineer",
        captions: "Google | Remote",
        date:"Feb2021-Present",
        button:'Full Time',
        subtitle:'Google LLC',
        text:`Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.`

    },
    {
        title: "Visual Designer",
        captions: "Radian | Remote",
        date:"Feb2021-Present",
        button:'Part Time',
        subtitle:'Radian IT',
        text:`Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor. Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua..`

    },
    {
        title: "Animation Artistr",
        captions: "IbThemes | Remote",
        date:"Jan 2019 - Present",
        button:'Full Time',
        subtitle:'IB Themes',
        text:`Consectetur adipisicing elit,lorem ipsum dolor sit amet, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.`

    }
]
  return (
    <>
      <div className={styles.main}>
        <h3 style={{fontSize:"2.8rem"}}>Experience</h3>
        {data.map((item)=>(
            <div className={styles.experiencecard} data-aos="fade-up">
                <div className={styles.experiencedetails}>
                <h4 className={styles.title}>{item.title}</h4>
                <i>{item.captions}</i>
                <p>{item.date}</p>
                <button className={styles.button}>{item.button}</button>
                </div><p className={styles.divider}>|</p>
                <div className={styles.experiencedetails2}>
                <h4 className={styles.title}>{item.subtitle}</h4>
                <p>{item.text}</p>
                </div>
            </div>

        ))}
      </div>
    </>
  );
};

export default Experience;
