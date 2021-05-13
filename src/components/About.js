import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col p-3 m-5 shadow-lg bg-white rounded pl-5 ">
                    <div className="h4 mt-5">What is Covid19 ?</div>
                        <div className="text-info h5 mt02">
                        Coronavirus disease 2019 (COVID-19), also known as the coronavirus or COVID, 
                        is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
                        The first known case was identified in Wuhan, China, in December 2019. The disease has since spread worldwide, 
                        leading to an ongoing pandemic.
                        </div>

                        <div className="text-info h5 mt02">
                        Symptoms of COVID-19 are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss 
                        of smell and taste.Symptoms may begin one to fourteen days after exposure to the virus. At least a third of people who are infected 
                        do not develop noticeable symptoms. Of those people who develop noticeable symptoms enough to be classed as patients, most (81%) 
                        develop mild to moderate symptoms (up to mild pneumonia), while 14% develop severe symptoms (dyspnea, hypoxia, or more than 50% 
                        lung involvement on imaging), and 5% suffer critical symptoms (respiratory failure, shock, or multiorgan dysfunction). 
                        Older people are at a higher risk of developing severe symptoms. Some people continue to experience a range of effects (long COVID) 
                        for months after recovery, and damage to organs has been observed. Multi-year studies are underway to further investigate 
                        the long-term effects of the disease.
                        </div>
                        <div className="h4 mt-5">Are you official?</div>
                        <div className="text-info h5 mt-2">
                            No.
                        </div>
                        <div className="h4 mt-2">Where did you collect the data from?</div>
                        <div className="text-info h5 mt-2">We collected numbers from various open source projects and a rest API made by our team.All the data description
                            is available at <a href={"https://github.com/umangag07/Covid-19_Rest-API/blob/main/README.md"} className="text-info"><mark>http://bit.ly/Covid-19_Rest-API</mark></a>
                        </div>
                        <div className="h4 mt-5">Where can I find the data for this?</div>
                        <div className="text-info h5 mt-2">
                            All the data is available through an API for further analysis and development here at:
                            <a href={"https://github.com/umangag07/Covid-19_Rest-API/blob/main/README.md"} className="text-info">
                                <mark>http://bit.ly/Covid-19_Rest-API</mark></a>
                        </div>
                        <div className="h4 mt-5">Why are you guys putting in time and resources to do this while not gaining a single penny from it?</div>
                        <div className="text-info h5 mt-2">
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