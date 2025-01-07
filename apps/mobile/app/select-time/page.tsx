"use client";

import { MobileIconDraw, MobileIconDrawChoose, MobileIconErase, MobileIconEraseChoose } from "@setaday/icon";
import { useState } from "react";
import SelectTimeOptionSelect from "../../components/SelectTimeOptionSelect";
import TimeSelectorContainer from "../../components/TimeSelectorContainer";
import { Time } from "../../contants/selectDateConst";
import type { SelectModeType, SelectTimeOptionType } from "./type";

export default function Page() {
  const [selectTimeOption, setSelectTimeOption] = useState<SelectTimeOptionType>("myTime");
  const [selectMode, setSelectMode] = useState<SelectModeType>("default");

  const handleClickWriteButton = () => {
    if (selectMode === "write") {
      setSelectMode("default");
    } else {
      setSelectMode("write");
    }
  };

  const handleClickEraseButton = () => {
    if (selectMode === "erase") {
      setSelectMode("default");
    } else {
      setSelectMode("erase");
    }
  };

  const handleSelectOption = (option: SelectTimeOptionType) => {
    setSelectTimeOption(option);
  };

  return (
    <div>
      <div className="pt-[3rem]">
        <h1 className="font-body7_m_16 text-gray-3">이정우의 회의</h1>
        <h2 className="font-head1_b_22 text-gray-6 mt-[0.2rem]">November 2024</h2>
        <div className="mt-[2.4rem] flex justify-between">
          <SelectTimeOptionSelect selectTimeOption={selectTimeOption} handleSelectOption={handleSelectOption} />
          {selectTimeOption === "myTime" && (
            <div className="flex h-[3.4rem] items-center gap-[0.6rem]">
              <button type="button" onClick={handleClickWriteButton}>
                {selectMode === "write" ? <MobileIconDrawChoose /> : <MobileIconDraw />}
              </button>
              <button type="button" onClick={handleClickEraseButton}>
                {selectMode === "erase" ? <MobileIconEraseChoose /> : <MobileIconErase />}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-[1.4rem]">
          {Time.map((time) => (
            <div key={time}>
              <span className="font-body6_m_12 text-gray-3">{time}</span>
            </div>
          ))}
        </div>
        <TimeSelectorContainer selectMode={selectMode} />
      </div>
    </div>
  );
}
