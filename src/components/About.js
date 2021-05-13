import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col p-3 m-5 shadow-lg bg-white rounded pl-5 ">
                    <div className="h4 mt-5">Are you official?</div>
                        <div className="text-info h5 mt02">
                            No.
                         </div>
                        <div className="h4 mt-5">Where did you collect the data from?</div>
                        <div className="text-info h5 mt02">We collected numbers from various open source projects and a rest API made by our team.All the data description
                        is available at <a href={"https://github.com/umangag07/Covid-19_Rest-API/blob/main/README.md"} className="text-info"><mark>http://bit.ly/Covid-19_Rest-API</mark></a>
                         </div>
                         <div className="h4 mt-5">Where can I find the data for this?</div>
                        <div className="text-info h5 mt02">
                            All the data is available through an API for further analysis and development here at: 
                            <a href={"https://github.com/umangag07/Covid-19_Rest-API/blob/main/README.md"} className="text-info">
                                <mark>http://bit.ly/Covid-19_Rest-API</mark></a>
                         </div>
                         <div className="h4 mt-5">Why are you guys putting in time and resources to do this while not gaining a single penny from it?</div>
                        <div className="text-info h5 mt02">
                            We started off as a group college project but then thought to make the 
                            API for opent source so that others can also get help with our data 
                            where we are providing REST API with cases and predicted data.
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;