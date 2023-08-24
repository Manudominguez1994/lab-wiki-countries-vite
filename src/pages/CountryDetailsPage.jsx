import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CountryDetailsPage() {
    const [countryDetails, setCountryDetails] = useState(null)
    console.log("primer details",countryDetails);
    const params = useParams()
    console.log("params",params);
    useEffect(()=>{
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
    .then((response)=>{
        console.log("reponse",response);
        setCountryDetails(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
},[params.countryId])
    if(countryDetails === null){
        return <h3>Cargando datos</h3>
    }
    console.log("segundo details",countryDetails);
  return (
        <div className="container">
        <Navbar/>
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} width={80} alt="bandera" />
        <h1>{countryDetails.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:"30%"}}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {countryDetails.borders.map((patata)=>{
                        console.log(patata);
                        return  <li><Link to={`/${patata}`}>{patata}</Link></li> 
                    })}
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
  )
}
