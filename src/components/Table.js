import { json } from "d3-fetch";
import { useState, useEffect } from "react";
import Datatable from "./Datatable";
import '../App.css';

require("es6-promise").polyfill();
require("isomorphic-fetch");


const Table = () => {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    // const [searchColumns,setSearchColumns]=useState(["country"])

    useEffect(() => {
        fetch("https://covid--19-livetracker.herokuapp.com/covid_data_india/get_data_table")
            .then((response) => response.json())
            .then((json) => setData(json));
        console.log(json);
    }, []);

    const search = (rows) => {
        const columns = rows[0] && Object.keys(rows[0]);
        // return rows.filter(row=>row.country.toLowerCase().indexOf(q)>-1)
        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            )
        );
    }

    return (
        <div className="pl-5 container-xxl">
            <div className="row">
                <div className="col">
                    <div className="mt-5 col mr-5">
                        <p className="text-center mr-5 pr-5 pl-5">Search your state name</p>
                    </div>
                    <div className="mt-4 pl-5 col fontsearch mr-4">
                        {/* <span className="h5 mt-3 shadow-lg p-3 mb-2 bg-white rounded" style={{marginRight:'20px !important'}}>Search :</span> */}
                        <input className="ml-5 p-3 mb-2 shadow-lg bg-white rounded w-75" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                        <i className="fas fa-2x fa-search-location mt-3"></i>
                    </div>
                    <div className="col">
                        <Datatable data={search(data)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Table;