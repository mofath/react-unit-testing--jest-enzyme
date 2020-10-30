import React, { useState, useEffect } from 'react'

export default function InputText(props) {
  const [Value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    props.onChange(Value);

  };

  useEffect(() => {
    props.onChange(Value);
  }, [Value]);

  return (
    <div className="form-group">
      <label>{props.label}:</label>
      <input type="text"
        id={props.testHook}
        onChange={handleChange}
        value={props.value}
        className="form-control"
      />
    </div>
  )
};