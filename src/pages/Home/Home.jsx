import React from "react";
import Banner from "../../components/Banner/Banner";
import banner_home_menu from "../../assets/images/banner_home_menu.png";
import Card from "../../components/Card/Card";
import Logements from "../../Data/logements.json";

export default function Home() {
  return (
    <div className="home">
      <Banner
        bannerImage={banner_home_menu}
        bannerText={"Chez vous, partout et ailleurs"}
        textBorder={true}
        bannerShadow={true}
      />
      <section className="card">
        {Logements.map((data, index) => (
          <Card
            cardId={data.id}
            cardCover={data.cover}
            cardTitle={data.title}
            linkIndex={index}
            key={data.id}
          />
        ))}
      </section>
    </div>
  );
}
