import React from 'react';

function Dropdown(props) {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="form-group">
      <label>{props.label}:</label>
      <select className="form-control"
        id={props.testHook}
        value={props.selectedOption}
        onChange={handleChange}
        disabled={!props.options.length}>

        <option defaultValue>{props.placeholder}</option>
        {props.options.map((op) => (
          <option key={op.value} value={op.value}>{op.label}</option>
        ))}

      </select>
    </div>
  );
}

export default Dropdown;