"use client";

import { Button, TextField } from "@setaday/ui";
import { useState } from "react";
import SelectDateCalendar from "../../components/select-date/SelectDateCalendar";

export default function page() {
  const PLACE_HOLDER = "약속 이름을 작성해주세요";
  const MAX_LENGTH = 16;

  const [planName, setPlanName] = useState("");
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState(true);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);
  };

  const handleDisabledNextBtn = (isDisabled: boolean) => {
    setIsDisabledNextBtn(isDisabled);
  };

  return (
    <div className="flex flex-col justify-between h-[calc(100dvh-11.2rem)]">
      <div>
        <TextField
          inputSize="mobile"
          placeholder={PLACE_HOLDER}
          value={planName}
          maxLength={MAX_LENGTH}
          onChange={handleChangeInput}
        />
        <SelectDateCalendar handleDisabledNextBtn={handleDisabledNextBtn} />
      </div>

      <Button color={isDisabledNextBtn ? "cancel" : "default"} font="default" size="mobile">
        다음으로
      </Button>
    </div>
  );
}
