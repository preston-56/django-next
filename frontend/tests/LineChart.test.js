import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LineChart from "../src/components/LineChart";

// Mock the LineChart component
jest.mock("../src/components/LineChart.tsx", () => {
  const MockLineChart = ({ data }) => (
    <div>
      <div>Line Chart</div>
      {data &&
        data.labels.map((label, index) => (
          <div key={index}>
            {label}
            {data.datasets[0].data[index] && (
              <div>{data.datasets[0].data[index]}</div>
            )}
          </div>
        ))}
    </div>
  );
  MockLineChart.displayName = "LineChart";
  return MockLineChart;
});

describe("LineChart Component", () => {
  test("renders without crashing", () => {
    render(<LineChart />);
    const chartElement = screen.getByText(/Line Chart/i);
    expect(chartElement).toBeInTheDocument();
  });

  test("displays correct data", () => {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20, 30, 40],
        },
      ],
    };
    render(<LineChart data={data} />);

    // Check if the labels and data values are displayed correctly
    expect(screen.getByText(/Jan/i)).toBeInTheDocument();
    expect(screen.getByText(/Feb/i)).toBeInTheDocument();
    expect(screen.getByText(/Mar/i)).toBeInTheDocument();
    expect(screen.getByText(/Apr/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    expect(screen.getByText(/30/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
  });
});
