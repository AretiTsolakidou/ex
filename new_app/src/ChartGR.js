// ChartGR.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartGR = ({ timeseriesData }) => {
  const chartData = timeseriesData.map(entry => ({
    timestamp: entry.timestamp,
    GR_Price: parseFloat(entry.GR_Price),
  }));

    // Make a chart for the GR price to illustrate the trend over time
  return (
    <div>
      <h3 className='mt-5 mb-3 text-center'>GR Price Chart</h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={chartData}>
          <XAxis
            dataKey="timestamp"
            type="category"
            tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()}
            label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            label={{ value: 'GR Price (€)', angle: -90, position: 'insideLeft' }}
            domain={[-10, 140]}
            ticks={[0, 20, 40, 60, 80, 100, 120, 140]}
          />
          <Tooltip
            labelFormatter={(value) => new Date(value).toLocaleDateString()}
            formatter={(value, name) => {
              const correspondingEntry = chartData.find(entry => entry.GR_Price === value);
              return [`${value} €`, correspondingEntry ? `Time: ${new Date(correspondingEntry.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).slice(0, -6)} ${new Date(correspondingEntry.timestamp).toLocaleTimeString('en-US', { hour12: true }).slice(-2)}` : ''];
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line  type="monotone" dataKey="GR_Price" stroke="rgb(192, 75, 192)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartGR;