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

  const DATE = Array.from({ length: endDate }, (_, idx) => idx + 1);
  const LAST_DATE = Array.from({ length: startDay }, (_, idx) => lastEndDate - (startDay - idx - 1));
  const NEXT_DATE = Array.from({ length: nextStartDay === 0 ? 0 : 7 - nextStartDay }, (_, idx) => idx + 1);

  const ALL_DATE = [
    {
      id: "lastDate",
      date: LAST_DATE,
    },
    { id: "currentDate", date: DATE, color: "text-gray-6" },
    {
      id: "nextDate",
      date: NEXT_DATE,
    },
  ];

  return ALL_DATE;
};
