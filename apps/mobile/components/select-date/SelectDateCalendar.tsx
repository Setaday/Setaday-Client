"use client";

import { MobileIconArrowLeftGray, MobileIconArrowRightGray } from "@setaday/icon";
import { useState } from "react";
import { getCalendarDate } from "../../constants/getCaledarDate";

function SelectDateCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<Array<number>>([]);

  const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const ALL_DATE = getCalendarDate({ year, month });

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
    setSelectedDate([]);

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

  const handleClickDate = (date: number) => {
    if (selectedDate.includes(date)) {
      const newDate = selectedDate.filter((includedDate) => includedDate !== date);
      setSelectedDate([...newDate]);
    } else {
      setSelectedDate([...selectedDate, date]);
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

      <article className="flex flex-col gap-[2rem] px-[1rem]">
        <header className="grid grid-cols-7 gap-x-[1.3rem]">
          {DAY.map((day) => {
            return (
              <h2 key={day} className="w-[2.9rem] font-body6_m_12 text-gray-2 text-center">
                {day}
              </h2>
            );
          })}
        </header>

        <div className="grid grid-cols-7 grid-rows-5 gap-x-[1.3rem] gap-y-[2.5rem]">
          {ALL_DATE.map(({ id, date, color }) =>
            date.map((num) => {
              const isActiveClick = id === "currentDate";
              const isClickedNum = isActiveClick && selectedDate.includes(num);

              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <p
                  key={id + num}
                  className={`flex items-center justify-center px-[1.35rem] py-[1.1rem] rounded-full font-body5_m_14  ${color} ${
                    isClickedNum && "bg-key"
                  } `}
                  onClick={() => isActiveClick && handleClickDate(num)}
                >
                  {num}
                </p>
              );
            })
          )}
        </div>
      </article>
    </article>
  );
}

export default SelectDateCalendar;
