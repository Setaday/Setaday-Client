"use client";

import { Button, TextField } from "@setaday/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SelectDateCalendar from "../../components/select-date/SelectDateCalendar";
import SelectTimeRange from "../../components/select-date/SelectTimeRange";

export default function page() {
  const PLACE_HOLDER = "약속 이름을 작성해주세요";
  const MAX_LENGTH = 16;

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("current");
  const isSelectTimeStep = currentStep === "time";
  const BTN_CONTENT = isSelectTimeStep ? "약속 생성하기" : "다음으로";

  const [planName, setPlanName] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const isRightName = planName.length > 0 && planName.length < 17;
  const isActiveBtn = isSelectTimeStep ? isTimeSelected : isRightName && isDateSelected;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);
  };

  const handleSelectDate = (isSelected: boolean) => {
    setIsDateSelected(isSelected);
  };

  const handleSelectTime = (isSelected: boolean) => {
    setIsTimeSelected(isSelected);
  };

  const handleClickSubmitBtn = () => {
    // isSelectTimeStep의 경우, 추후 api 통신으로 바꿀 예정
    isSelectTimeStep ? router.push("/") : router.push("/select-date?current=time");
  };

  return (
    <div className="flex flex-col justify-between h-[calc(100dvh-11.2rem)]">
      {isSelectTimeStep ? (
        <SelectTimeRange handleSelectTime={handleSelectTime} />
      ) : (
        <>
          <TextField
            inputSize="mobile"
            placeholder={PLACE_HOLDER}
            value={planName}
            maxLength={MAX_LENGTH}
            onChange={handleChangeInput}
          />

          <SelectDateCalendar handleSelectDate={handleSelectDate} />
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
  );
}
