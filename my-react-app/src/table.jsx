import React from 'react';

const Table = ({ timeseriesData }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {timeseriesData.map((data) => (
          <tr key={data.timestamp}>
            <td>{data.timestamp}</td>
            <td>{data.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;