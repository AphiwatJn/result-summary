import React from "react";

function Result() {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-Light_slate_blue-100 to-Light_royal_blue-100 text-white rounded-3xl max-[375px]:w-full">
      <div className="text-Light_lavender-100 font-bold text-xl">Your Result</div>
      <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-b from-Violet_blue-100 to-Persian_blue-100  flex flex-col items-center justify-center">
        <h1 className="text-white text-[50px] font-extrabold">76</h1>
        <p className="text-Light_lavender-100">of 100</p>
      </div>
      <h1 className="text-3xl">Great</h1>
      <p className="text-center px-9 text-Light_lavender-100">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Result;
