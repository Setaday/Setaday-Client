import type { MutableRefObject, SetStateAction } from "react";

export interface SelectedDateType {
  startYear: number;
  startMonth: number;
  startDate: number;
  endYear: number;
  endMonth: number;
  endDate: number;
}

export interface SelectedTimeType {
  startTime: string;
  endTime: string;
}

export interface SelectTimeRangeProps {
  selectedTime: Array<SelectedTimeType>;
  handleSelectTime: (newTime: SetStateAction<Array<SelectedTimeType>>) => void;
}

export interface SelctDateCalendarProps {
  selectedDateNum: MutableRefObject<number>;
  selectedDate: Array<SelectedDateType>;
  handleSelectDate: (newDate: SetStateAction<Array<SelectedDateType>>) => void;
}

export interface ClickDateProps {
  clickedYear: number;
  clickedMonth: number;
  clickedDate: number;
}

export interface ClickTimeProps {
  e: React.MouseEvent<HTMLLIElement, MouseEvent>;
  isStartTime: boolean;
  idx: number;
}

export interface SelectDateHeaderProps {
  step: string;
  changeStep: (step: string) => void;
}
