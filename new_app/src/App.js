// App.js
import React, { useState, useEffect } from 'react';
import Table from './Table';
import ChartDE from './ChartDE';
import ChartGR from './ChartGR';
import ChartFR from './ChartFR';
import DatePicker from './DatePicker';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [timeseriesData, setTimeseriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Read the data from the timeseries.json file
  useEffect(() => {
    const jsonData = require('./timeseries.json');
    console.log(jsonData); 
    const transformedData = jsonData.map(item => ({
      timestamp: item.DateTime,
      DE_Price: item.ENTSOE_DE_DAM_Price,
      GR_Price: item.ENTSOE_GR_DAM_Price,
      FR_Price: item.ENTSOE_FR_DAM_Price,
    }));

    setTimeseriesData(transformedData);
    setFilteredData(transformedData);
  }, []);

  const handleDateChange = (startDate, endDate) => {
    // Set the time part of endDate to 23:59:59
    const endDateWithTime = endDate + 'T23:59:59';
  
    // Filter the data based on the selected date range
    const filtered = timeseriesData.filter(
      (entry) => entry.timestamp >= startDate && entry.timestamp <= endDateWithTime
    );
  
    // Update the filtered data in the state
    setFilteredData(filtered);
  };

  // A table and three charts are displayed
  return (
    <div className="container m-auto w-75 pb-5">
      <h2 className='my-5 text-center'>Data Analytics</h2>
      <DatePicker onDateChange={handleDateChange} />
      <Table timeseriesData={filteredData} />
      <ChartDE timeseriesData={filteredData} />
      <ChartGR timeseriesData={filteredData} />
      <ChartFR timeseriesData={filteredData} />
    </div>
  );
};

export default App;
