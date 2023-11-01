import React, { useState } from "react";

const MarketForm = ({ searchInput }) => {
  const [isInput, setIsInput] = useState("");
  const HandleChange = (event) => {
    const { value } = event.target;
    setIsInput(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (isInput.length > 0) {
      return searchInput(isInput);
    } else {
      return setIsInput("");
    }
  };
  return (
    <div className="marketform__div">
      <h1 className="h1">cryptocurrency prices by market cap</h1>
      <div className="form__in">
        <form className="form__divs" onSubmit={onSubmit}>
          <input
            placeholder="search for a crypto currency...."
            onChange={HandleChange}
            value={isInput}
          />
        </form>
      </div>
    </div>
  );
};

export default MarketForm;
