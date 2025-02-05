import { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";
import { colors } from "../../style/global/colors";

interface ActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

const data: ActivityData[] = [
  { day: "Sat", deposit: 220, withdraw: 450 },
  { day: "Sun", deposit: 120, withdraw: 320 },
  { day: "Mon", deposit: 250, withdraw: 310 },
  { day: "Tue", deposit: 370, withdraw: 450 },
  { day: "Wed", deposit: 230, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 380 },
  { day: "Fri", deposit: 320, withdraw: 370 },
];

const WeeklyActivity = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Memoize chart configurations
  const chartConfig = useMemo(() => {
    const margin = { top: 40, right: 40, bottom: 40, left: 60 };
    const width = 600;
    const height = 200;
    // Memoize scales
    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .range([0, width])
      .padding(0.2);

    const x1 = d3
      .scaleBand()
      .domain(["deposit", "withdraw"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([0, 500])
      .range([height, 0]);

    return { margin, width, height, x0, x1, y };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const { margin, width, height, x0, x1, y } = chartConfig;

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set viewBox to maintain aspect ratio and fit content
    const svg = d3
      .select(svgRef.current)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add horizontal grid lines
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3.axisLeft(y)
          .ticks(5)
          .tickSize(-width)
          .tickFormat(() => "")
      )
      .call(g => g.select(".domain").remove())
      .call(g => 
        g.selectAll(".tick line")
          .attr("stroke-opacity", 0.1)
          .attr("stroke", colors.primaryBlue)
      );

    // Create axes
    const createAxis = () => {
      // X axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x0))
        .selectAll("text")
        .style("color", colors.primaryBlue);

      // Y axis
      svg
        .append("g")
        .call(d3.axisLeft(y).ticks(5))
        .selectAll("text")
        .style("color", colors.primaryBlue);
    };

    // Create bars
    const createBars = () => {
      const dayGroups = svg
        .selectAll<SVGGElement, ActivityData>(".day-group")
        .data(data)
        .join("g")
        .attr("class", "day-group")
        .attr("transform", (d) => `translate(${x0(d.day)},0)`);

      // Helper function to create bars
      const createBar = (key: "deposit" | "withdraw") => {
        dayGroups
          .append("rect")
          .attr("class", `${key}-bar`)
          .attr("x", x1(key) || 0)
          .attr("y", (d) => y(d[key]))
          .attr("width", "15px")
          .attr("height", (d) => height - y(d[key]))
          .attr(
            "fill",
            key === "deposit" ? colors.primaryBlack : colors.flourescentBlue
          )
          .attr("ry", 8); // Add rounded corners
      };

      createBar("deposit");
      createBar("withdraw");
    };

    // Create legend
    const createLegend = () => {
      const legend = svg
        .append("g")
        .attr("transform", `translate(${width - 150}, -10)`);

      const legendData = [
        { label: "Deposit", color: colors.primaryBlack, x: 0 },
        { label: "Withdraw", color: colors.flourescentBlue, x: 80 },
      ];

      legendData.forEach(({ label, color, x }) => {
        legend
          .append("rect")
          .attr("width", 12)
          .attr("height", 12)
          .attr("fill", color)
          .attr("transform", `translate(${x}, 0)`);

        legend
          .append("text")
          .attr("x", x + 20)
          .attr("y", 10)
          .text(label)
          .style("font-size", "12px")
          .style("fill", colors.primaryBlue);
      });
    };

    // Render chart components
    createAxis();
    createBars();
    createLegend();
  }, [chartConfig]); // Only re-render when chartConfig changes

  return (
    <div>
      <h2 className="text-base lg:text-[22px] leading-[26px] text-primaryIndigo font-semibold text-left mb-[18px]">
        Weekly Activity
      </h2>
      <div className="w-full h-full lg:min-h-[250px] bg-white rounded-xl">
        <svg
          ref={svgRef}
          className="w-full h-full"
          style={{ maxWidth: "100%" }}
          preserveAspectRatio="xMinYMin meet"
        />
      </div>
    </div>
  );
};

export default WeeklyActivity;
