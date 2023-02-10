import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { innerWidth, innerHeight } from 'jquery';

const ScatterGraph = ({ data, width, height }) => {
    const svgRef = useRef();

    let sortedData = data.sort((a, b) => a.x - b.x);
    // sortedData = d3.pairs(sortedData,
    //     (a, b) => { return { src: a, dst: b } });

    // const [dimensions, setDimensions] = useState({ width: width, height: height })

    // useEffect(() => {
    //     const getDimensions = () => ({
    //         width: svgRef.current.offsetWidth,
    //         height: svgRef.current.offsetHeight
    //     })

    //     const handleResize = () => {
    //         setDimensions(getDimensions())
    //     }

    //     if (svgRef.current) {
    //         setDimensions(getDimensions())
    //     }

    //     window.addEventListener("resize", handleResize)

    //     return () => {
    //         window.removeEventListener("resize", handleResize)
    //     }
    // }, [svgRef])

    useEffect(() => {
        // const width2 = svgRef.current.parentElement.offsetWidth;
        // const height2 = svgRef.current.parentElement.offsetHeight;

        // var width = parseInt(d3.select(".graph").style("width"), 10);
        // var height = parseInt(d3.select(".graph").style("height"), 10);

        const svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .style("width", "100%")
            .style("height", "100%");

        const xPadding = 50;
        const yPadding = 50;

        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([xPadding, width - xPadding / 2]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height - yPadding, yPadding]);

        const color_scale = d3.scaleLinear().range(["#ed684f", "#49cc73"]);

        color_scale.domain([0, 100])

        var scC = d3.scaleThreshold()
            .domain([0, d3.max(data, d => d.y)]).range(["green", "orange", "red"]);


        // Add the gradient definition to the defs section
        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");

        // Add a gradient definition for each segment of the line
        // const gradients = svg.append("defs")
        //     .selectAll("linearGradient")
        //     .data(sortedData)
        //     .enter()
        //     .append("linearGradient")
        //     .attr("id", (d, i) => `gradient`)

        // .attr("x1", "0%")
        // .attr("x2", "100%")
        // .attr("y1", (d, i) => `${d.y}%`)
        // .attr("y2", (d, i) => `${sortedData[i + 1].y}%`);

        // Add two stops to the gradient
        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#ed684f");

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#49cc73");

        // gradients.append("stop")
        //     .attr("offset", "0%")
        //     .attr("stop-color", (d, i) => color_scale(d.y));

        // gradients.append("stop")
        //     .attr("offset", "100%")
        //     .attr("stop-color", (d, i) => {
        //         if (i < sortedData.length - 1) {
        //             return color_scale(sortedData[i + 1].y);
        //         }
        //         return color_scale(d.y);
        //     });



        // const colorScale = d3
        //     .scaleOrdinal()
        //     .domain(data.map(d => d.label))
        //     .range(d3.schemeCategory10);

        const xAxis = d3.axisBottom(xScale).ticks(5);
        const yAxis = d3.axisLeft(yScale).ticks(5)
            .tickFormat(value => `${value}%`);

        const lineGenerator = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveLinear);


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

        // Add line
        const line = svg.append("path")
            .attr("d", lineGenerator(sortedData))
            .attr('class', 'line')
            .attr("fill", "none")
            .attr("stroke", (d, i) => `url(#gradient2)`)
            .style("z-index", 10)
            .style("stroke-width", 5);

        // const line = svg.selectAll("line").data(sortedData).enter().append("line")
        //     .attr("x1", d => xScale(d.src.x))
        //     .attr("x2", d => xScale(d.dst.x))
        //     .attr("y1", d => yScale(d.src.y))
        //     .attr("y2", d => yScale(d.dst.y))
        //     .attr("stroke", d => color_scale((d.src.y + d.dst.y) / 2))


        line.raise()

        const circles = svg
            .selectAll('.dot')
            .data(data)
            .join('circle')
            .attr('class', 'dot')
            .attr('cx', d => xScale(d.x))
            .attr('cy', d => yScale(d.y))
            .attr('r', 8)
            .attr('fill', d => color_scale(d.y))
            .style("z-index", 10);

        circles.raise()

        // Add text labels above each dot
        const labels = svg.append('g')
            .selectAll('.label')
            .data(sortedData)
            .join('text')
            .attr('class', 'label')
            .text(d => d.y + '%')
            .attr('x', d => xScale(d.x))
            .attr('y', d => yScale(d.y) - 15)
            .attr('font-weight', 700)
            .style('text-anchor', 'middle')
            .style("z-index", 10);

        labels.raise()

        // Add grid lines
        // svg
        //     .append('g')
        //     .attr('class', 'grid')
        //     .attr('transform', `translate(0, ${height - yPadding})`)
        //     .call(
        //         d3
        //             .axisBottom(xScale)
        //             .ticks(5)
        //             .tickSize(-height + 2 * yPadding)
        //             .tickFormat('')
        //     );

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
        // <div className='graph'>
        <svg className='' width={width} height={height} ref={svgRef}>
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
        // </div>

    );
};

export default ScatterGraph;