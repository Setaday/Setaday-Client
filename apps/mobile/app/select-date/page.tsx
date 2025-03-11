"use client";

import { Button, TextField } from "@setaday/ui";
import { useRouter } from "next/navigation";
import { type SetStateAction, useRef, useState } from "react";
import SelectDateCalendar from "../../components/select-date/SelectDateCalendar";
import SelectDateHeader from "../../components/select-date/SelectDateHeader";
import SelectTimeRange from "../../components/select-date/SelectTimeRange";
import { MAX_DATE, MAX_LENGTH, PLACE_HOLDER } from "../../constants/selectDateConst";
import type { SelectedDateType, SelectedTimeType } from "../../type/selectedDateType";

export default function page() {
  const router = useRouter();

  const [planName, setPlanName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Array<SelectedDateType>>([]);
  const [selectedTime, setSelectedTime] = useState<Array<SelectedTimeType>>([]);
  const [step, setStep] = useState("date");
  const selectedDateNum = useRef(0);

  const isSelectTime = step === "time";
  const BTN_CONTENT = isSelectTime ? "약속 생성하기" : "다음으로";

  const isValidName = planName.length && planName.length <= MAX_LENGTH;
  const isValidDate =
    selectedDate.length &&
    selectedDate.every(({ startYear, endYear }) => startYear && endYear) &&
    selectedDateNum.current <= MAX_DATE;
  const isValidTime = selectedTime.length && selectedTime.every(({ startTime, endTime }) => startTime && endTime);

  const isActiveBtn = isSelectTime ? isValidTime : isValidName && isValidDate;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);
  };

  const handleSelectDate = (newDate: SetStateAction<Array<SelectedDateType>>) => {
    setSelectedDate(newDate);
  };

  const handleSelectTime = (newTime: SetStateAction<Array<SelectedTimeType>>) => {
    setSelectedTime(newTime);
  };

  const changeStep = (step: string) => {
    setStep(step);
  };

  const handleClickSubmitBtn = () => {
    // isSelectTime의 경우, 추후 api 통신으로 바꿀 예정
    isSelectTime ? router.push("/") : changeStep("time");
  };

  return (
    <>
      <SelectDateHeader step={step} changeStep={changeStep} />

      <div className="flex flex-col justify-between h-[calc(100dvh-11.2rem)] mx-[2rem] my-[3rem]">
        {isSelectTime ? (
          <SelectTimeRange selectedTime={selectedTime} handleSelectTime={handleSelectTime} />
        ) : (
          <>
            <TextField
              inputSize="mobile"
              placeholder={PLACE_HOLDER}
              value={planName}
              maxLength={MAX_LENGTH}
              onChange={handleChangeInput}
            />

            <SelectDateCalendar
              selectedDateNum={selectedDateNum}
              selectedDate={selectedDate}
              handleSelectDate={handleSelectDate}
            />
          </>
        )}

        <Button
          color={isActiveBtn ? "default" : "disabled"}
          font="default"
          size="mobile"
          disabled={!isActiveBtn}
          onClick={handleClickSubmitBtn}
        >
          {BTN_CONTENT}
        </Button>
      </div>
    </>
  );
}
