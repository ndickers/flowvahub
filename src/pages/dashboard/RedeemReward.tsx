import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
export default function RedeemReward() {
  return (
    <div>
      <h2 className="text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
        Redeem Your Points
      </h2>

      <TabGroup vertical>
        <TabList className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide sm:overflow-visible">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`py-0.5 md:py-1.5 px-1.5 text-nowrap flex items-center focus:outline-none focus:ring-0 ${
                  selected
                    ? "text-[#9031fe] border-b-3 bg-[rgba(144,19,254,0.06)] rounded-t-md border-[#9031fe]"
                    : "text-gray-500"
                }`}
              >
                All Rewards
                <span
                  className={`ml-2 text-xs rounded-full md:h-5 px-2 inline-flex justify-center items-center ${
                    selected
                      ? "bg-[#9031fe]/10  font-semibold"
                      : "bg-[#E2E8F0] text-[#CBD5E0]"
                  }`}
                >
                  8
                </span>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`py-0.5 px-1.5 flex items-center focus:outline-none focus:ring-0 ${
                  selected
                    ? "text-[#9031fe] border-b-3 bg-[rgba(144,19,254,0.06)] rounded-t-md border-[#9031fe]"
                    : "text-gray-500"
                }`}
              >
                Unlocked
                <span
                  className={`ml-2 text-xs rounded-full md:h-5 px-2 inline-flex justify-center items-center ${
                    selected
                      ? "bg-[#9031fe]/10  font-semibold"
                      : "bg-[#E2E8F0] text-[#CBD5E0]"
                  }`}
                >
                  8
                </span>
              </div>
            )}
          </Tab>

          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`py-0.5 px-1.5 flex items-center focus:outline-none focus:ring-0 ${
                  selected
                    ? "text-[#9031fe] border-b-3 bg-[rgba(144,19,254,0.06)] rounded-t-md border-[#9031fe]"
                    : "text-gray-500"
                }`}
              >
                Locked
                <span
                  className={`ml-2 text-xs rounded-full md:h-5 px-2 inline-flex justify-center items-center ${
                    selected
                      ? "bg-[#9031fe]/10  font-semibold"
                      : "bg-[#E2E8F0] text-[#CBD5E0]"
                  }`}
                >
                  7
                </span>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`py-0.5 px-1.5 text-nowrap flex items-center focus:outline-none focus:ring-0 ${
                  selected
                    ? "text-[#9031fe] border-b-3 bg-[rgba(144,19,254,0.06)] rounded-t-md border-[#9031fe]"
                    : "text-gray-500"
                }`}
              >
                Coming Soon
                <span
                  className={`ml-2 text-xs rounded-full md:h-5 px-2 inline-flex justify-center items-center ${
                    selected
                      ? "bg-[#9031fe]/10  font-semibold"
                      : "bg-[#E2E8F0] text-[#CBD5E0]"
                  }`}
                >
                  1
                </span>
              </div>
            )}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:-translate-y-1.25 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                💸
              </div>
              <h4 className="text-center text-[1.1rem] font-semibold mb-2">
                $5 Bank Transfer
              </h4>
              <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                The $5 equivalent will be transferred to your bank account.
              </p>
              <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                ⭐ 5000 pts
              </div>
              <button
                disabled
                className="w-full font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
              >
                Locked
              </button>
            </div>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
        </TabPanels>
      </TabGroup>

      <div></div>
    </div>
  );
}
