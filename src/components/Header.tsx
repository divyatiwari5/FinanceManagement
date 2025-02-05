import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { colors } from "../style/global/colors";
import { routes } from "../routes/config";

const Header = () => {
  const { pathname } = useLocation();
  const currentRoute = routes.find(route => route.path === pathname);
  
  return (
    <header className="flex flex-col lg:flex-row items-center lg:justify-between px-8 py-4 bg-white">
      <div className="w-full lg:w-auto flex justify-center lg:justify-start items-center relative mb-5 lg:mb-0">
        <h1 className="text-xl lg:text-[28px] text-primaryIndigo font-semibold">
          {currentRoute?.title || "Overview"}
        </h1>
        <img
          src="/assets/person1.png"
          alt="header-profile"
          className="w-[35px] h-[35px] rounded-full lg:hidden absolute right-0"
        />
      </div>

      <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-6">
        <SearchBar />

        <div className="hidden lg:flex items-center gap-4">
          <button className="px-3 py-[13px] bg-lightBlue hover:bg-gray-100 rounded-full h-[50px] w-[50px]">
            <IoSettingsOutline color={colors.primaryBlue} size={25} />
          </button>
          <button className="p-3 bg-lightBlue hover:bg-gray-100 rounded-full h-[50px] w-[50px]">
            <IoNotificationsOutline color={colors.flourescentBlue} size={25} />
          </button>
          <img
            src="/assets/person1.png"
            alt="header-profile"
            className="w-[60px] h-[60px] rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
