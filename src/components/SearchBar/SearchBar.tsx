import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="relative flex items-center bg-gray-50 rounded-3xl pl-4 h-12">
      <IoSearchOutline />
      <input
        type="text"
        placeholder="Search for something"
        className="w-[300px] py-2 pl-4 pr-4 bg-gray-50 text-sm focus:outline-none rounded-3xl"
      />
    </div>
  );
};

export default SearchBar;
