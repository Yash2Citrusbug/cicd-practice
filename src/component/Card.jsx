import React, { useState } from "react";
import OtpInput from "./OtpInput";

const Card = ({
  title,
  numberOfInput,
  separator,
  value,
  placeholder,
  isDisabled,
  hasErrored,
  isInputNum,
  isInputSecure,
}) => {

  // final input value 
  const [finalInputValue, setFinalInputValue] = useState("");
  
  return (

    <div className="card flex">
      <h3>{title || "Enter received code"}</h3>

      <div className="flex otp-input-wrapper">
        {Array.from({ length: numberOfInput }).map((_, i) => (
          <OtpInput
            key={i+'input'}
            separator={separator}
            isInputNum={isInputNum}
            currentInputPlaceholder={placeholder[i]}
            isDisabled={isDisabled}
            hasErrored={hasErrored}
            isInputSecure={isInputSecure}
            currentInputValue={value[i]}
            setFinalInputValue={setFinalInputValue}
          />
        ))}
      </div>

      <div className="action-btn-wrapper flex jcc aic">
        <button className="btn-primary">Clear</button>
        <button className="btn-primary">Verify</button>
      </div>
    </div>
  );
};

export default Card;
