import React, { useState } from "react";

const OtpInput = ({
  separator,
  isInputNum,
  currentInputPlaceholder,
  isDisabled,
  hasErrord,
  isInputSecure,
  currentInputValue,
  setFinalInputValue,
}) => {
  const [inputValue, setInputValue] = useState(currentInputValue);

  // make password secure
  const getInputType = () => {
    if (isInputSecure) {
      return "password";
    } else if (isInputNum) {
      return "number";
    } else {
      return "text";
    }
  };

  const handleKeyDown = () => {
    // if delete or backspace
    // remmove
    // move focue to previous
  };

  return (
    <div>
      <input
        className={`otp-input ${hasErrord && "error-input"} flex jcc aic`}
        type={getInputType()}
        placeholder={currentInputPlaceholder}
        value={"*"}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isDisabled}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default OtpInput;
