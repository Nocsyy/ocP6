import React, { useState, useEffect } from "react";
import "./acceuil.css";
import { Link } from "react-router-dom";
import Header from "../../components/banner/banner.jsx";

export function Acceuil() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/appt.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header isHome={true} />
      <div className="grid-acc">
        {logements.map((logement, index) => (
          <div className="div-logement" key={index}>
            <Link to={"/info-logement/" + logement.id}>
              <img src={logement.cover} alt={logement.title} id={logement.id} />
              <div className="ctn-title-img-acc">
                <figcaption className="fig-margin">{logement.title}</figcaption>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
