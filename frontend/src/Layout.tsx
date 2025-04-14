import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
 

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className=" mt-16 px-4 md:px-14">  
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
