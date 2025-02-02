import { IconType } from 'react-icons';

interface NavItemProps {
  icon: IconType;
  label: string;
  isActive?: boolean;
  href: string;
}

const NavItem = ({ icon: Icon, label, isActive = false, href }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
      ${isActive 
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
    >
      <Icon />
      <span>{label}</span>
    </a>
  );
};

export default NavItem;