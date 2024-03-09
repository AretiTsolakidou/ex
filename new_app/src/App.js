// App.js
import React, { useState, useEffect } from 'react';
import Table from './Table';
import ChartDE from './ChartDE';
import ChartGR from './ChartGR';
import ChartFR from './ChartFR';
import DatePicker from './DatePicker';
import Checkbox from './Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [timeseriesData, setTimeseriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showDE, setShowDE] = useState(true);
  const [showGR, setShowGR] = useState(true);
  const [showFR, setShowFR] = useState(true);

  // Read the data from the timeseries.json file
  useEffect(() => {
    const jsonData = require('./timeseries.json');
    console.log(jsonData);
    const transformedData = jsonData.map((item) => ({
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

    // Filter the data based on the selected date range and checkbox status
    const filtered = timeseriesData.filter(
      (entry) =>
        entry.timestamp >= startDate &&
        entry.timestamp <= endDateWithTime &&
        ((entry.DE_Price && showDE) || (entry.GR_Price && showGR) || (entry.FR_Price && showFR))
    );

    // Update the filtered data in the state
    setFilteredData(filtered);
  };

  const handleCheckboxChange = (dataset) => {
    switch (dataset) {
      case 'DE':
        setShowDE(!showDE);
        break;
      case 'GR':
        setShowGR(!showGR);
        break;
      case 'FR':
        setShowFR(!showFR);
        break;
      default:
        break;
    }
  };

  // Log checkbox values and data before rendering the Table
  //console.log('showDE:', showDE, 'showGR:', showGR, 'showFR:', showFR);
  //console.log('timeseriesData:', timeseriesData.slice(0, 5));

  // A table and three charts are displayed
  return (
    <div className="container m-auto w-75 pb-5">
      <h2 className="my-5 text-center">Data Analytics</h2>
      <DatePicker onDateChange={handleDateChange} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto mt-2">
              <h6>Which charts do you want to illustrate?</h6>
          </div>
          <div className="col-auto">
              <Checkbox label="Show DE" checked={showDE} onChange={() => handleCheckboxChange('DE')} />
          </div>
          <div className="col-auto">
              <Checkbox label="Show GR" checked={showGR} onChange={() => handleCheckboxChange('GR')} />
          </div>
          <div className="col-auto">
              <Checkbox label="Show FR" checked={showFR} onChange={() => handleCheckboxChange('FR')} />
           </div>
        </div>
      </div>

      <Table timeseriesData={filteredData} />
      <ChartDE timeseriesData={filteredData} />
      <ChartGR timeseriesData={filteredData} />
      <ChartFR timeseriesData={filteredData} />
    </div>
  );
};

export default App;
