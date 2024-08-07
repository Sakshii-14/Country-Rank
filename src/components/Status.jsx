import React from "react";
import "../styles/checkbox.css";
import { useDispatch } from "react-redux";
import { filterbyStatus } from "../features/filterSlice";

function Status() {
  const dispatch=useDispatch();

  const handlecheck=(e)=>{
    dispatch(filterbyStatus({checked:e.target.checked,name:e.target.name}))
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      <label
        htmlFor="status"
        className="text-[#6C727F] font-bold text-[0.75rem]"
      >
        Status
      </label>
      <div className="text-[0.875rem] text-[#D2D5DA] flex flex-col gap-3 ">
        <div className="flex gap-3 justify-start items-center">
          <input
            type="checkbox"
            name="unMember"
            id="unMember"
            className="hidden"
            onChange={handlecheck}
          />
          <label
            htmlFor="unMember"
            className="flex justify-center items-center gap-3 custom-label"
          >
            <span className="checkbox-custom"></span>
            Member of the United Nations
          </label>
        </div>
        <div className="flex gap-3 justify-start items-center">
          <input
            type="checkbox"
            name="independent"
            id="independent"
            className="hidden"
            onChange={handlecheck}
          />
          <label
            htmlFor="independent"
            className="flex justify-center items-center gap-3 custom-label"
          >
            <span className="checkbox-custom"></span>
            Independent
          </label>
        </div>
      </div>
    </div>
  );
}

export default Status;
