import { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        let newArray = response.data;
        // console.log("repsonse", response);
        // console.log("allCountries", newArray);
        setAllCountries(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allCountries === null) {
    console.log("cargando");
    return <h2>...Cargando</h2>;
  }

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <Navbar />
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {allCountries.map((eachCountry) => {
          return (
            <Link to={`/${eachCountry.alpha3Code}`}
              key={eachCountry._id}
              className="list-group-item list-group-item-action"
              >
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} width={35} alt="bandera" />
              <br />
              {eachCountry.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
