import React from "react";
import SortSelect from "./SortSelect";
import Status from "./Status";
import Region from "./Region";

function Sidebar() {
  return (
    <aside className="sm:w-[20%] w-full h-auto pr-2 flex flex-col justify-start items-center gap-[2rem] ">
      <SortSelect />
      <Region />
      <Status />
    </aside>
  );
}

export default Sidebar;
