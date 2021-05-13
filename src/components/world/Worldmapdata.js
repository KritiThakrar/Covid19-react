import React from "react";
import { MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css";

const Worldmapdata = ({ countries }) => {
    // console.log(countries);
    const mapStyle = {
        fillColor: "White",
        weight: 1,
        color: "red",
        // fillOpacity: 1,
    };
    const onEachCountry =(country,layer)=>{
        layer.options.fillColor = country.properties.color;
        const name=country.properties.ADMIN;
        let casesText = country.properties.casesText;
        layer.bindPopup(`${name} , Cases: ${casesText}`);
        // console.log(country.properties.casesText);
    }
    return (
        <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 60]}>
            <GeoJSON 
            style={mapStyle} 
            data={countries}
            onEachFeature={onEachCountry}
            />
        </MapContainer>
    );
};

export default Worldmapdata;
