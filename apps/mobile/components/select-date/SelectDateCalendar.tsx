"use client";

import { MobileIconArrowLeftGray, MobileIconArrowRightGray } from "@setaday/icon";
import { useState } from "react";
import { getCalendarDate } from "../../constants/getCaledarDate";

function SelectDateCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<
    Array<{
      startYear: number;
      startMonth: number;
      startDate: number;
      endYear: number;
      endMonth: number;
      endDate: number;
    }>
  >([]);

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

  const sortDate = ({
    savedDate,
    newDate,
    clickedYear,
    clickedMonth,
    clickedDate,
    year,
    month,
    date,
  }: {
    savedDate: Date;
    newDate: Date;
    clickedYear: number;
    clickedMonth: number;
    clickedDate: number;
    year: number;
    month: number;
    date: number;
  }) => {
    // 저장된 날짜가 선택된 날짜보다 이른 경우
    const isSavedDateEarlier = savedDate < newDate;
    const startYear = isSavedDateEarlier ? year : clickedYear;
    const startMonth = isSavedDateEarlier ? month : clickedMonth;
    const startDate = isSavedDateEarlier ? date : clickedDate;
    const endYear = isSavedDateEarlier ? clickedYear : year;
    const endMonth = isSavedDateEarlier ? clickedMonth : month;
    const endDate = isSavedDateEarlier ? clickedDate : date;

    setSelectedDate((prev) => [
      // 이전 값을 유지한 채 마지막 요소만 변경
      ...prev.slice(0, -1),
      { startYear, startMonth, startDate, endYear, endMonth, endDate },
    ]);
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
    clickedYear,
    clickedMonth,
    clickedDate,
  }: {
    clickedYear: number;
    clickedMonth: number;
    clickedDate: number;
  }) => {
    // 해당 날짜가 포함된 selectedDate 객체 찾기
    const idxOfDate = selectedDate.findIndex(
      ({ startDate, startMonth, startYear, endDate, endMonth, endYear }) =>
        (startDate === clickedDate && startMonth === clickedMonth && startYear === clickedYear) ||
        (endDate === clickedDate && endMonth === clickedMonth && endYear === clickedYear)
    );

    // 이미 선택된 날짜인 경우, -1보다 큰 idx 값 반환
    if (idxOfDate > -1) {
      const newDate = selectedDate.map((savedDate) => {
        const { startDate, startMonth, startYear, endDate, endMonth, endYear } = savedDate;

        // startDate가 date와 같고 startMonth가 clickedMonth와 같으면 startDate와 startMonth만 초기화
        if (startDate === clickedDate && startMonth === clickedMonth && startYear === clickedYear) {
          return { ...savedDate, startDate: 0, startMonth: 0, startYear: 0 };
        }

        // endDate가 date와 같고 endMonth가 clickedMonth와 같으면 endDate와 endMonth만 초기화
        if (endDate === clickedDate && endMonth === clickedMonth && endYear === clickedYear) {
          return { ...savedDate, endDate: 0, endMonth: 0, endYear: 0 };
        }

        // 조건에 맞지 않으면 그대로 반환
        return savedDate;
      });

      // 시작/ 끝 날짜가 모두 선택되지 않은(startDate === 0 && endDate === 0) 경우, 빈 객체로 간주하고 필터링
      setSelectedDate([
        ...newDate.filter(
          ({ startDate, endDate }) =>
            (startDate > 0 && endDate === 0) || (startDate === 0 && endDate > 0) || (startDate > 0 && endDate > 0)
        ),
      ]);
    } else {
      const lastDate = selectedDate[selectedDate.length - 1];
      const isStartDateNull = lastDate && lastDate.startDate === 0 && lastDate.endDate !== 0;
      const isEndDateNull = lastDate && lastDate.startDate !== 0 && lastDate.endDate === 0;

      // 선택된 날짜가 없는 경우
      if (selectedDate.length === 0) {
        setSelectedDate([
          {
            startYear: clickedYear,
            startMonth: clickedMonth,
            startDate: clickedDate,
            endYear: 0,
            endMonth: 0,
            endDate: 0,
          },
        ]);
      }

      // 시작 날짜와 끝나는 날짜 중 하나가 선택되어 있는 경우
      else if (isStartDateNull || isEndDateNull) {
        const newDate = new Date(clickedYear, clickedMonth - 1, clickedDate);
        const { startDate, startMonth, startYear, endDate, endMonth, endYear } = lastDate;

        // 시작 날짜만 선택되어 있는 경우
        if (isEndDateNull) {
          const savedDate = new Date(startYear, startMonth - 1, startDate);
          sortDate({
            savedDate,
            newDate,
            clickedYear,
            clickedMonth,
            clickedDate,
            year: startYear,
            month: startMonth,
            date: startDate,
          });
        }

        // 끝나는 날짜만 선택되어 있는 경우
        else {
          const savedDate = new Date(endYear, endMonth - 1, endDate);
          sortDate({
            savedDate,
            newDate,
            clickedYear,
            clickedMonth,
            clickedDate,
            year: endYear,
            month: endMonth,
            date: endDate,
          });
        }
      }

      // 선택된 날짜 묶음이 하나 이상이고, 시작/ 끝 날짜가 모두 선택되어 있는 경우
      else if (selectedDate.length > 0) {
        setSelectedDate((prev) => [
          ...prev,
          {
            startYear: clickedYear,
            startMonth: clickedMonth,
            startDate: clickedDate,
            endYear: 0,
            endMonth: 0,
            endDate: 0,
          },
        ]);
      }
    }
  };

  return (
    <article className="flex flex-col mt-[5.6rem]">
      <header className="flex items-center justify-center mb-[2.2rem]">
        <button type="button" onClick={() => handleClickArrow("left")}>
          <MobileIconArrowLeftGray />
        </button>
        <h2 className="font-body1_b_18 px-[1.3rem] w-[12.5rem] text-center">{changeMonthToEng(month)}</h2>
        <button type="button" onClick={() => handleClickArrow("right")}>
          <MobileIconArrowRightGray />
        </button>
      </header>

      <article className="flex flex-col gap-[2rem]">
        <header className="grid grid-cols-7 gap-x-[1.3rem] px-[0.65rem]">
          {DAY.map((day) => {
            return (
              <h2 key={day} className="w-[2.9rem] font-body6_m_12 text-gray-2 text-center">
                {day}
              </h2>
            );
          })}
        </header>

        <div className="grid grid-cols-7 grid-rows-5 gap-y-[1.8rem]">
          {ALL_DATE.map(({ id, date, color }) =>
            date.map((curDate) => {
              const isActiveClick = id === "currentDate";
              const idxOfStartDate = selectedDate.findIndex(
                ({ startDate, startMonth, startYear }) =>
                  startDate === curDate && startMonth === month && startYear === year
              );

              const idxOfEndDate = selectedDate.findIndex(
                ({ endDate, endMonth, endYear }) => endDate === curDate && endMonth === month && endYear === year
              );

              // 각 날짜가 start인지 end인지 체크
              const isStartDate = idxOfStartDate > -1;
              const isEndDate = idxOfEndDate > -1;

              const isClickedNum = isActiveClick && (isStartDate || isEndDate);

              const isInRange =
                isActiveClick &&
                selectedDate.some(({ startYear, startMonth, startDate, endYear, endMonth, endDate }) => {
                  const start = new Date(startYear, startMonth - 1, startDate);
                  const end = new Date(endYear, endMonth - 1, endDate);
                  const current = new Date(year, month - 1, curDate);

                  return startYear && endYear ? start < current && current < end : false;
                });

              const matchedObj = selectedDate.find(
                ({ startDate, startMonth, startYear, endDate, endMonth, endYear }) =>
                  (startDate === curDate && startMonth === month && startYear === year) ||
                  (endDate === curDate && endMonth === month && endYear === year)
              );

              // 해당 객체의 endDate가 선택되었는지 체크 (!!를 활용하여 해당 값이 반드시 불린 값을 갖도록 정의)
              const isRightSelection = !!(matchedObj && matchedObj.endDate > 0 && matchedObj.startDate > 0);

              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={id + curDate}
                  className="flex items-center justify-center relative"
                  onClick={() =>
                    isActiveClick &&
                    !isInRange &&
                    handleClickDate({
                      clickedYear: year,
                      clickedMonth: month,
                      clickedDate: curDate,
                    })
                  }
                >
                  {((isRightSelection && isClickedNum) || isInRange) && (
                    <span
                      className={`absolute top-0 ${isStartDate ? "right-0" : "left-0"} ${
                        isClickedNum ? "w-[2.45rem]" : "w-[4.9rem]"
                      }  h-[3.6rem] bg-sub-1`}
                    />
                  )}

                  <p
                    className={`flex items-center justify-center w-[3.6rem] h-[3.6rem] z-10 rounded-full font-body5_m_14  ${color} ${
                      isClickedNum && "bg-key"
                    } `}
                  >
                    {curDate}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </article>
    </article>
  );
}

export default SelectDateCalendar;
