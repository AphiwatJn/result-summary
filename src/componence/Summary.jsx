import React from "react";
import data from "../uilt/data.json";
import reactionIcon from "../assets/images/icon-reaction.svg";
import memoryIcon from "../assets/images/icon-memory.svg";
import verbalIcon from "../assets/images/icon-verbal.svg";
import visualIcon from "../assets/images/icon-visual.svg";

function Summary() {
  return (
    <div className="p-8 flex flex-col w-1/2 gap-7 max-[400px]:w-full">
      <div className="font-bold text-xl text-gray-600">Summary</div>
      <div className="flex flex-col gap-3">
        <div className="bg-red-50 text-Light_red-100 flex justify-between w-full p-3 rounded-lg font-bold">
          <div className="flex gap-2">
            <img src={reactionIcon} alt={data[0].category} />
            <p>{data[0].category}</p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-700">{data[0].score}</p>
            <p className="text-gray-400">/100</p>
          </div>
        </div>
        <div className="bg-yellow-50 text-Orangey_yellow-100 flex justify-between w-full p-3 rounded-lg font-bold">
          <div className="flex gap-2">
          <img src={memoryIcon} alt={data[1].category} />
          <p>{data[1].category}</p>
          </div>
          <div className="flex gap-1">
          <p className="text-gray-700">{data[1].score}</p>
          <p className="text-gray-400">/100</p>
          </div>
        </div>
        <div className="bg-teal-50 text-Green_teal-100 flex justify-between w-full p-3 rounded-lg font-bold">
          <div className="flex gap-2">
          <img src={verbalIcon} alt={data[2].category} />
          <p>{data[2].category}</p>
          </div>
          <div className="flex gap-1">
          <p className="text-gray-700">{data[2].score}</p>
          <p className="text-gray-400">/100</p>
          </div>
        </div>
        <div className="bg-blue-50 text-Cobalt_blue-100 flex justify-between w-full p-3 rounded-lg font-bold">
          <div className="flex gap-2">
          <img src={visualIcon} alt={data[3].category} />
          <p>{data[3].category}</p>
          </div>
          <div className="flex gap-1">
          <p className="text-gray-700">{data[3].score}</p>
          <p className="text-gray-400">/100</p>
          </div>
        </div>
      </div>
      <button className="bg-Dark_gray_blue-100 text-white py-2 rounded-full font-medium hover:bg-gradient-to-b from-Light_slate_blue-100 to-Light_royal_blue-100">
        Continue
      </button>
    </div>
  );
}

export default Summary;
