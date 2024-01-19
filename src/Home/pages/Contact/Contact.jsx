import React from 'react'
import styles from './Contact.module.css'

import MapComponent from '../MapComponent/MapComponent'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";


const Contact = () => {
    const requiredLocation = [12.91112070679991, 77.60112375486415]; // Replace with your desired coordinates

  return (
   <>
    <div className={styles.main}>

        <div className={styles.contact} data-aos="fade-right">
            <div className={styles.contactitem1}>
                <h3>What’s your story? Get in touch</h3>
                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                <h4>123 Stree New York City , United States Of America 750065.</h4>
                <h4>support@domain.com</h4>
                <h4>+044 9696 9696 3636</h4>
            </div>
            <div className={styles.contactitem1}>
                <h4>Say Something</h4>
                <form action="">
                    <input type="text" placeholder='Full Name' style={{height:'2rem', width:'50%'}} />
                    <input type="email" placeholder='Email' style={{height:'2rem', width:'40%'}} />
                    <input type="text" placeholder='Subject' style={{height:'2rem', width:'90%'}}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type comment' style={{width:'90%',margin:'3px'}}></textarea>
                    <button>Send Message</button>
                </form>
            </div>
            <div className={styles.map}>
                
            <MapComponent location={requiredLocation} data-aos="fade-right" />
            </div>
    
            

        </div>
        <div className={styles.footer}>
            <div className={styles.footerlogo}>
                <i className={styles.footerlogo1}><FaFacebookF /></i>
                <i className={styles.footerlogo1}> <FaTwitter/></i>
                <i className={styles.footerlogo1}><FaInstagram /></i>
                <i className={styles.footerlogo1}><FaLinkedin /></i>
                <i className={styles.footerlogo1}><FaPinterestP />
</i>
            </div>
            <div className={styles.footertext}>
            © 2024 copyright ib-themes all right reserved
            </div>

        </div>

    </div>
    </>
  )
}

export default Contact;