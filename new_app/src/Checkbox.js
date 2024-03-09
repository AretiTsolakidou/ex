// Checkbox.js
import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className='form-check form-check-inline mx-3'>
      <input type="checkbox" className="form-check-input" checked={checked} onChange={onChange} />
      <label className="form-check-label ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
