"use client";

import { MobileIconArrowLeftBlack } from "@setaday/icon";
import { useRouter } from "next/navigation";

function SelectDateHeader() {
  const router = useRouter();
  const clickArrowBtn = () => {
    router.back();
  };
  return (
    <header className="border-gray-1 flex h-[5.2rem] w-[100dvw] items-center justify-between border-b-[1px] px-[0.9rem]">
      <button type="button" onClick={clickArrowBtn}>
        <MobileIconArrowLeftBlack />
      </button>

      <h2 className="font-body3_m_16 text-gray-6">날짜 선택</h2>

      <span className="h-[3.2rem] w-[3.2rem]" />
    </header>
  );
}

export default SelectDateHeader;
