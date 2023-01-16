import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const AreaChart = ({ data, width, height }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // create scales
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        // create area generator
        const area = d3.area()
            .x((d, i) => xScale(i))
            .y1(d => yScale(d))
            .y0(yScale(0));

        // create line generator
        const lineGenerator = d3.line()
            .x((d, index) => xScale(index))
            .y(d => yScale(d));

        // draw area
        svg.append('path')
            .attr('fill', '#00a2c360')
            .attr('d', area(data));

        // draw line
        svg.append("path")
            .attr("d", lineGenerator(data))
            .attr("fill", "none")
            .attr("stroke", "#00738B")
            .attr("stroke-width", "5px");
    }, [data, width, height]);

    return (
        <div>
            <svg ref={svgRef} width={width} height={height} />
        </div>
    );
}

export default AreaChart;
