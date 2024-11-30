"use client";

import { MobileIconArrowLeftGray, MobileIconArrowRightGray } from "@setaday/icon";
import { useState } from "react";
import { getCalendarDate } from "../../constants/getCaledarDate";

function SelectDateCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<
    Array<{
      startMonth: number;
      startDate: number;
      endMonth: number;
      endDate: number;
    }>
  >([{ startMonth: 0, startDate: 0, endMonth: 0, endDate: 0 }]);

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

  const handleClickDate = ({
    clickedMonth,
    date,
  }: {
    clickedMonth: number;
    date: number;
  }) => {
    const idxOfDate = selectedDate.findIndex(
      (savedDate) =>
        (savedDate.startDate === date && savedDate.startMonth === clickedMonth) ||
        (savedDate.endDate === date && savedDate.endMonth === clickedMonth)
    );

    // 이미 선택된 날짜인 경우, -1보다 큰 idx 값 반환
    if (idxOfDate > -1) {
      const newDate = selectedDate.map((savedDate) => {
        // startDate가 date와 같고 startMonth가 clickedMonth와 같으면 startDate와 startMonth만 초기화
        if (savedDate.startDate === date && savedDate.startMonth === clickedMonth) {
          return { ...savedDate, startDate: 0, startMonth: 0 };
        }

        // endDate가 date와 같고 endMonth가 clickedMonth와 같으면 endDate와 endMonth만 초기화
        if (savedDate.endDate === date && savedDate.endMonth === clickedMonth) {
          return { ...savedDate, endDate: 0, endMonth: 0 };
        }

        // 조건에 맞지 않으면 그대로 반환
        return savedDate;
      });
      setSelectedDate([...newDate]);
    } else {
      const lastDate = selectedDate[selectedDate.length - 1];

      if ((lastDate && lastDate.startDate === 0 && lastDate.endDate === 0) || selectedDate.length === 0) {
        setSelectedDate([{ startMonth: month, startDate: date, endMonth: 0, endDate: 0 }]);
      } else if (lastDate && lastDate.startDate !== 0 && lastDate.endDate === 0) {
        setSelectedDate((prev) => [
          // 이전 값을 유지한 채 마지막 요소만 변경
          ...prev.slice(0, -1),
          {
            startMonth: lastDate.startMonth,
            startDate: lastDate.startDate,
            endMonth: clickedMonth,
            endDate: date,
          },
        ]);
      } else if (selectedDate.length > 0) {
        setSelectedDate((prev) => [...prev, { startMonth: month, startDate: date, endMonth: 0, endDate: 0 }]);
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
              const idxOfDate = selectedDate.findIndex(
                (savedDate) =>
                  (savedDate.startDate === num && savedDate.startMonth === month) ||
                  (savedDate.endDate === num && savedDate.endMonth === month)
              );

              const isClickedNum = isActiveClick && idxOfDate > -1;

              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <p
                  key={id + num}
                  className={`flex items-center justify-center px-[1.35rem] py-[1.1rem] rounded-full font-body5_m_14  ${color} ${
                    isClickedNum && "bg-key"
                  } `}
                  onClick={() => isActiveClick && handleClickDate({ clickedMonth: month, date: num })}
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
