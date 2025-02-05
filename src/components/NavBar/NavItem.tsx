import React from "react";
import { IconType } from "react-icons";

interface NavItemProps {
  icon: IconType | React.FC<{ isActive?: boolean }>;
  label: string;
  isActive?: boolean;
  href: string;
}

const NavItem = ({
  icon: Icon,
  label,
  isActive = false,
  href,
}: NavItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 transition-colors h-[60px] pl-9
      ${
        isActive
          ? "text-primaryBlack border-l-4 border-primaryBlack rounded-tr-[10px] rounded-br-[10px]"
          : "text-darkGrey"
      }`}
    >
      {React.isValidElement(<Icon />) 
        ? <Icon size={25} /> 
        : <Icon isActive={isActive} />}
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

export default NavItem;
