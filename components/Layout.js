import Navbar from "./Navbar";
import MainFooter from "./MianFooter"

const Layout = ({ children }) => {
  return (
    <div className="bg-[#dbc2c2] overflow-x-hidden">
      <Navbar /> 
      <div> {children} </div>
      <MainFooter/>
    </div>
  );
};

export default Layout;
