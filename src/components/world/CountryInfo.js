// import './wrolddata.css';

const CountryInfo = ({info}) => {
    return (
        <div className="location-info">
            <h2>COUNTRY INFO</h2>
            <ul>
                <li>country: <strong>{info.country}</strong></li>
                <li>Population: <strong>{info.Population}</strong></li>
                <li>TotalCases: <strong>{info.TotalCases}</strong></li>
                <li>TotalDeaths: <strong>{info.TotalDeaths}</strong></li>
                <li>Test: <strong>{info.Test}</strong></li>
               </ul>
            
        </div>
    )
}

export default CountryInfo
