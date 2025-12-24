import { NavLink, Outlet } from "react-router-dom";
export default function Rewards() {
  return (
    <div className="px-3 md:px-8">
      <div className="my-6 flex items-center gap-3">
        <NavLink
          className={({ isActive }) =>
            `p-2 ${
              isActive
                ? "text-[#9013FE]  border-b-3 rounded-t-md border-[#9013FE] bg-[rgba(144,19,254,0.08)]"
                : " text-gray-400 p-2 rounded-md hover:bg-[rgba(144,19,254,0.08)]"
            }`
          }
          to="/rewards/earn-points"
        >
          Earn Points
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-2 ${
              isActive
                ? "text-[#9013FE]  border-b-3 rounded-t-md border-[#9013FE] bg-[rgba(144,19,254,0.08)]"
                : " text-gray-400 p-2 rounded-md hover:bg-[rgba(144,19,254,0.08)]"
            }`
          }
          to="/rewards/redeem-rewards"
        >
          Redeem Rewards
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
