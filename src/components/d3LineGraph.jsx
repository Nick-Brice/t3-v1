import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineGraph = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);
    const lineGenerator = d3.line()
      .x((d, index) => xScale(index))
      .y(d => yScale(d));
    svg.selectAll("path").remove();
    svg.append("path")
      .attr("d", lineGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height} />
  );
};

export default LineGraph;
