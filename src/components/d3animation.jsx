import * as d3 from 'd3';
import { useState, useEffect } from 'react';

const MakeLissajous = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);

  useEffect(() => {
    var svg = d3.select("#lissajous");
    var a = 3.2, b = 5.9; // Lissajous frequencies
    var phi, omega = 2 * Math.PI / 10000; // 10 seconds per period
    var crrX = 150 + 100, crrY = 150 + 0;
    var prvX = crrX, prvY = crrY;
    var timer = d3.timer(function (t) {
      phi = omega * t;
      crrX = 150 + 100 * Math.cos(a * phi);
      crrY = 150 + 100 * Math.sin(b * phi);
      svg.selectAll("line")
        .each(function () { this.bogus_opacity *= .99 })
        .attr("stroke-opacity",
          function () { return this.bogus_opacity })
        .filter(function () { return this.bogus_opacity < 0.05 })
        .remove();
      svg.append("line")
        .each(function () { this.bogus_opacity = 1.0 })
        .attr("x1", prvX).attr("y1", prvY)
        .attr("x2", crrX).attr("y2", crrY)
        .attr("stroke", "green").attr("stroke-width", 2);
      prvX = crrX;
      prvY = crrY;
      if (t > 120e3) { timer.stop(); } // after 120 seconds
    });
  }, [data]);

  return (
    <div>
      <svg id='lissajous' width='300' height='300'>
        <g></g>
      </svg>
    </div>
  );
};

export default MakeLissajous;