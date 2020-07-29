import React, { useState, useEffect } from "react";
import styles from "./Date.module.css";

const DateSelector = () => {
  //   console.log(new Date());
  //   const d = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [selectedDate, setSelectedDate] = useState(null);

  //   const addDate = () => {
  //     d.setDate(d.getDate() + 1);
  //     console.log(d);
  //     setDate(d);
  //     // setDate({ number: d.getDate() });
  //   };

  //   const subtractDate = () => {
  //     // const tmp = new Date();
  //     // if (d.getDate() !== tmp.getDate()) {
  //     //   d.setDate(d.getDate() - 1);
  //     //   setDate({ number: d.getDate(), month: d.getMonth() });
  //     // } else {
  //     //   alert("Sorry can't go back to past!");
  //     // }
  //   };

  //   const x = new Date();

  useEffect(() => {
    // console.log("hit");
    setDate();
  }, []);

  const setDate = (newDate) => {
    const d = newDate || new Date();
    setSelectedDate(d);
  };

  const getPreviousDate = () => {
    // const { selectedDate } = this.state

    const currentDayInMilli = new Date(selectedDate).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const previousDayInMilli = currentDayInMilli - oneDay;
    const previousDate = new Date(previousDayInMilli);

    setSelectedDate(previousDate);
  };

  const getNextDate = () => {
    // const { selectedDate } = this.state

    const currentDayInMilli = new Date(selectedDate).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const nextDayInMilli = currentDayInMilli + oneDay;
    const nextDate = new Date(nextDayInMilli);

    setSelectedDate(nextDate);
  };

  return (
    <div className={styles.root}>
      <div className={styles.date}>
        <i
          onClick={getPreviousDate}
          className={`fa fa-arrow-circle-o-left ${styles.arrows}`}
          style={{ cursor: "pointer" }}
        ></i>
        <div className={styles.dateDiv}>
          <span>{selectedDate !== null ? selectedDate.getDate() : ""}</span>
          <span>
            {selectedDate !== null ? months[selectedDate.getMonth()] : ""}
          </span>
        </div>
        <i
          onClick={getNextDate}
          className={`fa fa-arrow-circle-o-right ${styles.arrows}`}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div className={styles.info}>36 Beds available</div>
      <div className={styles.more}>more</div>
    </div>
  );
};

export default DateSelector;
