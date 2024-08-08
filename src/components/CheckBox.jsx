import React from 'react';

export default function CheckBox({ children, checked, onChange }) {
  return (
    <label className="checkbox" style={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? '#999' : '#333' }}>
      <input type="checkbox" className="blind" onChange={onChange} checked={checked} />
      {children}
    </label>
  );
}
