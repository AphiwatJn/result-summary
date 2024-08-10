import React from "react";
import Result from "../componence/Result";
import Summary from "../componence/Summary";

function Result_component() {
  return (
    <>
      <div className="h-dvh flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="flex flex-row w-[600px] h-[430px] shadow-xl rounded-3xl max-[375px]:flex-col max-[375px]:h-full max-[375px]:shadow-none">
            <Result />
            <Summary />
          </div>
        </div>
        <footer className="w-full flex justify-center">
          <div className="pt-9 text-center">
            Challenge by Frontend Mentor. Coded by Aphiwat Jantharasrisao.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Result_component;
