import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({
  labelName = "",
  inputType = "text",
  inputName = "",
  onchange=() => {},
  onchangeValue="",
  classname = "",
}) => {
  const [isEyeOn, setIsEyeOn] = useState(false);

  const exceptThisSymbols = ["e", "E", "+", "-", "."];

  return (
      <div className={`${classname}`}>
        {labelName && (
          <div>
            <label className="form_label" htmlFor={inputName}>
              {labelName}
            </label>
          </div>
        )}
        <div className="input-group mt-2">
          <input
            className="form_input form-control shadow-none"
            type={isEyeOn ? "text" : inputType !== "" ? inputType : "text"}
            name={inputName}
            // id={inputName !== "" && inputName + "-input"}
            value={
              inputName === "username"
                ? onchangeValue.username
                : inputName === "password"
                ? onchangeValue.password
                : ""
            }
            placeholder=" "
            onKeyDown={(e) =>
              inputType === "number" &&
              exceptThisSymbols.includes(e.key) &&
              e.preventDefault()
            }
            onChange={onchange}
          />
          {inputType === "password" &&
            (!isEyeOn ? (
              <span
                className="input-group-text eye"
                onClick={() => {
                  setIsEyeOn(!isEyeOn);
                }}
              >
                <ion-icon name="eye-off-outline"></ion-icon>
              </span>
            ) : (
              <span
                className="input-group-text eye"
                onClick={() => {
                  setIsEyeOn(!isEyeOn);
                }}
              >
                <ion-icon name="eye-outline"></ion-icon>
              </span>
            ))}
        </div>
      </div>
  );
};

export default Input;
