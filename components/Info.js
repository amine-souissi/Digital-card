import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/frankii.jpg";
import emailLogo from "../assets/Email-logo.png";
import linkendinLogo from "../assets/LinkedIn-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="amin"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>franky</h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.small}>(website coming soon)</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="aminesouissi@isticbc.org"
          >
            <img className={styles.icons} src={emailLogo} alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/franky/"
          >
            <img className={styles.icons} src={linkendinLogo} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}