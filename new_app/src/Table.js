// Table.js
import React from 'react';

const Table = ({ timeseriesData }) => {
  // Make a table which contains the data from the timeseries.json file
  return (
    <div className='table-responsive w-75 container-fluid my-5' style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <table className="table table-bordered border-light border border-4">
        <thead className="position-sticky top-0 bg-white">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>DE_Price</th>
            <th>GR_Price</th>
            <th>FR_Price</th>
          </tr>
        </thead>
        <tbody>
          {timeseriesData.map((data) => {
            const dateTime = new Date(data.timestamp);
            const date = dateTime.toLocaleDateString();
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            const time = dateTime.toLocaleTimeString('el-GR', timeOptions);
            const amPm = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).slice(-2);

            return (
              // Place the data to the correct dolumn 
              <tr key={data.timestamp} className='border border-light border-2'>
                <td>{date}</td>
                <td>{time} {amPm}</td>
                <td>{data.DE_Price}€</td>
                <td>{data.GR_Price}€</td>
                <td>{data.FR_Price}€</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
