import "./Styles/App.css";
import { Outlet } from "react-router-dom";
import SalesAdd from "./Components/SalesAdd";
import Header from "./Components/Header";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import CopyRights from "./Components/CopyRights";

function App() {
  return (
    <>
      <SalesAdd />
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
