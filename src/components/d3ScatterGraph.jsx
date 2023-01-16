import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ScatterGraph = ({ data, width, height }) => {
    const svgRef = useRef();

    const sortedData = data.sort((a, b) => a.x - b.x);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const xPadding = 30;
        const yPadding = 30;

        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([xPadding, width - xPadding]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height - yPadding, yPadding]);

        const colorScale = d3
            .scaleOrdinal()
            .domain(data.map(d => d.label))
            .range(d3.schemeCategory10);

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
            .attr('fill', '#b2b2b2');

        const circles = svg
            .selectAll('.dot')
            .data(data)
            .join('circle')
            .attr('class', 'dot')
            .attr('cx', d => xScale(d.x))
            .attr('cy', d => yScale(d.y))
            .attr('r', 4)
            .attr('fill', '#49cc73')
            .style("z-index", 10);

        circles.raise()

        // Add line
        const line = svg.append("path")
            .attr("d", lineGenerator(sortedData))
            .attr('class', 'line')
            .attr("fill", "none")
            .attr("stroke", "#49cc73")
            .style("z-index", 10);

        line.raise()

        // Add text labels above each dot
        const labels = svg.append('g')
            .selectAll('.label')
            .data(sortedData)
            .join('text')
            .attr('class', 'label')
            .text(d => d.y)
            .attr('x', d => xScale(d.x))
            .attr('y', d => yScale(d.y) - 10)
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
                    .tickSize(-width + 2 * xPadding)
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
        <div className=''>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    );
};

export default ScatterGraph;