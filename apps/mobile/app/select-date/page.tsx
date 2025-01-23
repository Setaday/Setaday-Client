"use client";

import { Button, TextField } from "@setaday/ui";
import { useState } from "react";
import SelectDateCalendar from "../../components/select-date/SelectDateCalendar";

export default function page() {
  const PLACE_HOLDER = "약속 이름을 작성해주세요";
  const MAX_LENGTH = 16;

  const [planName, setPlanName] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const isRightName = planName.length > 0 && planName.length < 17;
  const isActiveBtn = isRightName && isDateSelected;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);
  };

  const handleSelectDate = (isSelected: boolean) => {
    setIsDateSelected(isSelected);
  };

  return (
    <div className="flex flex-col justify-between h-[calc(100dvh-11.2rem)]">
      <TextField
        inputSize="mobile"
        placeholder={PLACE_HOLDER}
        value={planName}
        maxLength={MAX_LENGTH}
        onChange={handleChangeInput}
      />

      <SelectDateCalendar handleSelectDate={handleSelectDate} />

      <Button color={isActiveBtn ? "default" : "disabled"} font="default" size="mobile">
        다음으로
      </Button>
    </div>
  );
}
