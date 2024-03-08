//App.js
import React, { useState, useEffect } from 'react';
import Table from './Table';
import ChartDE from './ChartDE';
import ChartGR from './ChartGR';
import ChartFR from './ChartFR';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [timeseriesData, setTimeseriesData] = useState([]);

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
  }, []);

  // A table and three charts are displayed
  return (
    <div className="container m-auto w-75 pb-5">
      <h2 className='my-5 text-center'>Data Analytics</h2>
      <Table timeseriesData={timeseriesData} />
      <ChartDE timeseriesData={timeseriesData} />
      <ChartGR timeseriesData={timeseriesData} />
      <ChartFR timeseriesData={timeseriesData} />
    </div>
  );
};

export default App;