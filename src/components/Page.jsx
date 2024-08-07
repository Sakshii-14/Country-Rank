import React from "react";
import "../styles/container.css";
import logo from "../assets/Logo.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Page() {
  const { name } = useParams();
  const [data, setdata] = useState();
  const [neighbour, setneighbour] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const data = await response.json();

      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [name]);

  useEffect(() => {
    const getBorders = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(
            ","
          )}`
        );
        const countries = await response.json();
        setneighbour(countries);
      } catch (error) {
        console.log(error);
      }
    };
    getBorders();
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="app-container py-6 lg:gap-[6rem] md:gap-[3rem] gap-[2rem] bg-contain overflow-y-scroll  ">
      <img src={logo} alt="Logo" className="sm:mt-6" />
      <div className="bg-[#1B1D1F] w-full md:w-[70%] lg:w-[60%] min-h-full border border-[#282B30] flex flex-col items-center rounded-xl gap-8">
        <div className=" h-[12rem] sm:w-[16rem] w-[10rem] rounded-xl -mt-[6%]">
          <img
            src={data[0].flags.png ? data[0].flags.png : ""}
            alt="flag"
            className="h-full w-full rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center leading-[2rem]">
          <p className="text-[2rem] text-[#D2D5DA]">{data[0].name.common}</p>
          <p className="text-[#D2D5DA] text-[1rem]">{data[0].name.official}</p>
        </div>
        <div className="flex sm:gap-[2.5rem] gap-1 justify-center items-center w-full">
          <div className="flex text-[#CDD5E0] lg:px-5 sm:px-2 px-1 lg:rounded-xl rounded-lg bg-[#282B30] lg:gap-5 sm:gap-4 w-auto justify-center items-center py-2  ">
            <p className=" border-[#1B1D1F] border-r text-[0.875rem] leading-9  sm:pr-6 pr-2 ">
              Population
            </p>
            <p className="text-[#CDD5E0] text-[1rem] pl-1">
              {data[0].population.toLocaleString()}
            </p>
          </div>
          <div className="flex text-[#CDD5E0] lg:px-5 sm:px-2 px-1 lg:rounded-xl rounded-lg bg-[#282B30] lg:gap-5 sm:gap-4 w-auto justify-center items-center py-2  ">
            <p className=" border-[#1B1D1F] border-r text-[0.875rem] leading-9 text-nowrap sm:pr-6 pr-2 ">
              Area (km&sup2;)
            </p>
            <p className="text-[#CDD5E0] text-[1rem pl-1">
              {data[0].area.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="w-full border-t-[1px] flex flex-col border-[#282B30]  ">
          <div className="text-[0.875rem] w-full flex justify-between items-center border-b-[1px] px-4 py-6 border-[#282B30]">
            <p className=" text-[#6C727F] font-semibold">Capital</p>
            <span className="text-[#CDD5E0]">{data[0].capital[0]}</span>
          </div>
          <div className="text-[0.875rem] w-full flex justify-between items-center border-b-[1px] px-4 py-6 border-[#282B30]">
            <p className=" text-[#6C727F] font-semibold">Subregion</p>
            <span className="text-[#CDD5E0]">{data[0].subregion}</span>
          </div>
          <div className="text-[0.875rem] w-full flex justify-between items-center border-b-[1px] px-4 py-6 border-[#282B30]">
            <p className=" text-[#6C727F] font-semibold">Language</p>
            <span className="text-[#CDD5E0]">
              {Object.values(data[0].languages).join(", ")}
            </span>
          </div>
          <div className="text-[0.875rem] w-full flex justify-between items-center border-b-[1px] px-4 py-6 border-[#282B30]">
            <p className=" text-[#6C727F] font-semibold">Currencies</p>
            {Object.values(data[0].currencies).map((item, index) => (
              <span className="text-[#CDD5E0]" key={index}>
                {item.name}
              </span>
            ))}
          </div>
          <div className="text-[0.875rem] w-full flex justify-between items-center border-b-[1px] px-4 py-6 border-[#282B30]">
            <p className=" text-[#6C727F] font-semibold">Continents</p>
            <span className="text-[#CDD5E0]">{data[0].continents[0]}</span>
          </div>
          <div className="text-[0.875rem] w-full flex flex-col gap-4 px-4 py-6 flex-1">
            <p className=" text-[#6C727F] font-semibold">
              Neighbouring countries
            </p>
            <div className=" flex flex-wrap gap-3">
              {neighbour.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="h-[4rem] w-[5rem] rounded-sm overflow-hidden ">
                    <img
                      src={item.flags.png}
                      alt="flag"
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-[#CDD5E0] text-[0.75rem]">
                    {item.name.common}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
