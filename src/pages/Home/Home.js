import React from "react";
import Banner from "../../components/Banner/Banner";
import banner_home_menu from "../../assets/images/banner_home_menu.png";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div className="home">
      <Banner bannerImage={ banner_home_menu } bannerText={ "Chez vous, partout et ailleurs" } textBorder={ true } bannerShadow={ true }/>
      <Card />
</div>
  );
}
