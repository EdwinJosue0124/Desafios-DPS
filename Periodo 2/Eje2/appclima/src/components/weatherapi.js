import React, {useState} from "react";
import { Alert } from "react-native";
import Formulario from './Formulario';

const weatherapi = () => {
    const url ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={3d22ddd3ef9a2c9f973a40bc7d78afac}&lang=es"
    const city ="&q=";


    const [weather, setWeather] = useState([]);
    const [show, setShow] = useState([]);
    const [location, setLocation] = useState("");
    

    const getLocation =async(loc) => {
        setLocation(loc);

        //weather

        url = url + city +loc;

        await fetch(url).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            setWeather(weatherData);
        }).catch(Alert.alert("Error"))
    }

    return(
        <React.Fragment>
            <form
                newLocation ={getLocation}
            />
        </React.Fragment>
    );
}
