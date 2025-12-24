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
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
        </TabPanels>
      </TabGroup>

      <div></div>
    </div>
  );
}
