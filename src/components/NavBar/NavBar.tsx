import { AiFillHome } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { FaUser, FaChartLine, FaCreditCard } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import useDeviceType from "../../hooks/useDeviceType";
import { List } from "@phosphor-icons/react";

interface NavItemType {
  icon: IconType;
  label: string;
  href: string;
}

const navItems: NavItemType[] = [
  { icon: AiFillHome, label: "Dashboard", href: "/dashboard" },
  { icon: BiTransfer, label: "Transactions", href: "/transactions" },
  { icon: FaUser, label: "Accounts", href: "/accounts" },
  { icon: FaChartLine, label: "Investments", href: "/investments" },
  { icon: FaCreditCard, label: "Credit Cards", href: "/credit-cards" },
  { icon: GiReceiveMoney, label: "Loans", href: "/loans" },
  { icon: MdMiscellaneousServices, label: "Services", href: "/services" },
  { icon: IoMdPricetags, label: "My Privileges", href: "/privileges" },
  { icon: IoSettings, label: "Setting", href: "/settings" },
];

export const NavBar = () => {
  const currentPath = "/dashboard";
  const deviceType = useDeviceType();
  console.log(deviceType);
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
    <div className="fixed w-64 h-screen bg-white shadow-md p-5">
      <div className="flex items-center gap-3 px-4 mb-8">
        <FaChartLine />
        <span className="text-2xl font-extrabold text-gray-800 font-inter">
          Soar Task
        </span>
      </div>

      <div className="flex flex-col gap-1">
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
