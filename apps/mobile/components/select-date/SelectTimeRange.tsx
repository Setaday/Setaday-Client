"use client";

import { MobileIconArrowDown, MobileIconArrowUp } from "@setaday/icon";
import React, { useState } from "react";
import { TIME_BLOCKS, TIME_RANGE_PLACEHOLDER } from "../../contants/timeRange";

function SelectTimeRange({
  handleSelectTime,
}: {
  handleSelectTime: (isSelected: boolean) => void;
}) {
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [isFinishClicked, setIsFinishClicked] = useState(false);

  const handleClickDropdown = (isStartTime: boolean) => {
    isStartTime ? setIsStartClicked((prev) => !prev) : setIsFinishClicked((prev) => !prev);
  };

  return (
    <section className="flex flex-col gap-y-[1.4rem]">
      <header>
        <h2 className="font-title1_sb_16 text-gray-6">약속 시간</h2>
      </header>
      <article className="flex items-center justify-center gap-x-[1.5rem]">
        {TIME_RANGE_PLACEHOLDER.map((text) => {
          const isStartTime = text === "시작 시간";
          const isSelectClicked = isStartTime ? isStartClicked : isFinishClicked;

          return (
            <React.Fragment key={text}>
              <article className="flex justify-between items-center w-full relative">
                <button
                  type="button"
                  className={`flex justify-between items-center w-full rounded-[0.4rem] bg-gray-1 ${
                    isSelectClicked
                      ? "pt-[0.85rem] pr-[0.45rem] pb-[0.75rem] pl-[1.45rem] border-[0.15rem] border-key"
                      : "pt-[1rem] pr-[0.6rem] pb-[0.9rem] pl-[1.6rem]"
                  }`}
                  onClick={() => handleClickDropdown(isStartTime)}
                >
                  <p className="font-body7_m_16 text-gray-6 ">{text}</p>
                  {isSelectClicked ? <MobileIconArrowUp /> : <MobileIconArrowDown />}
                </button>

                {isSelectClicked && (
                  <ul className="absolute top-full w-full max-h-[23rem] mt-[0.6rem] px-[0.8rem] overflow-x-hidden overflow-y-auto whitespace-nowrap text-center bg-gray-1 rounded-[0.4rem]">
                    {TIME_BLOCKS.map((time, idx) => {
                      const isMiddleItem = idx > 0 && idx < TIME_BLOCKS.length;
                      return (
                        <li
                          key={time}
                          value={time}
                          className={`py-[1.2rem] font-body7_m_16 text-gray-4 ${
                            isMiddleItem && "border-t-[0.1rem] border-t-gray-1.3"
                          }`}
                        >
                          {time}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </article>

              {isStartTime && <span className="font-body7_m_16 text-gray-4">~</span>}
            </React.Fragment>
          );
        })}
      </article>
    </section>
  );
}

export default SelectTimeRange;
