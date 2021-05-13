import { features } from "./data/countries.json";

class LoadCountriesTask {
    setState = null;
    mapCountries = features;
    load = (setState) => {
        // this.setState=setState;
        fetch(
            "https://covid--19-livetracker.herokuapp.com/covid_data_world/get_data_table"
        )
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                this.setState = setState;
                for (let i = 0; i < this.mapCountries.length; i++) {
                    for (var j = 0; j < data.length; j++) {
                        const mapCountries = this.mapCountries[i];
                        // const covidCountry=null;

                        if (data[j].country === mapCountries.properties.ADMIN) {
                            mapCountries.properties.cases = 0;
                            mapCountries.properties.casesText = "0";
                            // console.log(mapCountries.properties.casesText)
                        }
                        else if (data[j].country != null) {
                            let Cases = Number(data[j].cases);
                            mapCountries.properties.cases = Cases;
                            mapCountries.properties.casesText = this.#formatNumberWithCommas(Cases);
                            console.log(mapCountries.properties.casesText);
                        }
                        // this.#setCountryColor(country);
                    }
                }

                this.setState(this.mapCountries);
            });
        setState(features);
    };
    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default LoadCountriesTask;
