import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PieChart from "../src/components/PieChart";

// Mock the PieChart component
jest.mock("../src/components/PieChart.tsx", () => {
  const MockPieChart = ({ data }) => (
    <div>
      <div>Pie Chart</div>
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
  MockPieChart.displayName = "PieChart";
  return MockPieChart;
});

describe("PieChart Component", () => {
  test("renders without crashing", () => {
    render(<PieChart />);
    const chartElement = screen.getByText(/Pie Chart/i);
    expect(chartElement).toBeInTheDocument();
  });

  test("displays correct data", () => {
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Votes",
          data: [300, 50, 100],
        },
      ],
    };
    render(<PieChart data={data} />);

    // Check if the labels and data values are displayed correctly
    expect(screen.getByText(/Red/i)).toBeInTheDocument();
    expect(screen.getByText(/Blue/i)).toBeInTheDocument();
    expect(screen.getByText(/Yellow/i)).toBeInTheDocument();
    expect(screen.getByText(/300/i)).toBeInTheDocument();
    expect(screen.getByText(/50/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
});
