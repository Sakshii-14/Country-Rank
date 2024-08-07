import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../features/filterSlice";

function SortSelect() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="sort" className="text-[#6C727F] font-bold text-[0.75rem]">
        Sort by
      </label>
      <select
        onChange={(e) => dispatch(sortBy({ value: e.target.value }))}
        name="sort"
        id="sort"
        className=" px-3 py-2 bg-transparent border-[#282B30] focus:outline-none appearance-none border-[2px] rounded-xl text-[#D2D5DA] text-[0.875rem] bg-[url('Expand_down.svg')] bg-no-repeat bg-right bg-[length:20px_20px] "
      >
        <option value="population" className="bg-[#282B30] text-[#D2D5DA]">
          Population
        </option>
        <option value="name" className="bg-[#282B30] text-[#D2D5DA]">
          Name
        </option>
        <option value="area" className="bg-[#282B30] text-[#D2D5DA]">
          Area
        </option>
      </select>
    </div>
  );
}

export default SortSelect;
