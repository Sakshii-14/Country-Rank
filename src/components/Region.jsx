import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";


function Region() {
  const data = useSelector((state) => state.filterslice.defaultRegions);
  return (
    <div className="flex flex-col gap-3 w-full">
      <label
        htmlFor="region"
        className="text-[#6C727F] font-bold text-[0.75rem]"
      >
        Region
      </label>
      <div className="text-[#6C727F] flex flex-wrap gap-2" id="region">
        {data && data.map((region) => <Button key={region} text={region} />)}
      </div>
    </div>
  );
}

export default Region;
