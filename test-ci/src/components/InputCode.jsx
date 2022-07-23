import React, { useState } from "react";

const InputCode = ({ setInputCodeValue }) => {
  const [inputCode, setInputCode] = useState("");

  const handleSubmit = () => {
    setInputCodeValue(inputCode);
  };

  return (
    <div className="inputContainer">
      <div className="inputHeader">Get Info from code</div>
      <div className="inputDesc">Enter your code and hit the button</div>
      <div className="input">
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="Enter your Code here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InputCode;
