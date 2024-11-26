"use client";

import { TextField } from "../../../../packages/ui/src/TextField";
import { useState } from "react";

export default function page() {
  const PLACE_HOLDER = "약속 이름을 작성해주세요";

  const [planName, setPlanName] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPlanName(value);
  };

  return (
    <>
      <TextField
        placeholder={PLACE_HOLDER}
        value={planName}
        onChange={handleChangeInput}
        maxLength={16}
        inputSize="mobile"
      />
    </>
  );
}
