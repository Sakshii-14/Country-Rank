import React from "react";
import Sidebar from'./Sidebar';
import Table from "./Table";

function Layout() {
  return (
    <div className="w-full h-full flex sm:flex-row flex-col gap-6 ">
      <Sidebar/>
      <Table/>
    </div>
  );
}

export default Layout;
