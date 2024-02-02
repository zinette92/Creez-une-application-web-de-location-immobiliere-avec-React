/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Banner({
  bannerImage,
  bannerText,
  bannerShadow,
  textBorder,
}) {
  return (
    <section className="banner">
      <img
        className={`banner__image ${
          bannerShadow ? "banner__image--shadow" : ""
        } `}
        src={bannerImage}
        alt="Image de bannière"
      />
      {bannerText && (
        <h1
          className={`banner__text ${textBorder ? "banner__text--border" : ""}`}
        >
          {bannerText}
        </h1>
      )}
    </section>
  );
}
