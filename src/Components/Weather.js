import axios from "axios";
import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay)
    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]
    
    useEffect(() => {
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: {q: `${latitude}, ${longitude}`},
          headers: {
            'X-RapidAPI-Key': 'ee370e5644msh4af2d822c6d6c88p14ce9djsn9c50c99a9c29',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        
        axios
        .request(options)
        .then (function (response) {
            console.log(response.data);
            setWeather(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} Degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} Degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>{weather?.current?.wind_mph} MPH{" "}
                        {weather?.current?.wind_dir}</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
