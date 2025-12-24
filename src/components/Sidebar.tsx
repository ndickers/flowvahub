import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/flowva_logo.png";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLogout(false);
      }
    }

    if (showLogout) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogout]);

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed:", error.message);
    }
    navigate("/login");
  }

  return (
    <>
      <div
        className={`sidebar-overlay ${
          isOpen ? "show" : ""
        } font-sans h-screen shadow-md border-r border-black/10`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="p-2 px-7 border-none  my-2 flex justify-start">
            <img className="h-15" src={logo} alt="logo" />
          </div>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="grow px-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
            to="/home"
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
              />
            </svg>
            <span className="tracking-wide truncate">Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
            to="/discover"
            end
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM370.7 389.1L226.4 444.6C207 452.1 187.9 433 195.4 413.6L250.9 269.3C254.2 260.8 260.8 254.2 269.3 250.9L413.6 195.4C433 187.9 452.1 207 444.6 226.4L389.1 370.7C385.9 379.2 379.2 385.8 370.7 389.1zM352 320C352 302.3 337.7 288 320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320z"
              />
            </svg>
            <span className="tracking-wide truncate">Discover</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
            to="/library"
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M560.3 301.2C570.7 313 588.6 315.6 602.1 306.7C616.8 296.9 620.8 277 611 262.3L563 190.3C560.2 186.1 556.4 182.6 551.9 180.1L351.4 68.7C332.1 58 308.6 58 289.2 68.7L88.8 180C83.4 183 79.1 187.4 76.2 192.8L27.7 282.7C15.1 306.1 23.9 335.2 47.3 347.8L80.3 365.5L80.3 418.8C80.3 441.8 92.7 463.1 112.7 474.5L288.7 574.2C308.3 585.3 332.2 585.3 351.8 574.2L527.8 474.5C547.9 463.1 560.2 441.9 560.2 418.8L560.2 301.3zM320.3 291.4L170.2 208L320.3 124.6L470.4 208L320.3 291.4zM278.8 341.6L257.5 387.8L91.7 299L117.1 251.8L278.8 341.6z"
              />
            </svg>
            <span className="tracking-wide truncate">Library</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
            to="/tech-stack"
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z"
              />
            </svg>
            <span className="tracking-wide truncate">Tech Stack</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
            to="/subscription"
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M64 192L64 224L576 224L576 192C576 156.7 547.3 128 512 128L128 128C92.7 128 64 156.7 64 192zM64 272L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 272L64 272zM128 424C128 410.7 138.7 400 152 400L200 400C213.3 400 224 410.7 224 424C224 437.3 213.3 448 200 448L152 448C138.7 448 128 437.3 128 424zM272 424C272 410.7 282.7 400 296 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L296 448C282.7 448 272 437.3 272 424z"
              />
            </svg>
            <span className="tracking-wide truncate">Subscriptions</span>
          </NavLink>
          <NavLink
            to="/rewards/earn-points"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive || pathname === "/rewards/redeem-rewards"
                  ? "text-[#9013FE] bg-[rgba(144,19,254,0.2)]"
                  : "text-black"
              }`
            }
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M180.7 97.8C185.2 91.7 192.4 88 200 88L440 88C447.6 88 454.8 91.6 459.3 97.8L571.3 249.8C578.1 259 577.4 271.7 569.8 280.2L337.8 536.2C333.3 541.2 326.8 544.1 320 544.1C313.2 544.1 306.8 541.2 302.2 536.2L70.2 280.2C62.5 271.7 61.9 259 68.7 249.8L180.7 97.8zM219.2 137.6C215.9 140.1 215 144.6 217.1 148.1L274.5 243.8L127.3 256C123.2 256.3 120 259.8 120 264C120 268.2 123.2 271.6 127.3 272L319.3 288C319.7 288 320.2 288 320.6 288L512.6 272C516.7 271.7 519.9 268.2 519.9 264C519.9 259.8 516.7 256.4 512.6 256L365.4 243.7L422.8 148.1C424.9 144.6 424 140 420.7 137.6C417.4 135.2 412.8 135.6 410 138.6L320 236.2L229.9 138.6C227.1 135.6 222.5 135.2 219.2 137.6z"
              />
            </svg>
            <span className={`tracking-wide truncate `}>Rewards Hub</span>
          </NavLink>
          <NavLink
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]
              "
            to="/settings"
            end
          >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="currentColor"
                d="M256.5 72C322.8 72 376.5 125.7 376.5 192C376.5 258.3 322.8 312 256.5 312C190.2 312 136.5 258.3 136.5 192C136.5 125.7 190.2 72 256.5 72zM226.7 368L286.1 368L287.6 368C274.7 394.8 279.8 426.2 299.1 447.5C278.9 469.8 274.3 503.3 289.7 530.9L312.2 571.3C313.1 572.9 314.1 574.5 315.1 576L78.1 576C61.7 576 48.4 562.7 48.4 546.3C48.4 447.8 128.2 368 226.7 368zM432.6 311.6C432.6 298.3 443.3 287.6 456.6 287.6L504.6 287.6C517.9 287.6 528.6 298.3 528.6 311.6L528.6 317.7C528.6 336.6 552.7 350.5 569.1 341.1L574.1 338.2C585.7 331.5 600.6 335.6 607.1 347.3L629.5 387.5C635.7 398.7 632.1 412.7 621.3 419.5L616.6 422.4C600.4 432.5 600.4 462.3 616.6 472.5L621.2 475.4C632 482.2 635.7 496.2 629.5 507.4L607 547.8C600.5 559.5 585.6 563.7 574 556.9L569.1 554C552.7 544.5 528.6 558.5 528.6 577.4L528.6 583.5C528.6 596.8 517.9 607.5 504.6 607.5L456.6 607.5C443.3 607.5 432.6 596.8 432.6 583.5L432.6 577.6C432.6 558.6 408.4 544.6 391.9 554.1L387.1 556.9C375.5 563.6 360.7 559.5 354.1 547.8L331.5 507.4C325.3 496.2 328.9 482.1 339.8 475.3L344.2 472.6C360.5 462.5 360.5 432.5 344.2 422.4L339.7 419.6C328.8 412.8 325.2 398.7 331.4 387.5L353.9 347.2C360.4 335.5 375.3 331.4 386.8 338.1L391.6 340.9C408.1 350.4 432.3 336.4 432.3 317.4L432.3 311.5zM532.5 447.8C532.5 419.1 509.2 395.8 480.5 395.8C451.8 395.8 428.5 419.1 428.5 447.8C428.5 476.5 451.8 499.8 480.5 499.8C509.2 499.8 532.5 476.5 532.5 447.8z"
              />
            </svg>
            <span className="tracking-wide truncate">Settings</span>
          </NavLink>
        </nav>
        <div className="mt-auto py-3 relative flex justify-center">
          <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]"></div>
          <div className="w-full flex items-center justify-between px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowLogout((prevData) => !prevData);
              }}
              className="flex items-center border-none"
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLUOsLUl1KPCkVEUge3053igZsJq1ju-W2-opQpp_XlJsxOrbI=s96-c"
                  alt="User avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="text-start">
                {user?.user_metadata && (
                  <span className="text-[0.9rem] block font-semibold truncate overflow-x-hidden max-w-38">
                    {user?.user_metadata.name}
                  </span>
                )}
                <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">
                  {user?.email}
                </p>
              </div>
            </button>
          </div>
          {showLogout && (
            <div className="fixed inset-0 z-50">
              <div
                ref={dropdownRef}
                className="absolute bottom-16 left-6 w-56 bg-white border-[#9013FE] border text-black rounded-lg shadow-lg"
              >
                <button onClick={logout} className="px-4 py-2">
                  <span className="px-4 py-2 cursor-pointer hover:bg-[rgba(255,107,107,0.1)] hover:text-[#FF6B6B] rounded-lg">
                    Log Out
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
