import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

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
    <Link
      to={href}
      className={`flex items-center gap-3 transition-colors h-[60px] pl-9
      ${
        isActive
          ? "text-primaryBlack border-l-4 border-primaryBlack rounded-tr-[10px] rounded-br-[10px]"
          : "text-darkGrey"
      }`}
    >
      {('prototype' in Icon) 
        ? React.createElement(Icon as IconType, { size: 25, color: isActive ? "#232323" : "#B1B1B1" })
        : React.createElement(Icon as React.FC<{ isActive?: boolean }>, { isActive })}
      <span className="text-lg font-medium">{label}</span>
    </Link>
  );
};

export default NavItem;
