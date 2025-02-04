import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { colors } from "../../style/global/colors";

const data = [
  { month: "Jul", value: 150 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 450 },
  { month: "Oct", value: 750 },
  { month: "Nov", value: 250 },
  { month: "Dec", value: 580 },
  { month: "Jan", value: 650 },
];

export const BalanceHistory = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = 1200 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .range([height, 0]);

    // Add grid container
    const grid = svg.append("g").attr("class", "grid");

    // Add horizontal grid lines
    grid
      .selectAll("line.horizontal")
      .data(y.ticks(5))
      .enter()
      .append("line")
      .attr("class", "horizontal")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", d => y(d))
      .attr("y2", d => y(d))
      .style("stroke", "#DFE5EE")
      .style("stroke-opacity", "1")
      .style("stroke-dasharray", "2,2");

    // Add vertical grid lines
    grid
      .selectAll("line.vertical")
      .data(data.map(d => d.month))
      .enter()
      .append("line")
      .attr("class", "vertical")
      .attr("x1", d => x(d)!)
      .attr("x2", d => x(d)!)
      .attr("y1", 0)
      .attr("y2", height)
      .style("stroke", "#DFE5EE")
      .style("stroke-opacity", "1")
      .style("stroke-dasharray", "2,2");

    // Add the area
    const area = d3
      .area<typeof data[0]>()
      .x((d) => x(d.month)!)
      .y0(height)
      .y1((d) => y(d.value))
      .curve(d3.curveCatmullRom);

    // Add the area path
    svg
      .append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area)
      .attr("fill", `${colors.primaryIndigo}20`);

    // Create line generator
    const line = d3
      .line<typeof data[0]>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.value))
      .curve(d3.curveCatmullRom);

    // Add the line path
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors.primaryIndigo)
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    // Add y-axis
    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickFormat((d) => `${d}`)
      )
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-[22px] leading-[26px] text-primaryIndigo font-semibold text-left mb-[18px]">
        Balance History
      </h2>
      <div className="bg-white rounded-xl p-6 h-[calc(100%-44px)] w-full">
        <div className="w-full h-full">
          <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
      </div>
    </div>
  );
}; 