import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DonutProgress = ({ data, colour, backgroundColour }) => {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);

    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const radius = Math.min(width, height) / 2;
    const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
      .sort(null)
      .value(d => d);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

    const background = g.append('path')
      .datum({ startAngle: 0, endAngle: 2 * Math.PI })
      .style('fill', backgroundColour)
      .attr('d', arc);

    const foreground = g.append('path')

      .datum({ startAngle: 0, endAngle: data / 100 * 2 * Math.PI })
      .style('fill', colour)
      .attr('d', arc)
      .transition()
      .duration(750)
      .attrTween('d', d => {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return t => {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    // Add text in the center of the donut
    g.selectAll('text').remove();
    const text = g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-size', '2rem')
      .text(data + '%')
      .attr('opacity', 0)
      .transition()
      .duration(750)
      .tween('text', function () {
        const that = d3.select(this);
        const i = d3.interpolateNumber(that.text().replace('%', ''), data);
        return function (t) {
          that.text(Math.round(i(t)) + '%');
        };
      })
      .attr('opacity', 1);

    // Clean up when the component unmounts
    return () => {
      g.selectAll('*').remove();
    };

  }, [data]);

  return (
    <svg width={400} height={400} ref={ref} />
  );
};

export default DonutProgress;
