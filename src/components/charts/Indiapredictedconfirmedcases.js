import React, {useEffect, useRef} from 'react';
import * as  d3 from 'd3';
import '../../App.css';

const Indiapredictedconfirmedcases =()=>{
    const d3indiatotal = useRef()
    const parsedate = d3.timeParse('%Y-%m-%d');

    useEffect(()=>{
        fetch ('https://covid--19-livetracker.herokuapp.com/predictedData/india')
        .then(response=> response.json())
        .then(data=>{
            
            const predictedConfirmedCases= data.map(i => {
                var temp={}
                temp["Date"]=parsedate(i.Date.slice(0,10));
                temp["PredictedConfirmedCases"]=i.confirmed;
                return temp;
            })
            // console.log(predictedConfirmedCases);
            const margin = {top: 20, right: 30, bottom: 30, left: 60}
			const width = parseInt(d3.select('#d3data').style('width'))- margin.left - margin.right
			const height = parseInt(d3.select('#d3data').style('height'))- margin.top - margin.bottom

			// Set up chart
			const svg = d3.select(d3indiatotal.current)
						.attr('width', width + margin.left + margin.right) 
						.attr('height', height + margin.top + margin.bottom) 
                        .style('background-color','#b2dffb')
						.append('g')
							.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

            const x = d3.scaleTime()
            .domain(d3.extent(predictedConfirmedCases, function(d){return d.Date}))
			.range([0,width])

            svg.append('g')
            .attr('transform','translate(0,' + height+')')
            .call(d3.axisBottom(x))

            const max= d3.max(predictedConfirmedCases,function(d){return d.PredictedConfirmedCases})
            const min= d3.min(predictedConfirmedCases,function(d){return d.PredictedConfirmedCases})
            const y=d3.scaleLinear()
            .domain([min, max])
            .range([height,0])

            svg.append('g')
            .call(d3.axisLeft(y))

            svg.append('path')
            .datum(predictedConfirmedCases)
            .attr('fill','none')
            .attr('stroke','black')
            .attr('stroke-width',3)
            .attr('d', d3.line()
            .x(function(d){return x(d.Date)})
            .y(function(d){return y(d.PredictedConfirmedCases)})
            )
            svg.append('text')
			.attr('x',(width/2))
			.attr('y', (margin.top/5))
			.attr('text-anchor', 'middle')
			.attr('font-size', '20px')
			.attr('fill','black')
			.text('Predicted Cumulative Confirmed Cases')
        })
    })

    return (
        <div id="d3data">
            <svg ref={d3indiatotal}></svg>
        </div>
    )
}

export default Indiapredictedconfirmedcases;