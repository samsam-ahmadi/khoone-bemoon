import React from "react";
import MetaTags from "../components/MetaTags";
import Header from "layouts/index/Header";
import StayAtHome from "layouts/index/StayAtHome";
import About from "layouts/index/About";
import Paints from "layouts/index/Paints";
import HowToPaint from "layouts/index/HowToPaint";

const Home = () => {
  return (
    <>
      <MetaTags title="خودتو بکش و دوستاتو دعوت کن" description="در کمپین آزاد #خونه_بمون برای جلوگیری از گسترش کرونا, با استفاده از قالب، عکس خودتو بکش، در اینستاگرام و توییتر منتشر کن و دوستاتو دعوت کن. یادتون نره دوستانتون رو به ماندن در خانه دعوت کنید." pageUrl="/" />
      <Header />
      <main>
        <StayAtHome />
        <About />
        <Paints />
        <HowToPaint />
      </main>
    </>
  );
};

export default Home;
