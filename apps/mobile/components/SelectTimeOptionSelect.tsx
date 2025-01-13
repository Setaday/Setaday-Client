"use client";

import { MobileIconArrowDownSmall } from "@setaday/icon";
import { useState } from "react";
import type { SelectTimeOptionSelectProps } from "../app/select-time/type";

function SelectTimeOptionSelect({ selectTimeOption, handleSelectOption }: SelectTimeOptionSelectProps) {
  const unSelectedTimeOption = selectTimeOption === "myTime" ? "entireTime" : "myTime";

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleClickOptionChangeButton = () => {
    setIsSelectOpen(false);
    handleSelectOption(unSelectedTimeOption);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSelectClick}
        className="font-body9_sb_14 border-gray-1.5 text-gray-4 flex items-center justify-between gap-[0.2rem] rounded-[0.4rem] border pb-[0.3rem] pl-[0.9rem] pr-[0.3rem] pt-[0.3rem]"
      >
        {selectTimeOption === "myTime" ? "나의 가능 시간" : "전체 가능 시간"}
        <span className={`transition-transform duration-200 ${isSelectOpen ? "rotate-180" : ""}`}>
          <MobileIconArrowDownSmall />
        </span>
      </button>
      <div
        className={`transition-opacity duration-200 ${
          isSelectOpen ? "opacity-100" : "opacity-0"
        } ${isSelectOpen ? "max-h-[100px]" : "max-h-0"} overflow-hidden`}
      >
        {isSelectOpen && (
          <button
            type="button"
            onClick={handleClickOptionChangeButton}
            className="font-body9_sb_14 bg-gray-1 border-gray-1.5 text-gray-4 relative z-[1] mt-[0.4rem] rounded-[0.4rem] border pb-[0.9rem] pl-[0.9rem] pr-[3.1rem] pt-[0.9rem]"
          >
            {selectTimeOption === "myTime" ? "전체 가능 시간" : "나의 가능 시간"}
          </button>
        )}
      </div>
    </div>
  );
}

export default SelectTimeOptionSelect;
