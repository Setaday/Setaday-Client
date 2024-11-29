"use client";

import { MobileIconArrowLeftGray, MobileIconArrowRightGray } from "@setaday/icon";
import { useState } from "react";

function SelectDateCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // 이번 달 시작 요일
  const startDay = new Date(year, month - 1, 1).getDay();
  // 다음 달 시작 요일
  const nextStartDay = new Date(year, month, 1).getDay();
  // 이번 달 마지막 날짜
  const endDate = new Date(year, month, 0).getDate();
  // 지난 달 마지막 날짜
  const lastEndDate = new Date(year, month - 1, 0).getDate();

  const DAY = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const DATE = Array.from({ length: endDate }, (_, idx) => idx + 1);
  const LAST_DATE = Array.from({ length: startDay }, (_, idx) => lastEndDate - (startDay - idx - 1));
  const NEXT_DATE = Array.from({ length: nextStartDay === 0 ? 0 : 7 - nextStartDay }, (_, idx) => idx + 1);

  const changeMonthToEng = (month: number) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  const handleClickArrow = (arrow: string) => {
    const isLeft = arrow === "left";

    if (isLeft) {
      if (month === 1) {
        setMonth(12);
        setYear((prev) => prev - 1);
      } else {
        setMonth((prev) => prev - 1);
      }
    } else {
      if (month === 12) {
        setMonth(1);
        setYear((prev) => prev + 1);
      } else {
        setMonth((prev) => prev + 1);
      }
    }
  };

  return (
    <article className="flex flex-col">
      <header className="flex items-center justify-center mb-[2.2rem]">
        <button type="button" onClick={() => handleClickArrow("left")}>
          <MobileIconArrowLeftGray />
        </button>
        <h2 className="font-body1_b_18 px-[1.3rem] w-[12.5rem] text-center">{changeMonthToEng(month)}</h2>
        <button type="button" onClick={() => handleClickArrow("right")}>
          <MobileIconArrowRightGray />
        </button>
      </header>

      <article className="flex flex-col gap-[3.1rem]">
        <header className="grid grid-cols-7 gap-x-[2.5rem]">
          {DAY.map((day) => {
            return (
              <h2 key={day} className="w-[2.9rem] font-body6_m_12 text-gray-2 text-center">
                {day}
              </h2>
            );
          })}
        </header>

        <div className="grid grid-cols-7 grid-rows-5 gap-x-[2.5rem] gap-y-[3.7rem]">
          {LAST_DATE.map((date) => {
            return (
              <p key={date} className="w-[2.9rem] h-[1.8rem] font-body5_m_14 text-gray-4 text-center">
                {date}
              </p>
            );
          })}
          {DATE.map((date) => {
            return (
              <p key={date} className="w-[2.9rem] h-[1.8rem] font-body5_m_14 text-gray-6 text-center">
                {date}
              </p>
            );
          })}
          {NEXT_DATE.map((date) => {
            return (
              <p key={date} className="w-[2.9rem] h-[1.8rem] font-body5_m_14 text-gray-4 text-center">
                {date}
              </p>
            );
          })}
        </div>
      </article>
    </article>
  );
}

export default SelectDateCalendar;
