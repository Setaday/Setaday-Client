"use client";

import { MobileIconArrowLeftGray, MobileIconArrowRightGray } from "@setaday/icon";
import { useState } from "react";

function SelectDateCalendar() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

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
      setMonth((prev) => (prev === 1 ? 12 : prev - 1));
    } else {
      setMonth((prev) => (prev === 12 ? 1 : prev + 1));
    }
  };

  return (
    <article>
      <header className="flex items-center">
        <button type="button" onClick={() => handleClickArrow("left")}>
          <MobileIconArrowLeftGray />
        </button>
        <h2 className="font-body1_b_18 px-[1.3rem] w-[12.5rem] text-center">{changeMonthToEng(month)}</h2>
        <button type="button" onClick={() => handleClickArrow("right")}>
          <MobileIconArrowRightGray />
        </button>
      </header>
    </article>
  );
}

export default SelectDateCalendar;
