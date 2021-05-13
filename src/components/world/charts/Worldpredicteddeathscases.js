import React, {useEffect, useRef} from 'react';
import * as  d3 from 'd3';
import '../../../App.css';

const Worldpredicteddeathscases =()=>{
    const d3worldtotal = useRef()
    const parsedate = d3.timeParse('%Y-%m-%d');

    useEffect(()=>{
        fetch ('https://covid--19-livetracker.herokuapp.com/predictedData/world')
        .then(response=> response.json())
        .then(data=>{
            const predictedDeathsCases= data.map(i => {
                var temp={}
                temp["Date"]=parsedate(i.Date.slice(0,10));
                temp["PredictedDeathsCases"]=i.deaths;
                return temp;
            })
            // console.log(predictedDeathsCases);
            const margin = {top: 20, right: 10, bottom: 50, left: 60}
			const width = parseInt(d3.select('#d3dataworld').style('width'))- margin.left - margin.right
			const height = parseInt(d3.select('#d3dataworld').style('height'))- margin.top - margin.bottom

			// Set up chart
			const svg = d3.select(d3worldtotal.current)
						.attr('width', width + margin.left + margin.right) 
						.attr('height', height + margin.top + margin.bottom) 
                        .style('background-color','#e1e5ea')
						.append('g')
							.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

            const x = d3.scaleTime()
            .domain(d3.extent(predictedDeathsCases, function(d){return d.Date}))
			.range([0,width])

            svg.append('g')
            .attr('transform','translate(0,' + height+')')
            .call(d3.axisBottom(x))
            .selectAll("text")
            // .attr("dy", "10px")
            .attr("transform", "rotate(60)")
            .style("text-anchor", "start");
            

            const max= d3.max(predictedDeathsCases,function(d){return d.PredictedDeathsCases})
            const min= d3.min(predictedDeathsCases,function(d){return d.PredictedDeathsCases})
            const y=d3.scaleLinear()
            .domain([min,max])
            .range([height,0])

            svg.append('g')
            .call(d3.axisLeft(y))

            svg.append('path')
            .datum(predictedDeathsCases)
            .attr('fill','none')
            .attr('stroke','black')
            .attr('stroke-width',3)
            .attr('d', d3.line()
            .x(function(d){return x(d.Date)})
            .y(function(d){return y(d.PredictedDeathsCases)})
            )
            svg.append('text')
			.attr('x',(width/2))
			.attr('y', (margin.top/5))
			.attr('text-anchor', 'middle')
			.attr('font-size', '20px')
			.attr('fill','black')
			.text('Predicted Cumulative Deaths Cases')
        })
    })

    return (
        <div id="d3dataworld">
            <svg ref={d3worldtotal}></svg>
        </div>
    )
}

export default Worldpredicteddeathscases;