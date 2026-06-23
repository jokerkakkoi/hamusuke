import React from "react";
import { House, DollarSign, CircleCheckBig, UserRound } from "lucide-react";

const BottomBar: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.04)] safe-bottom"
      aria-label="底部导航"
    >
      <ul className="mx-auto flex h-[var(--bottom-bar-height)] max-w-lg items-center justify-around px-2">
        <House/>
        <DollarSign/>
        <CircleCheckBig/>
        <UserRound/>
      </ul>
    </nav>
  );
};

export default BottomBar;