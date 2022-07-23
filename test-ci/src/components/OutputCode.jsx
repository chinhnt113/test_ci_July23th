import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const OutputLink = ({ inputCodeValue }) => {
  const [result, setResult] = useState("Your initial link goes here");

  const doingShorten = async () => {
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/info?code=${inputCodeValue}`
      );
      setResult(res.data.result.url);
      console.log(res);
    } catch (err) {
      setResult(err.response.data.error);
    }
  };

  useEffect(() => {
    if (inputCodeValue.length) {
      doingShorten();
    }
  }, [inputCodeValue]);

  return (
    <div className="outputContainer">
      <div className="outputDesc">
        Your initial link with code
      </div>

      <div className="output">{result}</div>
    </div>
  );
};

export default OutputLink;
