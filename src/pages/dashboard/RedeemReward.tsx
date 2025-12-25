import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import Card from "../../components/Card";

const rewards = [
  {
    icon: "💸",
    title: "$5 Bank Transfer",
    content: "The $5 equivalent will be transferred to your bank account.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "💸",
    title: "$5 PayPal International",
    content:
      "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "🎁",
    title: "$5 Virtual Visa Card",
    content:
      "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "🎁",
    title: "$5 Apple Gift Card",
    content:
      "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "🎁",
    title: "$5 Google Play Card",
    content:
      "Use this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "🎁",
    title: "$5 Amazon Gift Card",
    content:
      "Get a $5 digital gift card to spend on your favorite tools or platforms.",
    points: "⭐ 5000 pts",
    button: "Locked",
  },
  {
    icon: "🎁",
    title: "$5 Amazon Gift Card",
    content:
      "Get a $10 digital gift card to spend on your favorite tools or platforms.",
    points: "⭐ 10000 pts",
    button: "Locked",
  },
  {
    icon: "📚",
    title: "Free Udemy Course",
    content: "Coming Soon!",
    points: "⭐ 0 pts",
    button: "Coming Soon",
  },
];

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
                  {rewards.length}
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
                  {
                    rewards.filter((reward) => reward.button === "UnLocked")
                      .length
                  }
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
                  {
                    rewards.filter((reward) => reward.button === "Locked")
                      .length
                  }
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
                  {
                    rewards.filter((reward) => reward.button === "Coming Soon")
                      .length
                  }
                </span>
              </div>
            )}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {rewards.map((reward, index) => (
              <Card key={index} {...reward} />
            ))}
          </TabPanel>
          <TabPanel className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {rewards
              .filter((reward) => reward.button === "UnLocked")
              .map((reward, index) => (
                <Card key={index} {...reward} />
              ))}
          </TabPanel>
          <TabPanel className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {rewards
              .filter((reward) => reward.button === "Locked")
              .map((reward, index) => (
                <Card key={index} {...reward} />
              ))}
          </TabPanel>
          <TabPanel className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {rewards
              .filter((reward) => reward.button === "Coming Soon")
              .map((reward, index) => (
                <Card key={index} {...reward} />
              ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
