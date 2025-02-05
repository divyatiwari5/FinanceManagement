import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { TbSettingsFilled } from "react-icons/tb";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import useDeviceType from "../../hooks/useDeviceType";
import { List } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import CreditCard from "../svgs/CreditCard";
import Loan from "../svgs/Loan";
import MoneyIdea from "../svgs/MoneyIdea";
import Transaction from "../svgs/Transaction";
import Investment from "../svgs/Investment";

interface NavItemType {
  icon: IconType;
  label: string;
  href: string;
}


const navItems: NavItemType[] = [
  { icon: AiFillHome, label: "Dashboard", href: "/dashboard" },
  { icon: Transaction, label: "Transactions", href: "/transactions" },
  { icon: FaUser, label: "Accounts", href: "/accounts" },
  { icon: Investment, label: "Investments", href: "/investments" },
  { icon: CreditCard, label: "Credit Cards", href: "/credit-cards" },
  { icon: Loan, label: "Loans", href: "/loans" },
  { icon: HiWrenchScrewdriver, label: "Services", href: "/services" },
  { icon: MoneyIdea, label: "My Privileges", href: "/privileges" },
  { icon: TbSettingsFilled, label: "Setting", href: "/settings" },
];

export const NavBar = () => {
  const { pathname: currentPath } = useLocation();
  const deviceType = useDeviceType();
  if (deviceType === "mobile") {
    return (
      <div className="fixed top-0 right-0 p-4">
        <button className="p-2 rounded-full bg-white shadow-md">
          <List size={32} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed w-64 h-screen bg-white shadow-md">
      <div className="flex items-center gap-3 pl-9 pb-[34px] pt-8">
        <img src="/assets/task.png" alt="Task Logo" className="w-6 h-6" />
        <span className="text-2xl font-extrabold text-primaryIndigo font-inter">
          Soar Task
        </span>
      </div>

      <div className="flex flex-col">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={currentPath === item.href}
          />
        ))}
      </div>
    </div>
  );
};
