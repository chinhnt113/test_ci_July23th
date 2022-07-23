import React, { useState } from "react";

const InputLink = ({ setInputValue }) => {
  const [inputLink, setInputLink] = useState("");

  const handleSubmit = () => {
    setInputValue(inputLink);
  };

  return (
    <div className="inputContainer">
      <div className="inputHeader">Link Shortener</div>
      <div className="inputDesc">Enter your link and hit the button</div>
      <div className="input">
        <input
          type="text"
          value={inputLink}
          onChange={(e) => setInputLink(e.target.value)}
          placeholder="Enter your link here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InputLink;
