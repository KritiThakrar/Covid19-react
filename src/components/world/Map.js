import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import {useState} from 'react'
import CountryInfo from './CountryInfo'
import './Worlddata.css'



const Map = ({eventData, center, zoom})=> {
    const [countryinfo,setcountryinfo] = useState(null)
    const markers = eventData.map(ev =>{
      
           return <LocationMarker 
           key ={ev.country} 
           lat={ev.countryInfo.lat} 
           lng={ev.countryInfo.long}
           flag = {ev.countryInfo.flag}
           Onclick={()=>setcountryinfo({country:ev.country, Population:ev.population, TotalCases:ev.cases, TotalDeaths:ev.deaths, TotalRecovered:ev.recovered, Test:ev.tests} )}></LocationMarker>
     
        
         
    })
    return (
        <div className="worldmap">
            <GoogleMapReact
               bootstrapURLKeys={{key:process.env.KEY}}
               defaultCenter={center}
               defaultZoom={zoom}
            >
            {markers}
            </GoogleMapReact>
            {countryinfo && <CountryInfo info={countryinfo}/>}
        

        </div>
    )
}
Map.defaultProps = {
    center:{
        lat:20.5937,
        lng:78.9629
    },
    zoom:1
}

export default Map
