import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NaturalFood from "./NaturalFood/NaturalFood";
import NaturalOffer from "./NaturalOffer/NaturalOffer";
import AboutUs from "./AboutUs/AboutUs";
import Categories from "./Categories/Categories";
import Testimonials from "./Testimonials/Testimonials";
import Offer from "./Offer/Offer";
import EcoFriendly from "./EcoFriendly/EcoFriendly";
import ChooseCategory from "./ChooseCategory/ChooseCategory";
import News from "./News/News";
function Home() {
  return (
    <>
      <Header />
      <main>
        <NaturalFood />
        <NaturalOffer />
        <AboutUs />
        <Categories />
        <Testimonials />
        <Offer />
        <EcoFriendly />
        <ChooseCategory />
        <News />
      </main>
      <Footer subscribe={true} />
    </>
  );
}
export default Home;
