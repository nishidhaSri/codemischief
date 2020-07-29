import React, { useState, useEffect } from "react";
import logo from "../../assets/harris-regional-hospital-emergency-service-health-care-medicine-png-favpng-HqLcsJV59fMpA0c2RF5Qt8zXP@2x.png";
import Button from "../../components/button/button";
import styles from "./Main.module.css";
import Modal from "../../components/Modal/modal";
import Progress from "../../components/stepsProgress/progress";
import RealTime from "../../components/realTime/realTime";
import Pricing from "../../components/price-slider/price";
import styles1 from "../../components/realTime/RealTime.module.css";
import location from "../../assets/ic_my_location_48px.svg";
import dateImg from "../../assets/calendar-60.png";
import Checkbox from "../../components/checkbox/checkbox";
import { hospitals } from "./fakeData";
import Card from "../../components/card/card";
import DateSelector from "../../components/date-selector/dateSelector";

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [priceInputValue, setPriceInputValue] = useState(10);
  const [cityValue, setCityValue] = useState("Mumbai");
  const [responsive, setResponsive] = useState(false);
  const [filters, setFilters] = useState(false);
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  useEffect(() => {
    if (width < 500) {
      setResponsive(true);
    }
  }, [width]);

  const priceInput = {
    0: "400",
    1: "500",
    2: "600",
    3: "700",
    4: "800",
    5: "900",
    6: "1000",
    7: "1100",
    8: "1200",
    9: "1300",
    10: "1400",
  };

  const showFilters = () => {
    setFilters(!filters);
    console.log(filters, responsive);
  };

  const buttonClick = (bool) => {
    setShowLogin(bool);
  };

  const handlePricingSlide = (e) => {
    setPriceInputValue(e.target.value);
  };

  const getPricingData = () => {
    return priceInput[priceInputValue];
  };
  const cities = ["Mumbai", "Pune", "Chennai", "Kochi"];
  const handleClickCity = (event) => {
    setCityValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <Button
          className={styles.button}
          text="Login / Sign Up"
          onClick={() => buttonClick(true)}
        />
      </div>
      {showLogin && <Modal onClose={() => buttonClick(false)} />}
      <div className={styles.progress}>
        <Progress step={1} />
      </div>
      <div className={styles.context}>
        <div className={styles.stats}>
          <RealTime />
          <div
            onClick={showFilters}
            style={
              responsive
                ? {
                    cursor: "pointer",
                    border: "2px solid #707070",
                    padding: 20,
                    borderRadius: 15,
                    boxShadow: "0px 8px 11px #00000029",
                    margin: "30px 0",
                  }
                : null
            }
            className={styles.filterHeading}
          >
            {responsive ? (
              <React.Fragment>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
                {"  "}Click For
              </React.Fragment>
            ) : (
              ""
            )}{" "}
            Filters
          </div>

          <div
            style={responsive ? (!filters ? { display: "none" } : {}) : {}}
            className={styles1.root}
          >
            <Pricing
              priceInputValue={priceInputValue}
              handlePricingSlide={handlePricingSlide}
              getPricingData={getPricingData}
            />
            <hr style={{ width: "100%" }} />
            <div className={styles.city}>
              <div className={styles.cityContent}>
                <img
                  style={{ width: 22, height: 22 }}
                  alt="maps"
                  src={location}
                />
                <span>City</span>
              </div>
              <div className={styles.cityButtons}>
                {cities.map((city, i) => (
                  <Button
                    key={i}
                    value={city}
                    onClick={handleClickCity}
                    text={city}
                    className={`${cityValue === city ? styles.active : null} ${
                      styles.cityButton
                    }`}
                  />
                ))}
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className={styles.city}>
              <div className={styles.cityContent}>
                <img src={dateImg} alt="date"></img>
                <span>Date</span>
              </div>
              {/* <DatePicker onChange={onChangeDate} value={date} /> */}
              <DateSelector />
            </div>
            <hr style={{ width: "100%" }} />
            <div className={styles.city}>
              <div className={styles.cityContent}>
                <span
                  style={{ color: "#5032D5", fontSize: 22 }}
                  className={`fa fa-star ${styles.star}`}
                ></span>
                <span>Rating</span>
              </div>
              <div className={styles.rating}>
                <span
                  className={`fa fa-star-o ${styles.star} ${styles.starOutlind}`}
                ></span>
                <span
                  className={`fa fa-star-o ${styles.star} ${styles.starOutlind}`}
                ></span>
                <span
                  className={`fa fa-star-o ${styles.star} ${styles.starOutlind}`}
                ></span>
                <span
                  className={`fa fa-star-o ${styles.star} ${styles.starOutlind}`}
                ></span>
                <span
                  className={`fa fa-star-o ${styles.star} ${styles.starOutlind}`}
                ></span>
                <span>& above.</span>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className={styles.city}>
              <div className={styles.cityContent}>
                <span style={{ paddingLeft: 22 }}>Speciality</span>
              </div>
              <div style={{ paddingLeft: 22 }}>
                <Checkbox
                  id={1}
                  name="first"
                  value="first"
                  label="Viral Care"
                />

                <Checkbox
                  id={1}
                  name="second"
                  value="second"
                  label="Cardiology"
                />

                <Checkbox
                  id={1}
                  name="third"
                  value="third"
                  label="Pulmonology"
                />

                <Checkbox
                  id={1}
                  name="fourth"
                  value="fourth"
                  label="Neurology"
                />

                <Checkbox id={1} name="fifth" value="fifth" label="Urology" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.filterHeading}>Showing results for today</div>

          {hospitals
            .filter((hospital) => hospital.city === cityValue)
            .map((hospital) => (
              <Card price={getPricingData()} key={hospital.id}>
                {hospital}
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
