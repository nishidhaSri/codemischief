import React from "react";

import styles from "./RealTime.module.css";

const data = [26, 23, 28, 7];

const RealTime = () => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <span>Realtime bed availability</span>
      </div>
      <div className={styles.barContainer}>
        {data.map((number, i) => {
          let x = (number / 30) * 100;
          return (
            <div key={i} className={styles.totalBar}>
              <div className={styles.bar}>
                <div className={styles.active} style={{ height: x }}></div>
              </div>
              <div className={styles.number}>{number}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RealTime;
