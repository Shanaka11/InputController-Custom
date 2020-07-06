import React, { useState } from "react";

export const Input = ({ label, name, setParentCallback }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState([]);

  const handleFocus = () => {
    if (!active) {
      setActive(true);
    }
  };
  const handleBlur = () => {
    // Set The state in the parent element
    setParentCallback(value);
    if (active) {
      if (value === "") {
        setActive(false);
      }
    }
  };

  const onChangeHandler = event => {
    setValue(event.target.value);
  };

  const labelClassName = `form-label${active ? "-active" : ""}`;

  return (
    <>
      <div className="form-control">
        <input
          name={name}
          type="text"
          className="form-input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChangeHandler}
          value={value}
        />
        <label className={labelClassName}>{label}</label>
      </div>
    </>
  );
};
