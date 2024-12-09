"use client";

import { DesktopIconDonate, DesktopIconSharing, DesktopIconTeam, DesktopLogo } from "@setaday/icon";
import Link from "next/link";

interface headerProps {
  currentPage: "select-date" | "select-time";
}

function Header({ currentPage }: headerProps) {
  const onClickDonate = () => {};

  const onClickSharing = () => {};

  const onClickTeam = () => {};

  return (
    <header className="flex items-center justify-between h-[8rem]">
      <Link href="/">
        <DesktopLogo />
      </Link>
      <div className="flex gap-[1.6rem]">
        <button type="button">
          <DesktopIconDonate />
        </button>
        <button type="button">
          <DesktopIconSharing />
        </button>
        {currentPage === "select-time" && (
          <button type="button">
            <DesktopIconTeam />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
