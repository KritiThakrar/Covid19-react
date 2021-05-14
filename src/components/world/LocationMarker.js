import './Worlddata.css';
const LocationMarker = ({ lat, lng, Onclick, flag})=> {
    console.log(flag)
    return (
        <div className="location-marker" onClick={Onclick}>
             <img src={flag} width="22" height="15"alt="flag" ></img>                                                                                                                                                               
        </div>
    )
}

export default LocationMarker
