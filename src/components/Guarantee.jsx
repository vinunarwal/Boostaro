import React from "react";
import guarantee1 from "../images/guarantee1.webp";
import guarantee2 from "../images/guarantee2.webp";
import guarantee3 from "../images/guarantee3.webp";
import guarantee4 from "../images/guarantee4.webp";
import guaranteesel from "../images/guaranteeSeal.svg";

function Guarantee() {
  return (
    <div>
      <div className="tab-content-item active">
        <div className="grid place-items-center">
          <div className="guarantee text-primary p-8 border-primary border-8 md:scale-90 lg:scale-75">
            <div className="guarantee-top grid grid-cols-3 items-end gap-1 font-bold">
              <div className="text-left">180</div>
              <img
                loading="lazy"
                src={guaranteesel}
                alt=""
                width="645"
                height="574"
                className="col-auto z-10"
              />
              <div className="text-right">DAY</div>
            </div>
            <h2 className="guarantee-middle text-center font-medium mt-4 lg:mt-8">
              3X GUARANTEE!
            </h2>
            <ul className="p-4">
              <li className="flex mt-8">
                <div className="flex-none bg-primary text-center font-black text-3xl text-white rounded-full w-14 h-14 leading-loose mr-3">
                  1
                </div>
                <p>
                  <b>180-DAY Money Back Guarantee</b> - 100% every penny, no
                  questions asked,
                  <b>you can even keep the bottles</b> as our “thanks” for
                  giving FitSpresso a try.
                </p>
              </li>
              <li className="flex mt-8">
                <div className="flex-none bg-primary text-center font-black text-3xl text-white rounded-full w-14 h-14 leading-loose mr-3">
                  2
                </div>
                <p>
                  Doctor Guarantee - Use Fitspresso every day for 6 full months
                  &amp; if your doctor isn’t shocked with your progress, we’ll
                  not only refund your money, we’ll also BUY you a competitor’s
                  product of your choice! (6 bottle purchases only)
                </p>
              </li>
              <li className="flex mt-8">
                <div className="flex-none bg-primary text-center font-black text-3xl text-white rounded-full w-14 h-14 leading-loose mr-3">
                  3
                </div>
                <p>
                  <b>Give Back Guarantee</b> - With every order, even if it’s
                  refunded, we promise to make a
                  <b>donation to feed a starving</b> child on your behalf. Let’s
                  help kids together :
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4 px-5 md:gap-8 lg:gap-10 md:scale-90 lg:scale-95">
            <div className="text-center">
              <img
                className="w-full mx-auto max-w-[100px]"
                src={guarantee1}
                alt="alt"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <img
                className="w-full mx-auto max-w-[100px]"
                src={guarantee2}
                alt="alt"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <img
                className="w-full mx-auto max-w-[100px]"
                src={guarantee3}
                alt="alt"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <img
                className="w-full mx-auto max-w-[100px]"
                src={guarantee4}
                alt="alt"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
