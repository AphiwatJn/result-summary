import React from "react";
import Result from "../componence/Result";
import Summary from "../componence/Summary";

function Result_component() {
  return (
    <>
      <div className="h-dvh flex justify-center items-center ">
        <div className="flex flex-row w-[600px] h-[430px] shadow-xl rounded-3xl max-[375px]:flex-col max-[375px]:h-full max-[375px]:shadow-none">
          <Result />
          <Summary />
        </div>
      </div>
    </>
  );
}

export default Result_component;
