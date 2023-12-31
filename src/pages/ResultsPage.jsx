import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  boba2,
  pinkTwinkle,
  bobaquiz12,
  bobaquiz23,
  bobaquiz24,
  bobaquiz22,
} from "../assets";
import "./ResultsPage.css";
import { motion, AnimateSharedLayout } from "framer-motion";
// import fetchMatch from "../utils/api";

const sampletags = [
  { key: 1, name: "#tapioca-pearls" },
  { key: 2, name: "#brown-sugar" },
  { key: 3, name: "#black-tea" },
  { key: 4, name: "#50%-sugar" },
  { key: 5, name: "#no-ice" },
];
const containerVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 2 },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0,
      staggerDirection: -1,
    },
  },
};

const bobaVariants = {
  offscreen: {
    x: -100,
    y: -400,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.33,
      duration: 4,
    },
  },
};

const ResultsPage = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const drinkCode = location.state && location.state.drinkCode;

  console.log("Drink Code:", drinkCode);

  // function fetchMatch(drinkCode) {
  //   const apiUrl = "http://localhost:3000";
  //   console.log("fetchmatch in api called");

  //   const fetchMatchApiUrl = `${apiUrl}/drink/${drinkCode}`;

  //   fetch(fetchMatchApiUrl)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw new Error("Network response was not 200");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("response =>>>>>" + JSON.stringify(data));
  //       console.log(data);
  //       return data;
  //       // const data = JSON.stringify(response);
  //       // return data;
  //       // console.log(response);
  //       // return response.json();
  //     })
  //     .catch((error) => {
  //       console.error("API Error:", error);
  //     });
  // }
  async function fetchMatch(drinkCode) {
    const apiUrl = "http://localhost:3000";
    console.log("fetchmatch in api called");

    try {
      const fetchMatchApiUrl = `${apiUrl}/drink/${drinkCode}`;
      const response = await fetch(fetchMatchApiUrl);

      if (response.status !== 200) {
        throw new Error("Network response was not 200");
      }

      const data = await response.json();
      console.log("response =>>>>>", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; // Re-throw the error to handle it in the component.
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMatch(drinkCode);
      if (result) {
        setData(result[0]);
      }
      console.log("result" + result);
    };

    fetchData();
  }, [drinkCode]);

  console.log(data);
  let image_url, description, name, tags;
  if (data) {
    image_url = data.image_url;
    description = data.description;
    name = data.drink_name;
    tags = data.tags;
    console.log(data);
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="onscreen"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.8 }}
      animate="show"
      className="results-container"
    >
      <motion.img
        variants={bobaVariants}
        whileInView="onscreen"
        initial="offscreen"
        src={boba2}
        alt="Boba result"
      />
      <div className="results-text-container">
        <h2 className="results-title">
          Results: <br />
          <span className="results-name">
            {name && name}
            {!name && "Brown Sugar Pearl Milk Tea"}
          </span>
        </h2>
        <div className="results-description">
          <p>
            {description && description}
            {!description &&
              "Brown Sugar Pearl Milk Tea, a Taiwanese delight born in Taichung. This delectable drink blends fresh cold milk with rich brown sugar caramel, creating a symphony of flavors. Topped with chewy tapioca pearls, it's a treat that's taken the world by storm."}
          </p>
          <motion.div className="results-tags">
            {tags?.length >= 1 &&
              tags.map((tag) => (
                <div className="results-tag" key={tag.key}>
                  {tag}
                </div>
              ))}
            {!tags &&
              sampletags.map((tag) => (
                <div className="results-tag" key={tag.key}>
                  {tag.name}
                </div>
              ))}
          </motion.div>
        </div>
        <motion.div
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: [1, 1.05],
            originX: 0,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/map" className="container-button">
            Find Locations
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsPage;
