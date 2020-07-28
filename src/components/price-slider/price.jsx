import React from "react";
import styles from "./Price.module.css";

const Pricing = ({ priceInputValue, handlePricingSlide, getPricingData }) => {
  return (
    <div className={styles.pricing}>
      <div className={`${styles.pricingSlider} ${styles.centerContent}`}>
        <label className={styles.formSlider}>
          <div className={styles.sliderContent}>
            <span>Price Range</span>
            <span className={styles.pricingSliderValue}>
              {getPricingData()}/-
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            defaultValue={priceInputValue}
            onChange={handlePricingSlide}
          />
        </label>
      </div>
    </div>
  );
};

export default Pricing;
