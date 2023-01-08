import React from "react";
import Footer from "../components/Footer";
import BandeauTopAccueil from "../components/Home/BandeauTopAccueil";
import NewsletterComponent from "../components/Home/NewsletterComponent";
import SitePresentation from "../components/Home/SitePresentation";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <BandeauTopAccueil />
      <SitePresentation />
      <NewsletterComponent />
      <Footer />
    </div>
  );
};

export default Home;
