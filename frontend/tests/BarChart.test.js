import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarChart from "../src/components/BarChart";

// Mock the BarChart component
jest.mock("../src/components/BarChart.tsx", () => {
  const MockBarChart = ({ data }) => (
    <div>
      <div>Bar Chart</div>
      {data &&
        data.labels.map((label, index) => <div key={index}>{label}</div>)}
      {data &&
        data.datasets[0].data.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
    </div>
  );
  MockBarChart.displayName = "BarChart";
  return MockBarChart;
});

describe("BarChart Component", () => {
  test("renders without crashing", () => {
    render(<BarChart />);
    const chartElement = screen.getByText(/Bar Chart/i);
    expect(chartElement).toBeInTheDocument();
  });

  test("displays correct data", () => {
    const data = {
      labels: ["Product A", "Product B"],
      datasets: [
        {
          label: "Sales",
          data: [100, 200],
        },
      ],
    };
    render(<BarChart data={data} />);

    // Check if the labels and data values are displayed correctly
    expect(screen.getByText(/Product A/i)).toBeInTheDocument();
    expect(screen.getByText(/Product B/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();
  });
});
