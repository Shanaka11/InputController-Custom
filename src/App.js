import React, { useState } from "react";
import "./styles.css";
import { Input } from "./Components/Input";

export default function App() {
  const [temp, setTemp] = useState([]);
  const [temp2, setTemp2] = useState([]);

  const handleFormSubmit = () => {
    console.log(temp, temp2);
  };

  return (
    <div className="App">
      <Input label="Field 1" setParentCallback={setTemp} />
      <Input label="Field 1" setParentCallback={setTemp2} />
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}
