"use client";

import SelectTimeOptionSelect from "../../components/SelectTimeOptionSelect";
import { SelectModeType, SelectTimeOptionType } from "./type";
import { MobileIconDraw, MobileIconDrawChoose, MobileIconErase, MobileIconEraseChoose } from "@setaday/icon";
import { useState } from "react";

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
              <button onClick={handleClickWriteButton}>
                {selectMode === "write" ? <MobileIconDrawChoose /> : <MobileIconDraw />}
              </button>
              <button onClick={handleClickEraseButton}>
                {selectMode === "erase" ? <MobileIconEraseChoose /> : <MobileIconErase />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
