import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { colors } from "../../style/global/colors";

interface ExpenseData {
  category: string;
  percentage: number;
  color: string;
}

const data: ExpenseData[] = [
  { category: "Entertainment", percentage: 30, color: colors.primaryIndigo },
  { category: "Bill Expense", percentage: 15, color: colors.orange },
  { category: "Others", percentage: 35, color: colors.primaryBlack },
  { category: "Investment", percentage: 20, color: colors.flourescentBlue },
];

export const ExpenseStatistics = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create pie generator with specific rotation
    const pie = d3
      .pie<ExpenseData>()
      .value((d) => d.percentage)
      .startAngle(-Math.PI / 3) // Start at top (-90 degrees)
      .endAngle((4 * Math.PI) / 2) // Complete the circle (270 degrees)
      .sort(null); // Prevent automatic sorting by value

    // Create arc generator for slices
    const arc = d3
      .arc<d3.PieArcDatum<ExpenseData>>()
      .innerRadius(0)
      .outerRadius(radius);

    // Create arc generator for labels
    const labelArc = d3
      .arc<d3.PieArcDatum<ExpenseData>>()
      .innerRadius(radius * 0.5) // Position labels at 50% of radius
      .outerRadius(radius * 0.5);

    // Add slices
    const slices = svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", "white")
      .attr("stroke-width", 10);

    // Add text labels
    const labels = svg
      .selectAll("text")
      .data(pie(data))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em") // Center text vertically
      .attr("fill", "white")
      .attr("font-size", "14px")
      .attr("font-weight", "bold");

    // Add percentage
    labels
      .append("tspan")
      .text((d) => `${d.data.percentage}%`)
      .attr("x", 0)
      .attr("dy", "-0.2em")
      .attr("font-size", "1rem")
      .attr("font-weight", "700");

    // Add category name
    labels
      .append("tspan")
      .text((d) => d.data.category)
      .attr("x", 0)
      .attr("dy", "1.2em")
      .attr("font-size", "1rem")
      .attr("font-weight", "700");
    
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-[22px] leading-[26px] text-primaryIndigo font-semibold text-left mb-[18px]">
        Expense Statistics
      </h2>
      <div className="flex flex-col items-center bg-white rounded-xl h-[calc(100%-44px)]">
        <svg ref={svgRef} className="m-auto"></svg>
      </div>
    </div>
  );
};
