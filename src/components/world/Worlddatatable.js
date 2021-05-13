import React from "react";
import "../../App.css";
// eslint-disable-next-line
import Worldbable from "./Worldtable";

const Worlddatatable = ({ data }) => {
    // for(var i in data){
        // console.log(Object.keys(data[0]).splice(0,7));
    // }
    const columns = [0] && Object.keys(data[0] || {});
    return (
        <table
            className="table-centered table table-bordered table-hover table-horizontal-responsive mt-4 mb-5 table-vertical-responsive"
            cellSpacing={2}
            cellPadding={2}
        >
            <thead>
                <tr>
                    {data[0] &&
                        columns.map((heading) => (
                            <th scope="col" key={heading.toString()}>
                                {heading.charAt(0).toUpperCase() + heading.slice(1)}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr>
                        {columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default Worlddatatable;
