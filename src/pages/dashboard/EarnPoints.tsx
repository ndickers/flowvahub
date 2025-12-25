import {
  FaAward,
  FaCalendar,
  FaUserPlus,
  FaGift,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaLayerGroup,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  Zap,
  LucideStar,
  LucideShare2,
  LucideUsers,
  LucideCopy,
  LucideCheck,
} from "lucide-react";
import starIcon from "../../assets/yellow-star.png";
import { useState } from "react";
import Modal from "../../components/Modal";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function EarnPoints() {
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const copyUrl = `https://app.flowvahub.com/signup/?ref=${user?.email?.substring(
    0,
    5
  )}2679`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };
  return (
    <div>
      <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
        Your Rewards Journey
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden duration-200">
          <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
              <FaAward className="text-[#9013FE]" />
              Points Balance
            </h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
                5
              </div>
              <img src={starIcon} className="w-10" alt="star icon" />
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">
                  Progress to
                  <span className="font-medium">$5 Gift Card</span>
                </span>
                <span className="font-medium">5/5000</span>
              </div>
              <div className="h-2 bg-[#e5e7eb] rounded-[9999px] overflow-hidden">
                <div
                  className="h-full bg-linear-to-br from-[#9013fe] to-[#FF9FF5] rounded-full transition-[width] duration-500 ease-in-out"
                  style={{ width: "0.1%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                🚀 Just getting started — keep earning points!
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-[0 5px_15px_rgba(0,_0,_0,_0.05)] rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
          <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
              <FaCalendar className="text-[#70D6FF] h-5 w-5" />
              Daily Streak
            </h3>
          </div>
          <div className="p-4">
            <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">
              1 day
            </div>
            <div className="flex mt-4 space-x-2 justify-center">
              <div className="card-days bg-gray-200 text-gray-500 ring-2 ring-[#9013fe] ring-offset-2">
                M
              </div>
              <div className="card-days bg-gray-200 text-gray-500 ">T</div>
              <div className="card-days bg-gray-200 text-gray-500 ">W</div>
              <div className="card-days bg-gray-200 text-gray-500 ">T</div>
              <div className="card-days bg-gray-200 text-gray-500 ">F</div>
              <div className="card-days bg-gray-200 text-gray-500 ">S</div>
              <div className="card-days bg-[#70D6FF] border-4 border-cyan-200 text-white ">
                S
              </div>
            </div>
            <p className="text-[0.875rem] text-gray-600 text-center mt-3">
              Check in daily to to earn +5 points
            </p>
            <button className="mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-[#9013fe] text-white hover:shadow-[0_4px_12px_rgba(144,_19,_254,_0.2)] hover:translate-y-[-2px]">
              <Zap stroke="currentColor" />
              Claim Today's Points
            </button>
          </div>
        </div>

        <div className="hover:-translate-y-0.75 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-[#f3f4f6] transition-all duration-300 ease-in-out">
          <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
            <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-[1.25rem] font-bold relative z-2">
                Top Tool Spotlight
              </h3>
              <div className="overflow-hidden relative rounded-full size-10 md:size-16">
                <img src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png" />
              </div>
            </div>
            <p className="text-lg">
              <strong> Reclaim</strong>
            </p>
          </div>
          <div className="p-4">
            <div className="flex justify-start mb-4">
              <div className="w-6 h-6 animate-pulse bg-[#eef2ff] rounded-md flex items-center justify-center mr-4 shrink-0 text-[#9013fe]">
                <FaCalendar stroke="currentColor" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold">
                  Automate and Optimize Your Schedule
                </h4>
                <p className="text-[0.875rem] text-gray-600">
                  Reclaim.ai is an AI-powered calendar assistant that
                  automatically schedules your tasks, meetings, and breaks to
                  boost productivity. Free to try — earn Flowva Points when you
                  sign up!
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-1.25 flex gap-2 justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
            <NavLink
              to="/register"
              className="bg-[#9013fe] text-nowrap hover:bg-[#8628da] text-white flex gap-1.5 items-center  py-2 px-4 rounded-full font-semibold text-sm"
            >
              <FaUserPlus fill="currentColor" />
              Sign up
            </NavLink>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-nowrap text-white flex gap-1.5 items-center  py-2 px-4 rounded-full font-semibold text-sm"
            >
              <FaGift fill="currentColor" />
              Claim 50 pts
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
          Earn More Points
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="transition-all hover:border-[#9013fe] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                <LucideStar stroke="currentColor" />
              </div>
              <div>
                <h3 className="font-semibold">Refer and win 10,000 points!</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">
                    Invite 3 friends by Nov 20 and earn a chance to be one of 5
                    winners of{" "}
                    <span className="text-[#9013fe]">10,000 points</span>.
                    Friends must complete onboarding to qualify.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="transition-all hover:border-[#9013fe] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(144,19,254,0.1)] text-[#9013fe]">
                <LucideShare2 stroke="currentColor" />
              </div>
              <div>
                <h3 className="font-semibold">Share Your Stack</h3>
                <p className="text-xs text-gray-500">Earn +25 pts</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Share your tool stack</p>
                </div>
                <button
                  onClick={() => {
                    setOpenShare(true);
                  }}
                  className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0"
                >
                  <LucideShare2 stroke="currentColor" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
          Refer & Earn
        </h2>
        <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)]  rounded-2xl hover:translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
          <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
            <div className="flex items-center gap-3">
              <LucideUsers stroke="#9301fe" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Share Your Link
                </h3>
                <p className="text-gray-500 text-sm">
                  Invite friends and earn 25 points when they join!
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-6">
              <div className="flex justify-between mb-4">
                <div className="text-center p-2 flex-1">
                  <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                    0
                  </div>
                  <div className="text-gray-600">Referrals</div>
                </div>
                <div className="text-center p-2 flex-1">
                  <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                    0
                  </div>
                  <div className="text-gray-600">Points Earned</div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm mb-2 text-gray-700">
                  Your personal referral link:
                </p>
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1  border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10"
                    value={copyUrl}
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                  >
                    {copied ? (
                      <LucideCheck className="text-green-600" />
                    ) : (
                      <LucideCopy className="text-[#9301fe]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="social-buttons"
                  style={{ background: "rgb(24, 119, 242)" }}
                >
                  <FaFacebookF />
                </button>
                <button
                  className="social-buttons"
                  style={{ background: "black" }}
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </button>
                <button
                  className="social-buttons"
                  style={{ background: "rgb(0, 119, 181)" }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className="social-buttons"
                  style={{ background: "rgb(37, 211, 102)" }}
                >
                  <FaWhatsapp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal open={open} setOpen={setOpen}>
        <div className="ant-modal-header">
          <div className="ant-modal-title" id=":r1:">
            <h1 className="md:text-lg font-semibold">Claim Your 25 Points</h1>
          </div>
        </div>
        <div>
          <p className="text-[0.9rem] text-[#6c757d]">
            Sign up for Reclaim (free, no payment needed), then fill the form
            below:
          </p>
          <li className="text-[0.9rem] text-[#6c757d]">
            <ul>1️⃣ Enter your Reclaim sign-up email.</ul>
            <ul>
              2️⃣ Upload a screenshot of your Reclaim profile showing your email.
            </ul>
          </li>
          <p className="text-[0.9rem] text-[#6c757d]">
            After verification, you’ll get 25 Flowva Points! 🎉😊
          </p>
          <form className="mt-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-[#111827]"
            >
              Email used on Reclaim
            </label>
            <div className="relative group w-full mb-5">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className=" peer w-full border text-base py-2.5 px-3.5  border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]"
                required
                value={email}
              />
              <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
            </div>
            <label
              htmlFor="file"
              className="block text-sm mb-2 font-medium text-[#111827]"
            >
              Upload screenshot (mandatory)
            </label>
            <label className="p-2 cursor-pointer hover:bg-[rgba(29,28,28,0.05)] block border border-dashed border-[#e9ecef] rounded-lg bg-[#f9f9f9] transition-all duration-200">
              <p className="text-center flex justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-cloud-download"
                >
                  <path d="M12 13v8l-4-4"></path>
                  <path d="m12 21 4-4"></path>
                  <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path>
                </svg>
                <span className="text-base">Choose file</span>
              </p>
              <input className="hidden" type="file" accept="image/*" required />
            </label>
            <div className="flex gap-3 justify-end mt-4">
              <button
                onClick={() => {
                  setOpen(false);
                }}
                type="button"
                className="p-[0.5rem_1rem] rounded-lg font-semibold transition-all duration-200 hover:bg-[#d1d5db] bg-[#e9ecef] text-[#020617]"
              >
                Cancel
              </button>
              <button className="p-[0.5rem_1rem] rounded-lg font-semibold transition-all duration-200 bg-[#9103fe] text-white hover:bg-[#FF8687]">
                Submit Claim
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal open={openShare} setOpen={setOpenShare}>
        <div
          style={{
            top: "20px",
            maxWidth: "380px",
            margin: "0px auto",
            padding: "5px",
            width: "100%",
            transformOrigin: "441px -29.75px 0px",
          }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Share Your Stack
            </h2>
            <div className="flex justify-center">
              <div className="w-10 h-10  rounded-full flex justify-center items-center mb-4 text-[1rem] bg-[#E9D4FF] text-[#9013FE]">
                <FaLayerGroup fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              You have no stack created yet, go to Tech Stack to create one.
            </p>
            <div className="space-y-2 h-full m-h-[300px] overflow-y-auto"></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
