"use client";

import { MobileIconArrowLeftBlack } from "@setaday/icon";

function SelectDateHeader() {
  return (
    <header className="border-gray-1 flex h-[5.2rem] w-[100dvw] items-center justify-between border-b-[1px] px-[0.9rem]">
      <button onClick={() => window.history.back()}>
        <MobileIconArrowLeftBlack />
      </button>

      <h2 className="font-body3_m_16 text-gray-6">날짜 선택</h2>

      <div className="h-[3.2rem] w-[3.2rem]"></div>
    </header>
  );
}

export default SelectDateHeader;
