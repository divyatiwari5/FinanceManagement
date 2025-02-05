import { colors } from "../../style/global/colors";
import { CaretRight, PaperPlaneTilt } from "@phosphor-icons/react";
import { useState } from "react";

interface TransferContact {
  name: string;
  role: string;
  avatar: string;
}

const contacts: TransferContact[] = [
  {
    name: "Livia Bator",
    role: "CEO",
    avatar: "/assets/person1.png",
  },
  {
    name: "Randy Press",
    role: "Director",
    avatar: "/assets/person2.png",
  },
  {
    name: "Workman",
    role: "Designer",
    avatar: "/assets/person3.png",
  },
];

export const QuickTransfer = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="h-full">
      <h2 className="text-[22px] leading-[26px] text-primaryIndigo font-semibold text-left mb-[18px]">
        Quick Transfer
      </h2>
      <div className="bg-white rounded-xl p-6 h-[calc(100%-44px)]">
        <div className="flex gap-8 mb-6 lg:mb-7">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-[70px] h-[70px] rounded-full mb-2"
              />
              <p className="font-semibold text-sm">{contact.name}</p>
              <p className="text-gray-500 text-sm">{contact.role}</p>
            </div>
          ))}
          <div className="bg-white rounded-3xl shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] h-[50px] w-[50px] content-center m-auto">
            <CaretRight
              size={16}
              className="ml-[18px]"
              color={colors.primaryBlue}
              weight="bold"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <label className="text-[#7C8DB5] text-base whitespace-nowrap">
            Write Amount
          </label>

          <div className="flex items-center gap-4 bg-[#F9F9F9] rounded-[50px] pl-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Write Amount"
              className="flex-1 py-3 bg-transparent w-32 focus:outline-none text-[#7C8DB5]"
            />
            <button className="bg-primaryBlack text-white rounded-[50px] px-6 py-[14px] font-medium flex items-center gap-2">
              Send
              <PaperPlaneTilt size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
