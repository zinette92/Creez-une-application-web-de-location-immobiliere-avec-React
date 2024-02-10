/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Banner(props) {
  return (
    <section className="banner">
      <img
        className={`banner__image ${
          props.bannerShadow ? "banner__image--shadow" : ""
        } `}
        src={props.bannerImage}
        alt="Image de bannière"
      />
      {props.bannerText && (
        <h1
          className={`banner__text ${
            props.textBorder ? "banner__text--border" : ""
          }`}
        >
          {props.bannerText}
        </h1>
      )}
    </section>
  );
}
