"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register chart.js modules
Chart.register(...registerables);

const skipped = (ctx: any, value: any) =>
  ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx: any, value: any) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

const DrawdownChart: React.FC = () => {
  // Define a reference with a type for the canvas element
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Ensure the chartRef and its context exist
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const genericOptions = {
      fill: false,
      interaction: {
        intersect: false,
      },
      radius: 0,
    };

    function formatNumber(number: number): string {
      return number.toString().padStart(2, "0");
    }

    // Create a new Chart instance
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from(
          { length: 8 },
          (_, i) =>
            `${formatNumber(3 * (1 + i))}:${formatNumber(i % 2 == 0 ? 3 : 33)}`
        ),
        datasets: [
          {
            data: [65, 59, NaN, 48, 56, 57, 40],
            segment: {
              borderColor: (ctx) =>
                skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "rgb(192,75,75)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            borderWidth: 3,
            spanGaps: true,
          },
        ],
      },
      options: genericOptions,
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      style={{
        minWidth: "650px",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas ref={chartRef} width={600} height={300}></canvas>
    </div>
  );
};

export default DrawdownChart;
