import Axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height:20vh;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    flex-direction: row;
    align-items:center;
   
`;

const CardInfo = styled.div`
    height:18vh;
    width:20%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
   
    align-items:center;
    font-family: 'Times New Roman', Times, serif;
    h2{
        font-family: 'Times New Roman', Times, serif;
        color:#cf004b;
    }
    h3{
        color:#12222c;
        font-family: 'Times New Roman', Times, serif;
    }
   

`
const Header =()=> {
    const [data,setData] = useState({});

    useEffect(()=>{
        Axios.get("https://corona.lmao.ninja/v3/covid-19/all")
            .then(response=>{
                console.log(response.data);
                setData(response.data)
            })
            .catch(error=>{
                console.log(error);
            })
    })
    return (
        <HeaderContainer>
            <CardInfo>
                <h2>Total Cases</h2>
                <h3>{data.cases}</h3>
            </CardInfo>
            <CardInfo>
            <h2>Total Deaths</h2>
            <h3>{data.deaths}</h3>

            </CardInfo>
            <CardInfo>
            <h2>Total Recovered</h2>
            <h3>{data.recovered}</h3>

            </CardInfo>
            
        </HeaderContainer>
    )
}

export default Header
