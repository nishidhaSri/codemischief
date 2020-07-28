import React from "react";
import styles from "./Progress.module.css";

const Progress = ({ step }) => {
  return (
    <div className={styles.root}>
      <div className={`${step >= 1 ? styles.activeStep : ""}  ${styles.step}`}>
        <div className={styles.solo}>
          <div className={styles.number}>
            <span>1</span>
          </div>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.stepText}>Search</div>
      </div>
      <div className={`${step >= 2 ? styles.activeStep : ""}  ${styles.step}`}>
        <div className={styles.solo}>
          <div className={styles.number}>
            <span>2</span>
          </div>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.stepText}>Select</div>
      </div>
      <div className={`${step >= 3 ? styles.activeStep : ""}  ${styles.step}`}>
        <div className={styles.solo}>
          <div className={styles.number}>
            <span>3</span>
          </div>
          <div className={styles.progress}></div>
        </div>
        <div className={styles.stepText}>Choose</div>
      </div>
      <div className={`${step >= 4 ? styles.activeStep : ""}  ${styles.step}`}>
        <div className={styles.solo}>
          <div className={styles.number}>
            <span>4</span>
          </div>
        </div>
        <div className={styles.stepText}>Book</div>
      </div>
    </div>
  );
};

export default Progress;
