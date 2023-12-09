
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";
import NavBar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
};

export default App;
