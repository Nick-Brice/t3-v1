import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const AreaChart = ({ data, width, height }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        // .attr("viewBox", `0 0 ${width} ${height}`)
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .style("width", "100%")
        // .style("height", "100%");

        let maxArray = []
        let xArray = []
        data.forEach((group) => {
            maxArray.push(d3.max(group))
            xArray.push(group.length)
        })

        const max = d3.max(maxArray)
        const maxX = d3.max(xArray)

        var scC = d3.scaleOrdinal(["#49cc73", "#00a2c3", "#7571e1"])

        const xPadding = 50;
        const yPadding = 50;

        const xScale = d3
            .scaleLinear()
            .domain([0, maxX - 1])
            .range([xPadding, width - xPadding / 2]);

        const yScale = d3
            .scaleLinear()
            .domain([0, max])
            .range([height - yPadding, yPadding]);


        // create scales
        // const xScale = d3.scaleLinear()
        //     // .domain([0, data.length - 1])
        //     .domain([0, maxX - 1])
        //     .range([0, width]);
        // const yScale = d3.scaleLinear()
        //     // .domain([0, d3.max(data)])
        //     .domain([0, max])
        //     .range([height, 0]);

        const xAxis = d3.axisBottom(xScale).ticks(5);
        const yAxis = d3.axisLeft(yScale).ticks(5)
            .tickFormat(value => `${value}%`);

        // create area generator
        const area = d3.area()
            .x((d, i) => xScale(i))
            .y1(d => yScale(d))
            .y0(yScale(0));

        // create line generator
        const lineGenerator = d3.line()
            .x((d, index) => xScale(index))
            .y(d => yScale(d));

        const xA = svg
            .select('.x-axis')
            .style('transform', `translateY(${height - yPadding}px)`)
            .call(xAxis)
            .selectAll('.tick')
            .selectAll('line')
            .style('stroke', 'none');

        svg.select('.x-axis')
            .selectAll('path')
            .style('stroke', 'none')

        svg
            .select('.y-axis')
            .style('transform', `translateX(${xPadding}px)`)
            .call(yAxis)
            .selectAll('.tick')
            .selectAll('line')
            .style('stroke', '#b2b2b2')
            .style('stroke-width', '0.5px');

        svg.select('.y-axis')
            .selectAll('text')
            .attr('font-weight', 700)
            .style('font-size', 16)
            .attr('fill', '#b2b2b2');

        svg.select('.x-axis')
            .selectAll('text')
            .attr('font-weight', 700)
            .style('font-size', 16)
            .attr('fill', 'black');

        data.forEach((group, index) => {
            // draw area
            svg.append('path')
                // .attr('fill', '#00a2c360')
                .attr('fill', scC(index))
                .style('opacity', 0.2)
                .attr('d', area(group));

            // draw line
            svg.append("path")
                .attr("d", lineGenerator(group))
                .attr("fill", "none")
                // .attr("stroke", "#00738B")
                .attr("stroke", scC(index))
                .attr("stroke-width", "5px");

            // const circles = svg
            //     .selectAll(`.dot${index}`)
            //     .data(group)
            //     .join('circle')
            //     .attr('class', 'dot')
            //     .attr('cx', (d, i) => xScale(i))
            //     .attr('cy', d => yScale(d))
            //     .attr('r', 8)
            //     .attr('fill', d => scC(index))
            //     .style("z-index", 10);

            // circles.raise();
        })

        const grid = svg
            .append('g')
            .lower()
            .attr('class', 'gridY')
            .attr('transform', `translate(${xPadding}, 0)`)
            .call(
                d3
                    .axisLeft(yScale)
                    .ticks(5)
                    .tickSize(-width + 1.5 * xPadding)
                    .tickFormat('')
            )
            .selectAll('line')
            .style('stroke', '#b2b2b2')
            .style('stroke-width', '0.5px');

        grid
            .selectAll('path')
            .style('stroke', 'none');



    }, [data, width, height]);

    return (
        <div>
            <svg ref={svgRef} width={width} height={height} >
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    );
}

export default AreaChart;
