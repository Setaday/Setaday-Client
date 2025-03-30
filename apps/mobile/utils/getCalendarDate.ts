import { TODAYS_DATE, TODAYS_MONTH } from "../constants/selectDateConst";
import { TODAYS_YEAR } from "./../constants/selectDateConst";

export const getCalendarDate = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  // 이번 달 시작 요일
  const startDay = new Date(year, month - 1, 1).getDay();
  // 다음 달 시작 요일
  const nextStartDay = new Date(year, month, 1).getDay();
  // 이번 달 마지막 날짜
  const endDate = new Date(year, month, 0).getDate();
  // 지난 달 마지막 날짜
  const lastEndDate = new Date(year, month - 1, 0).getDate();

  const isCurrentMonth = year === TODAYS_YEAR && month === TODAYS_MONTH;
  const isPastYear = year < TODAYS_YEAR;
  const isFutureYear = year > TODAYS_YEAR;
  const isPastMonthsOfThisYear = year === TODAYS_YEAR && month < TODAYS_MONTH;
  const isFutureMonthsOfThisYear = year === TODAYS_YEAR && month > TODAYS_MONTH;

  const DATE = Array.from({ length: endDate }, (_, idx) => idx + 1);

  // 선택 제한 날짜
  const INVALID_DATE = DATE.filter((date) => {
    // 이번 년도, 이번 달의 경우 오늘의 날짜보다 작은 날짜는 선택 불가
    if (isCurrentMonth) {
      return date < TODAYS_DATE;
    }

    // 지난 년도 || 이번 년도의 지난 달의 경우, 모든 날짜 선택 불가
    if (isPastYear || isPastMonthsOfThisYear) {
      return date;
    }
  });

  // 선택 가능 날짜
  const VALID_DATE = DATE.filter((date) => {
    // 이번 년도, 이번 달의 경우 오늘의 날짜보다 크거나 같은 날짜 선택 가능
    if (isCurrentMonth) {
      return date >= TODAYS_DATE;
    }

    // 다음 년도 || 이번 년도의 이후 달의 경우, 모든 날짜 선택 가능
    if (isFutureYear || isFutureMonthsOfThisYear) {
      return date;
    }
  });

  // 오늘이 속한 달에 표시해야 할 지난 달의 날짜
  const LAST_MONTH_DATE = Array.from({ length: startDay }, (_, idx) => lastEndDate - (startDay - idx - 1));

  // 오늘 이전의 모든 날짜 (올해 이하인 경우, 지난 달 날짜와 선택 불가 날짜를 포함 / 내년 이상인 경우 지난 달 날짜만 포함)
  const LAST_DATE = year <= TODAYS_YEAR ? [...LAST_MONTH_DATE, ...INVALID_DATE] : LAST_MONTH_DATE;

  // 오늘이 속한 달에 표시해야 할 다음 달의 날짜
  const NEXT_MONTH_DATE = Array.from({ length: nextStartDay === 0 ? 0 : 7 - nextStartDay }, (_, idx) => idx + 1);

  const ALL_DATE = [
    {
      id: "lastDate",
      date: LAST_DATE,
      color: "text-gray-4",
    },
    {
      id: "validDate",
      date: VALID_DATE,
      color: "text-gray-6",
    },
    {
      id: "nextDate",
      date: NEXT_MONTH_DATE,
      color: "text-gray-4",
    },
  ];

  return ALL_DATE;
};
