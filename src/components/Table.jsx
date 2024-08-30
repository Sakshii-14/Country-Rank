import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Table() {
  const list = useSelector((state) => state.filterslice.countryList);

  return (
    <div className="overflow-y-scroll flex-1 sm:w-[80%]">
      <table className=" w-full sm:border-collapse border-separate border-spacing-3 ">
        <thead className=" border-b-2 border-[#282B30]">
          <tr className="h-[2.5rem] text-[#6C727F] text-[0.875rem]">
            <th className=" align-top text-left sm:w-[10%] w-[40%] sm:border-b-0 border-b-2 border-[#282B30] emoji-text">
              Flag
            </th>
            <th className=" text-left align-top sm:w-[15%] w-[40%] sm:border-b-0 border-b-2 border-[#282B30]">
              Name
            </th>
            <th className=" text-left align-top sm:w-[20%] w-[60%] sm:border-b-0 border-b-2 border-[#282B30]">
              Population
            </th>
            <th className=" text-left align-top sm:w-[20%] w-[40%] sm:border-b-0 border-b-2 border-[#282B30]">
              Area(km&sup2;)
            </th>
            <th className=" lg:text-left lg:align-top lg:w-[20%] lg:visible  collapse ">
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((list) => (
              <tr
                className="text-[#D2D5DA] text-left align-middle "
                key={list.cca3}
              >
              
                  <td className="sm:text-[3.25rem] text-[2.5rem]">
                  <Link to={`country/${list.name.common}`}>
                    {list.flag}
                    </Link>
                  </td>
             

                <td className="sm:text-[1rem] text-[0.875rem]">
                  {list.name.common}
                </td>
                <td className="sm:text-[1rem] text-[0.875rem]">
                  {list.population.toLocaleString()}
                </td>
                <td className="sm:text-[1rem] text-[0.875rem]">
                  {list.area.toLocaleString()}
                </td>
                <td className="lg:text-[1rem] lg:visible collapse">
                  {list.region}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
