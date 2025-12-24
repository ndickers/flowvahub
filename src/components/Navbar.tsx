import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { pathname } = useLocation();
  return (
    <div className="bg-gray-50">
      <header className="topbar sticky top-0 z-10  flex py-2 md:pt-6 lg:pt-8 pt-3 px-3 md:px-8">
        <div className="flex items-center gap-3">
          <button className="menu-btn" onClick={onMenuClick}>
            ☰
          </button>
          {(pathname === "/rewards/earn-points" ||
            pathname === "/rewards/redeem-rewards") && (
            <h1 className="text-xl md:text-[1.5rem] font-medium">
              Rewards Hub
            </h1>
          )}
        </div>
        <button className="ml-auto">
          <FaBell className="text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]" />
        </button>
      </header>
      {(pathname === "/rewards/earn-points" ||
        pathname === "/rewards/redeem-rewards") && (
        <p className="text-gray-600 mx-3 md:mx-8">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      )}
    </div>
  );
}
