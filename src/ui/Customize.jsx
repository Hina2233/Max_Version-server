import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/Wen-Banner-03.png";

export default function Customize({ ingredients, setIngredients }) {
  let navigate = useNavigate();

  const onChange = (event, name) => {
    let newIngredients = { ...ingredients, [name]: event.currentTarget.checked };
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <div className="banner">
      <img src={Banner} alt="Banner" className="bannerImage" />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: 0, position: "relative" }}>
          <img src={Base} alt="Pizza Base" height="100%" width="100%" style={{ position: "absolute", zIndex: 0, marginRight: "20%" }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
            style={{ position: "absolute", zIndex: 4 }}
          >
            <img src={Basil} alt="Basil" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
            style={{ position: "absolute", zIndex: 4 }}
          >
            <img src={Olive} alt="Olive" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
            style={{ position: "absolute", zIndex: 3 }}
          >
            <img src={Pineapple} alt="Pineapple" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
            style={{ position: "absolute", zIndex: 4 }}
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
            style={{ position: "absolute", zIndex: 1 }}
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
            style={{ position: "absolute", zIndex: 4 }}
          >
            <img src={Mushroom} alt="Mushroom" height="100%" width="100%" />
          </motion.div>
        </div>
        <div style={{ flex: 1, padding: 40 }}>
          <label className="container-checkbox">
            Pineapple
            <input
              type="checkbox"
              checked={ingredients["pineapple"]}
              onChange={(event) => onChange(event, "pineapple")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Basil
            <input
              type="checkbox"
              checked={ingredients["basil"]}
              onChange={(event) => onChange(event, "basil")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Olive
            <input
              type="checkbox"
              checked={ingredients["olive"]}
              onChange={(event) => onChange(event, "olive")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Tomato
            <input
              type="checkbox"
              checked={ingredients["tomato"]}
              onChange={(event) => onChange(event, "tomato")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Mushroom
            <input
              type="checkbox"
              checked={ingredients["mushroom"]}
              onChange={(event) => onChange(event, "mushroom")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Cheese
            <input
              type="checkbox"
              checked={ingredients["cheese"]}
              onChange={(event) => onChange(event, "cheese")}
            />
            <span className="checkmark"></span>
          </label>
          <button
            onClick={() => navigate("/cart")}
            className="proceedToCheckout"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}