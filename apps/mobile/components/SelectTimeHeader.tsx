"use client";

import { MobileIconDonate, MobileIconSharing, MobileIconTeam, MobileLogo } from "@setaday/icon";
import Link from "next/link";

function SelectTimeHeader() {
  const handleClickDonateButton = () => {
    // 기부하기 버튼 클릭 시
  };

  const handleClickTeamButton = () => {
    // 팀 버튼 클릭 시
  };

  const handleClickSharingButton = () => {
    // 공유하기 버튼 클릭 시
  };

  return (
    <header className="border-gray-1 flex h-[5.2rem] items-center justify-between border-b-2 px-[2rem]">
      <Link href="/">
        <MobileLogo />
      </Link>
      <div className="flex gap-[0.8rem]">
        <button type="button" onClick={handleClickDonateButton}>
          <MobileIconDonate />
        </button>
        <button type="button" onClick={handleClickTeamButton}>
          <MobileIconTeam />
        </button>
        <button type="button" onClick={handleClickSharingButton}>
          <MobileIconSharing />
        </button>
      </div>
    </header>
  );
}

export default SelectTimeHeader;
