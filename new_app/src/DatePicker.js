// DatePicker.js
import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('2024-02-01');
  const [endDate, setEndDate] = useState('2024-02-12');

  const handleApplyFilter = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className='container container-fluid p-3 rounded ' style={{ backgroundColor: '#f0f8ff' }}>
      <h4 className=''>Do you want to filter the data?</h4>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            className="form-control my-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            id="endDate"
            className="form-control my-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button type="button" className='btn btn-outline-info mt-2 col-md-12' onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default DatePicker;
