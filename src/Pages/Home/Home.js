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
      {/* <Info></Info>
      <Services></Services>
      <Service2></Service2>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
