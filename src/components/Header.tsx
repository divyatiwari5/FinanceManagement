import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import SearchBar from "./SearchBar/SearchBar";
import { colors } from "../style/global/colors";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white">
      <h1 className="text-[28px] text-primaryIndigo font-semibold">Overview</h1>

      <div className="flex items-center gap-6">
        <SearchBar />

        <div className="flex items-center gap-4">
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
