"use client";

import { MobileIconArrowLeftBlack } from "@setaday/icon";
import { useRouter } from "next/navigation";
import type { SelectDateHeaderProps } from "../../type/selectedDateType";

function SelectDateHeader({ step, changeStep }: SelectDateHeaderProps) {
  const router = useRouter();

  const isSelectTimeStep = step === "time";
  const HEADER_CONTENT = isSelectTimeStep ? "시간 선택" : "날짜 선택";

  const clickArrowBtn = () => {
    isSelectTimeStep ? changeStep("date") : router.back();
  };

  return (
    <header className="border-gray-1 flex h-[5.2rem] w-[100dvw] items-center justify-between border-b-[1px] px-[0.9rem]">
      <button type="button" onClick={clickArrowBtn}>
        <MobileIconArrowLeftBlack />
      </button>

      <h2 className="font-body3_m_16 text-gray-6">{HEADER_CONTENT}</h2>

      <span className="h-[3.2rem] w-[3.2rem]" />
    </header>
  );
}

export default SelectDateHeader;
