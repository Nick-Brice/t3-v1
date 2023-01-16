import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import Counter from './counter'

const DonutProgress = ({ data, duration, colour, backgroundColour, size }) => {
    console.log('Data:', data);

    const ref = useRef(null);

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
            .outerRadius(radius - (radius / 25))
            .innerRadius(radius - (radius / 3));

        const background = g.append('path')
            .datum({ startAngle: 0, endAngle: 2 * Math.PI })
            .style('fill', backgroundColour)
            .attr('d', arc);

        const foreground = g.append('path')
            .attr("id", "arc")
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

        d3.select("#arc")
            .attr("fill", "linear-gradient(to right, #ff0000, #0000ff)");

        // Clean up when the component unmounts
        return () => {
            g.selectAll('*').remove();
        };
    }, [data]);

    return (
        <svg width={size} height={size} ref={ref}>
            <foreignObject className='grid place-content-center' x="0" y="0" width={size} height={size}>
                <div style={{width: size + 'px'}} className={` grid grid-cols-[50%] grid-rows-[50%] place-content-center place-items-center m-0 border-0 p-0 h-full`} xmlns="http://www.w3.org/1999/xhtml">

                    <div style={{fontSize: size/(80/16) + 'px'}}>
                        <Counter className='' targetValue={data} duration={duration} />
                        <span className='font-bold '>%</span>
                    </div>

                </div>
            </foreignObject>
            {/* <clipPath id="clip">
                <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" stroke="black" strokeWidth="10"></path>
            </clipPath>

            <foreignObject className='' x="0" y="0" width={size} height={size} clipPath="url(#clip)">
                <div className={`grid place-content-center w-[${size}px] h-[${size}px]`}>
                    <div className={`relative gradient w-[${size}px] h-[${size}px]`} xmlns="http://www.w3.org/1999/xhtml" />
                </div>
            </foreignObject> */}

            {/* <Counter targetValue={data} /> */}
        </svg>
    );
};

export default DonutProgress;