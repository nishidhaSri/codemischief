import React, { useState } from "react";
import Button from "../button/button";
import styles from "./card.module.css";
import image from "../../assets/image.png";
import image1 from "../../assets/logo-apollo.png";
import image2 from "../../assets/photo.svg";
import image3 from "../../assets/image1.png";

const Card = (props) => {
  const [showBeds, setShowBeds] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  const [type, setType] = useState("");
  const { children, price } = props;
  const handleShowBeds = () => {
    setShowBeds(!showBeds);
    setShowAnime(true);
  };
  const handleShowDescription = (e) => {
    setShowDescription(!showDescription);
    e.target.alt !== undefined && setType(e.target.alt);
    setShowAnime(false);
  };

  const arr = children.beds.filter((bed) => bed.price <= price);

  return (
    <React.Fragment>
      {children ? (
        <div className={styles.root}>
          <div className={styles.hospital}>
            <img className={styles.image} alt="hosptials" src={image} />
            <div className={styles.content}>
              <div className={styles.heading}>
                <div className={styles.megaTitle}>
                  <div className={styles.title}>{children.hospitalName}</div>
                  <div className={styles.subText}>
                    <i className="fa fa-hospital-o" aria-hidden="true"></i>
                    <span>
                      Amet nostrud est veniam sit velit aliquip nulla cupidatat
                      ullamco voluptate velit officia.
                    </span>
                  </div>
                </div>
                <div className={styles.logos}>
                  <img
                    className={styles.logo}
                    alt="hostpital logo"
                    src={image1}
                  />
                  <div className={styles.availableBeds}>
                    <span>{children.availableBeds}</span>
                    <span>Beds available</span>
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                Laborum duis non culpa incididunt ullamco aute esse fugiat
                adipisicing commodo ipsum ex aliqua. Adipisicing ut Lorem labore
                anim velit cupidatat. Magna qui cillum aute fugiat eiusmod.Quis
                do non dolore consequat adipisicing exercitation irure mollit.
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={handleShowBeds}
                text="View Beds"
                style={{ background: "#5032D5", margin: 10 }}
              />
              <Button text="Hospital Info" style={{ margin: 10 }} />
            </div>
          </div>
          {showBeds && (
            <React.Fragment>
              {!showDescription && (
                <div
                  className={`${styles.hospital} ${styles.beds} ${
                    showAnime ? styles.bedsAnime : ""
                  } `}
                >
                  <div className={styles.title}>Select a type</div>
                  <div className={`${styles.totalbeds} `}>
                    {arr.length > 0 ? (
                      arr.map((bed) => (
                        <div key={bed.id} className={styles.singlebed}>
                          <img
                            src={image3}
                            alt={bed.type}
                            className={`${styles.image} ${
                              bed.type === "gold"
                                ? styles.gold
                                : bed.type === "silver"
                                ? styles.silver
                                : styles.bronze
                            }`}
                            onClick={handleShowDescription}
                          />
                          <div className={styles.description}>
                            Irure aliqua reprehenderit mollit do irure deserunt
                            consequat minim enim.Dolore amet in labore
                            veniam.Irure officia fugiat dolore reprehenderit
                            consectetur dolore do fugiat.
                            <div style={{ fontWeight: 700 }}>
                              Price: Rs. {bed.price}
                            </div>
                          </div>
                          <img
                            onClick={handleShowDescription}
                            src={image2}
                            alt={bed.type}
                            className={styles.logo}
                          />
                          <Button
                            text="Book Now"
                            style={{ background: "#5032D5" }}
                          />
                        </div>
                      ))
                    ) : (
                      <div>
                        No beds for that price, change the price to see more
                        options or try again later
                      </div>
                    )}
                  </div>
                </div>
              )}
              {showDescription && (
                <div className={`${styles.hospital} ${styles.beds1}`}>
                  <i
                    className={`fa fa-arrow-left ${styles.arrowLeft}`}
                    aria-hidden="true"
                    onClick={handleShowDescription}
                  ></i>
                  <div className={styles.fullGallery}>
                    <div className={styles.megaHeader}>
                      <div
                        className={
                          type === "gold"
                            ? styles.goldDiv
                            : type === "silver"
                            ? styles.silverDiv
                            : styles.bronzeDiv
                        }
                      ></div>
                      <div className={styles.header}>
                        <span
                          className={`${styles.title} ${styles.titleAnime}`}
                        >
                          {type} Type
                        </span>
                        <span>
                          Eiusmod magna officia ad qui magna sint laboris
                          adipisicing laborum. Ullamco esse ex aute duis quis.
                        </span>
                      </div>
                    </div>
                    <div className={styles.gallery}>
                      <div className={styles.leftImages}>
                        <img alt="image1" src={image} />
                        <img alt="image2" src={image} />
                        <img alt="image3" src={image} />
                        <img alt="image4" src={image} />
                      </div>
                      <img
                        className={styles.imageBig}
                        alt="imageBig"
                        src={image}
                      />
                    </div>
                    <Button text="Book Now" className={styles.buttonAnime} />
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      ) : (
        <h3>No hospitals in this region</h3>
      )}
    </React.Fragment>
  );
};

export default Card;
