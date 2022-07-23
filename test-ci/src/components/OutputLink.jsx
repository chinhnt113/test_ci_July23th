import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const OutputLink = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("Your shorten link goes here");
  const [domain1, setDomain1] = useState("");
  const [domain2, setDomain2] = useState("");
  const [domain3, setDomain3] = useState("");

  const doingShorten = async () => {
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      //   setShortenLink(res.data.result[{ domain }]);
      setDomain1(res.data.result.short_link);
      setDomain2(res.data.result.short_link2);
      setDomain3(res.data.result.short_link3);
      setShortenLink(res.data.result.short_link);
      console.log(res);
    } catch (err) {
      setDomain1(err.response.data.error);
      setDomain2(err.response.data.error);
      setDomain3(err.response.data.error);
      setShortenLink(err.response.data.error);
    }
  };

  const handleChangeDomain = (e) => {
    setShortenLink(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length) {
      doingShorten();
    }
  }, [inputValue]);

  return (
    <div className="outputContainer">
      <div className="outputDesc">
        Choose one of the following domains (Default: shrtco.de)
      </div>
      <div className="domainContainer">
        <input
          type="radio"
          id="domain1"
          name="domain"
          value={domain1}
          onChange={handleChangeDomain}
        />
        <label for="domain1">shrtco.de</label>
        <input
          type="radio"
          id="domain2"
          name="domain"
          value={domain2}
          onChange={handleChangeDomain}
        />
        <label for="domain2">9qr.de</label>
        <input
          type="radio"
          id="domain3"
          name="domain"
          value={domain3}
          onChange={handleChangeDomain}
        />
        <label for="domain3">shiny.link</label>
      </div>

      <div className="output">{shortenLink}</div>
    </div>
  );
};

export default OutputLink;
