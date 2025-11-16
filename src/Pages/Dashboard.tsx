import React from "react";
import Chart from "react-apexcharts";
import useDashboard from "../hooks/useDashboard";

export default function DashboardPage() {
  const { data, loading } = useDashboard();

  if (loading || !data) return <p>Loading...</p>;

  const typeLabels = Object.keys(data.totalByType);
  const typeValues = Object.values(data.totalByType);

  const months = Object.keys(data.monthlyTotals);
  const monthTotals = Object.values(data.monthlyTotals);

  return (
    <div className="p-6 space-y-10 overflow-y-auto w-full">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div className="bg-white p-4 rounded shadow w-full md:w-1/2">
          <h2 className="font-semibold mb-3">Expenses by Type</h2>
          <Chart
            type="pie"
            series={typeValues}
            options={{
              labels: typeLabels,
            }}
            width="100%"
          />
        </div>
        <div className="bg-white p-4 rounded shadow w-full md:w-1/2">
          <h2 className="font-semibold mb-3">Monthly Expenses</h2>
          <Chart
            type="line"
            series={[
              {
                name: "Expenses",
                data: monthTotals,
              },
            ]}
            options={{
              xaxis: {
                categories: months,
              },
            }}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
