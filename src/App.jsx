import logo from "./assets/Logo.svg";
import Header from "./components/Header";
import Layout from "./components/Layout";
import useCountryInfo from "./customhook/useCountryInfo";
import { useDispatch } from "react-redux";
import { getList, sortBy } from "./features/filterSlice";
import { useEffect } from "react";
import "./styles/container.css";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useCountryInfo();

  useEffect(() => {
    if (list.length > 0) {
      dispatch(getList({ list }));
      dispatch(sortBy({ value: "population" }));
    }
  }, [list, dispatch]);

  if (loading) {
    return <div className="flex app-container h-full  w-full justify-center items-center ">
      <Loader/>
      </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app-container md:py-[4.5rem] sm:py-[2rem] py-1 sm:px-[2rem] lg:gap-[4rem] md:gap-[3rem] gap-[2rem] sm:bg-contain bg-[length:130vw_100px] ">
      <img src={logo} alt="Logo" className="sm:mt-9" />
      <div className="bg-[#1B1D1F] w-full h-full  border border-[#282B30] lg:px-8 md:px-5 sm:px-3 px-2 py-5 rounded-xl flex flex-col gap-5 overflow-hidden">
        <Header />
        <Layout />
      </div>
    </div>
  );
}

export default App;
