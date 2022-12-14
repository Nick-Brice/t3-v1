import * as d3 from 'd3';
import { useState, useEffect } from 'react';

const BarGraph = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);

  useEffect(() => {
    const svg = d3.select('svg');
    const xScale = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, 300])
      .paddingInner(0.05);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 150]);

    const colorScale = d3
      .scaleLinear()
      .domain([0, data.length])
      .range(['red', 'blue']);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => 150 - yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => yScale(d))
      .attr('fill', (d, i) => colorScale(i));

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', (d, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr('y', d => 150 - yScale(d) + 20)
      .attr('font-size', '14')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle');
  }, [data]);

  return (
    <div>
      <svg width="300" height="150">
        <g></g>
      </svg>
    </div>
  );
};

export default BarGraph;