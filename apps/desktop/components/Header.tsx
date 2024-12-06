"use client";

import { DesktopIconDonate, DesktopIconSharing, DesktopIconTeam, DesktopLogo } from "@setaday/icon";
import Link from "next/link";

interface headerProps {
  state: string;
}

function Header({ state }: headerProps) {
  const onClickDonate = () => {};

  const onClickSharing = () => {};

  const onClickTeam = () => {};

  return (
    <header
      className={`flex justify-between items-center w-full h-[8rem] ${state === "select-date" ? "gap-x-[99.3rem]" : "gap-x-[92.9rem]"}`}
    >
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
        {state === "select-time" && (
          <button type="button">
            <DesktopIconTeam />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
