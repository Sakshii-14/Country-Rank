import React from "react";
import '../styles/container.css'
import { useSelector,useDispatch } from "react-redux";
import { filterbyRegion } from "../features/filterSlice";

function Button({ text }) {
  const selected=useSelector((state)=>state.filterslice.selectedRegion)
  const dispatch=useDispatch()
  const handleclick=(e)=>{
     dispatch(filterbyRegion({region:e.target.name}))
  }
  return (
    
    <button className={`text-[0.875rem] px-3 py-2 rounded-xl font-semibold ${selected.includes(text)?'selected':''}`}  onClick={handleclick} name={text}>
      {text}
    </button>
  );
}

export default Button;
