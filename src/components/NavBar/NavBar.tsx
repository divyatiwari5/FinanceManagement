import { AiFillHome } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { FaUser, FaChartLine, FaCreditCard } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { IoMdPricetags } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import NavItem from './NavItem';
import { IconType } from 'react-icons';

interface NavItemType {
  icon: IconType;
  label: string;
  href: string;
}

const navItems: NavItemType[] = [
  { icon: AiFillHome, label: 'Dashboard', href: '/dashboard' },
  { icon: BiTransfer, label: 'Transactions', href: '/transactions' },
  { icon: FaUser, label: 'Accounts', href: '/accounts' },
  { icon: FaChartLine, label: 'Investments', href: '/investments' },
  { icon: FaCreditCard, label: 'Credit Cards', href: '/credit-cards' },
  { icon: GiReceiveMoney, label: 'Loans', href: '/loans' },
  { icon: MdMiscellaneousServices, label: 'Services', href: '/services' },
  { icon: IoMdPricetags, label: 'My Privileges', href: '/privileges' },
  { icon: IoSettings, label: 'Setting', href: '/settings' },
];

export const NavBar = () => {
  const currentPath = '/dashboard';

  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <div className="flex items-center gap-3 px-4 mb-8">
        <FaChartLine />
        <span className="text-2xl font-extrabold text-gray-800 font-inter">Soar Task</span>
      </div>
      
      <div className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavItem
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
