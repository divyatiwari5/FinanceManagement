import { List } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import useDeviceType from "../../hooks/useDeviceType";
import NavItem from "./NavItem";
import { routes } from "../../routes/config";

export const NavBar = () => {
  const { pathname: currentPath } = useLocation();
  const deviceType = useDeviceType();

  if (deviceType !== "desktop") {
    return (
      <div className="fixed top-0 left-0 p-4">
        <List size={18} />
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
        {routes.map((route) => (
          <NavItem
            key={route.path}
            icon={route.icon}
            label={route.title}
            href={route.path}
            isActive={currentPath === route.path}
          />
        ))}
      </div>
    </div>
  );
};
