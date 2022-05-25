import React from "react";
import ContactForm from "../Contact/ContactForm";
import Review from "../Dashboard/Review";
import Feature from "../Feature/Feature";
import Items from "../Items/Items";
import Footer from "../Shared/Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Feature></Feature>
      <ContactForm></ContactForm>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
