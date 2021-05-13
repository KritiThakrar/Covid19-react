import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Worldmapdata from "./Worldmapdata";
// import Legend from "./Legend";
import LoadCountriesTask from './LoadCountriesTask';

const Worldmap = () => {
    const [countries, setCountries] = useState([]);

    const load = () =>{
        const loadCountriesTask= new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };

    useEffect(load,[]);

    return (
        <div>
            {countries.length === 0 ? (
                <Loading />
            ) : (
                <div>
                    <Worldmapdata countries={countries}/>
                    {/* <Legend /> */}
                </div>
            )}
        </div>
    );
};

export default Worldmap;
