import React from 'react';

export default function Radio({ children, name, checked, value, onChange }) {
  return (
    <label className="radio">
      <input type="radio" name={name} className="blind" defaultChecked={checked} value={value} onChange={onChange} />
      {children}
    </label>
  );
}
