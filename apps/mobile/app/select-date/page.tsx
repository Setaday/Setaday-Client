"use client";

import { TextField } from "../../../../packages/ui/src/TextField";
import { useState } from "react";

export default function page() {
  const PLACE_HOLDER = "약속 이름을 작성해주세요";
  const MAX_LENGTH = 16;

  const [planName, setPlanName] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);

    value.length > MAX_LENGTH ? setIsInputError(true) : setIsInputError(false);
  };

  return (
    <>
      <TextField
        inputSize="mobile"
        placeholder={PLACE_HOLDER}
        value={planName}
        isError={isInputError}
        maxLength={MAX_LENGTH}
        onChange={handleChangeInput}
      />
    </>
  );
}
