import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5';
import SearchBar from './SearchBar/SearchBar';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white">
      <h1 className="text-2xl text-gray-700 font-semibold">Overview</h1>
      
      <div className="flex items-center gap-6">
        <SearchBar />
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <IoSettingsOutline />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <IoNotificationsOutline />
          </button>
          <FaRegUserCircle />

        </div>
      </div>
    </header>
  );
};

export default Header;