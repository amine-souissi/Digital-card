import React from "react";
import styles from "./Footer.module.css";
import githubLogo from "../assets/Github-logo.png";
import facebooklogo from "../assets/facebooklogo.png" ;
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"   // hezni l  site edheka directement directement directement 
          rel="noopener noreferrer"  // nhb nefhemhe 
          className={styles.links}
          href="https://github.com/amine-souissi"
        >
          <img
            src={githubLogo}
            alt="Click to open franky's github"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://www.facebook.com/profile.php?id=100005918025041"  // lien tee site li nty besh temshylou 
        > 
          <img
            src={facebooklogo}
            alt="Click to open franky's facebook"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}
