import React from "react";
import styles from "./About.module.css"; // nhb nefhemhe 

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
       I am a react js Developer with a particular interest in making things simple and automating daily tasks.
       i try to keep up with security and best practices , and am always looking for new thing to learn . 
      </p>
    </main>
  );
}
