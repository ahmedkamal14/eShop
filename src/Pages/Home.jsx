import Landing from "../Components/Home/Landing";
import Brands from "../Components/Home/Brands";
import NewArrivals from "../Components/Home/NewArrivals";
import TopSelling from "../Components/Home/TopSelling";
import Browse from "../Components/Home/Browse";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Landing />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <Browse />
    </>
  );
};

export default Home;
