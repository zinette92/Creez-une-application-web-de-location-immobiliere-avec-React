import { React, useState } from "react";
import collapse_arrow from "../../assets/images/toggle_arrow.png";
export default function Collapse({ title, description, equipments }) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const setCollapseState = () => {
    if (!isCollapseOpen) {
      setIsCollapseOpen(true);
    } else {
      setIsCollapseOpen(false);
    }
  };

  return (
    <div className="collapse" onClick={setCollapseState}>
      <div className="collapse__header">
        <h3 className="collapse__header--title"> {title}</h3>
        <img
          className={`collapse__header--toggle ${
            isCollapseOpen ? "collapse__open" : "collapse__close"
          }`}
          src={collapse_arrow}
          alt="Collapse arrow"
        />
      </div>
      <div
        className={`collapse__content ${
          isCollapseOpen
            ? "collapse__content--open"
            : "collapse__content--close"
        }`}
      >
        {description ? (
          <p
            className={`collapse__content--description ${
              isCollapseOpen
                ? "collapse__content--Open"
                : "collapse__content--Close"
            }`}
          >
            {description}
          </p>
        ) : (
          <ul
            className={`collapse__content--equipments ${
              isCollapseOpen
                ? "collapse__content--Open"
                : "collapse__content--Close"
            }`}
          >
            {equipments.map((equipment, index) => (
              <li key={index}> {equipment} </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
