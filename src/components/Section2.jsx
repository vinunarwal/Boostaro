import React, { useState } from "react";
import logo from "../images/logo.svg";
import Product from "./Product";
import Benefits from "./Benefits";
import Guarantee from "./Guarantee";
import FitSpresso from "./FitSpresso ";
import ProductFeatures from "./ProductFeatures";

const Section = () => {
  const [active, setActive] = useState("Product");
  const [showProduct, setShowProduct] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showGuarantee, setShowGuarantee] = useState(false);
  const [showFitSpresso, setShowFitSpresso] = useState(false);

  const handleClick = (button) => {
    setActive(button);
    if (button === "Product") {
      setShowProduct(true);
      setShowBenefits(false);
      setShowGuarantee(false);
      setShowFitSpresso(false);
    } else if (button === "Benefits") {
      setShowProduct(false);
      setShowBenefits(true);
      setShowGuarantee(false);
      setShowFitSpresso(false);
    } else if (button === "Our Guarantee") {
      setShowProduct(false);
      setShowBenefits(false);
      setShowGuarantee(true);
      setShowFitSpresso(false);
    } else if (button === "About FitSpresso") {
      setShowProduct(false);
      setShowBenefits(false);
      setShowGuarantee(false);
      setShowFitSpresso(true);
    } else {
      setShowProduct(false);
      setShowBenefits(false);
      setShowGuarantee(false);
      setShowFitSpresso(false);
    }
  };

  const buttonClass =
    "w-full flex justify-end py-2 mb-2 text-white rounded-lg text-lg";

  return (
    <>
    <ProductFeatures/>
    <div className="container flex justify-center mt-4 mx-auto px-4">
      <div className=" w-[70%] flex flex-wrap">
        <div className="w-full md:w-1/4 pt-4 bg-customBgColorHex">
          <div className="bg-customBgColorHex p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 float-right">DISCOVER</h2>
            <div className="img">
              <img
                src={logo}
                alt="logo"
                className="w-full h-auto max-w-xs mx-auto my-4"
              />
            </div>
            <div className="buttons ml-4 ">
              <div
                className={`${buttonClass} ${
                  active === "Product" ? "bg-customBgColorHSL" : ""
                }`}
                onClick={() => handleClick("Product")}
              >
                <p className="text-lg text-white" style={{ fontSize: "25px" }}>
                  Product
                </p>
              </div>
              <hr className="my-2" />
              <div
                className={`${buttonClass} ${
                  active === "Benefits" ? "bg-customBgColorHSL" : ""
                }`}
                onClick={() => handleClick("Benefits")}
              >
                <p className="text-lg" style={{ fontSize: "25px" }}>
                  Benefits
                </p>
              </div>
              <hr className="my-2" />
              <div
                className={`${buttonClass} ${
                  active === "Our Guarantee" ? "bg-customBgColorHSL" : ""
                }`}
                onClick={() => handleClick("Our Guarantee")}
              >
                <p className="text-lg" style={{ fontSize: "25px" }}>
                  Our Guarantee
                </p>
              </div>
              <hr className="my-2" />
              <div
                className={`${buttonClass} ${
                  active === "About FitSpresso" ? "bg-customBgColorHSL" : ""
                }`}
                onClick={() => handleClick("About FitSpresso")}
              >
                <p className="text-lg" style={{ fontSize: "25px" }}>
                  About FitSpresso
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 pt-4 bg-customBgColor">
        <div className="bg-customBgColor p-4 rounded-lg">
            {active === "Product" && <Product />}
            {active === "Benefits" && <Benefits />}
            {active === "Our Guarantee" && <Guarantee />}
            {active === "About FitSpresso" && <FitSpresso />}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Section;
