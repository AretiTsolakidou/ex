// App.js
import React, { useState, useEffect } from 'react';
import Table from './table';
import Chart from './chart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [timeseriesData, setTimeseriesData] = useState([]);

  useEffect(() => {
    // Fetch or load your JSON data here
    // Example: fetch('your-data-url').then(response => response.json()).then(data => setTimeseriesData(data));
    // For simplicity, I'll use dummy data here
    const dummyData = [
      { timestamp: '2022-01-01', value: 10 },
      { timestamp: '2022-01-02', value: 15 },
      // Add more data points as needed
    ];
    setTimeseriesData(dummyData);
  }, []);

  return (
    <div className="container mt-5">
      <Table timeseriesData={timeseriesData} />
      <Chart timeseriesData={timeseriesData} />
    </div>
  );
};

export default App;