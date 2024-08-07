import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchList } from "../features/filterSlice";

function Header() {
  const list = useSelector((state) => state.filterslice.countryList);
  const Originallist = useSelector((state) => state.filterslice.List);
  const dispatch = useDispatch();

  const handlesearch = (searchText) => {
    const regex = searchText ? new RegExp(searchText, "i") : null;
    const newList = regex
      ? list.filter(
          (country) =>
            regex.test(country.name.common) ||
            regex.test(country.name.official) ||
            regex.test(country.region) ||
            regex.test(country.subregion)
        )
      : Originallist;
    dispatch(searchList({newList}));
  };

  return (
    <div className=" w-full text-[#6C727F] flex items-center justify-between">
      <p className="text-[1rem] font-semibold sm:w-[60%] w-[40%]">
        Found {list.length} countries
      </p>
      <div className="h-[3rem] flex gap-3 sm:w-[25%] w-[50%] justify-end items-center bg-[#282B30] rounded-xl px-2 py-2 has-[:focus]:border-[#6C727F] has-[:focus]:border-[2px]">
        <img src="Search.svg" alt="" />
        <input
          type="text"
          className="h-full w-full text-[1rem] font-medium focus:outline-none px-2 text-[#D2D5DA] rounded-xl bg-[#282B30] placeholder:text-[0.875rem] placeholder:font-medium placeholder:tracking-wide"
          placeholder="Search by Name,Region,Subregion"
          onChange={(e) => handlesearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
