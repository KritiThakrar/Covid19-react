import React, {useEffect, useRef} from 'react';
import * as  d3 from 'd3';
import '../../App.css';

const Indiatotaldeathscases =()=>{
    const d3indiatotal = useRef()
    const parsedate = d3.timeParse('%Y-%m-%d');

    useEffect(()=>{
        fetch ('https://covid--19-livetracker.herokuapp.com/total_covid_cases_india/get_data')
        .then(response=> response.json())
        .then(data=>{
            const deathsCases= data.map(i => {
                var temp={}
                temp["Date"]=parsedate(i.Data_date.slice(0,10));
                temp["Deaths"]=i.TotalDeaths;
                return temp;
            })
            // console.log(deathsCases);
            const margin = {top: 20, right: 30, bottom: 30, left: 60}
			const width = parseInt(d3.select('#d3data').style('width'))- margin.left - margin.right
			const height = parseInt(d3.select('#d3data').style('height'))- margin.top - margin.bottom

			// Set up chart
			const svg = d3.select(d3indiatotal.current)
						.attr('width', width + margin.left + margin.right) 
						.attr('height', height + margin.top + margin.bottom) 
                        .style('background-color','#e1e5ea')
						.append('g')
							.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

            const x = d3.scaleTime()
            .domain(d3.extent(deathsCases, function(d){return d.Date}))
			.range([0,width])

            svg.append('g')
            .attr('transform','translate(0,' + height+')')
            .call(d3.axisBottom(x))

            const max= d3.max(deathsCases,function(d){return d.Deaths})
            const y=d3.scaleLinear()
            .domain([0,max])
            .range([height,0])

            svg.append('g')
            .call(d3.axisLeft(y))

            svg.append('path')
            .datum(deathsCases)
            .attr('fill','none')
            .attr('stroke','black')
            .attr('stroke-width',3)
            .attr('d', d3.line()
            .x(function(d){return x(d.Date)})
            .y(function(d){return y(d.Deaths)})
            )
            svg.append('text')
			.attr('x',(width/2))
			.attr('y', (margin.top/5))
			.attr('text-anchor', 'middle')
			.attr('font-size', '20px')
			.attr('fill','black')
			.text('Total Deaths Cases')
        })
    })

    return (
        <div id="d3data">
            <svg ref={d3indiatotal}></svg>
        </div>
    )
}

export default Indiatotaldeathscases;