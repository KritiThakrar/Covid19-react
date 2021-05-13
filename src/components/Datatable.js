import React from 'react';
import '../App.css';
// eslint-disable-next-line
import Table from './Table';

const Datatable = ({data}) =>{
    const columns= [0] && Object.keys(data[0] || {}); 
    return(
        <div className="table-horizontal-responsive">
            <table className="table-bordered table-center table-striped table-hover mt-4 mb-5">
                <thead>
                    <tr>{data[0] && columns.map((heading)=>
                    <th scope="table" key={heading.toString()}>{heading.charAt(0).toUpperCase()+heading.slice(1)}</th>)}</tr>
                </thead>
                <tbody>
                    {data.map((row)=>(
                    <tr>
                        {
                            columns.map((column)=>(
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Datatable;