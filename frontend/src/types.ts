// Define types for the data expected in each chart
export interface CandlestickDataEntry {
  x: string; // Date or label
  open: number; // Opening price
  high: number; // Highest price
  low: number; // Lowest price
  close: number; // Closing price
}

export interface CandlestickChartData {
  data: CandlestickDataEntry[];
}

export interface BarChartDataset {
  label: string;
  data: number[]; // Flat array for bar chart data
  borderColor?: string;
  backgroundColor?: string;
}

export interface LineChartDataset {
  label: string;
  data: number[]; // Flat array for line chart data
  borderColor?: string;
  fill?: boolean;
}

export interface PieChartDataset {
  label: string;
  data: number[]; // Flat array for pie chart data
  backgroundColor?: string[];
}

export interface ChartData {
  labels: string[];
  datasets: (BarChartDataset | LineChartDataset | PieChartDataset)[]; // Allow all dataset types
}
