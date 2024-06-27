import { useState } from "react";
import Input from "./Components/input/Input";
import "./App.css";
import "./Variables.css";
import Button from "./Components/button/Button";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mobilenumber: "",
    mail: "",
    password: "",
  });

  const notLetters = /^[A-Za-z]+$/;

  function handelChange(e) {
    const value = e.target.value;

    if (e.target.name === "username" && e.target.type === "text") {
      if (value === "" || notLetters.test(value)) {
        setLoginUser({
          ...loginUser,
          username: value,
        });
      }
    } else if (e.target.name === "password" && e.target.type === "password") {
      setLoginUser({
        ...loginUser,
        password: value,
      });
    }
  }


  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div className={isRegister ? "wrapper active col-md-8 col-11" : "wrapper col-md-5 col-11"}>
          <div className="login-form">
            <div className="d-flex justify-content-center">
              <h3>Login</h3>
            </div>
            <Input
              labelName={"User Name"}
              inputName={"username"}
              inputType={"text"}
              onchange={handelChange}
              onchangeValue={loginUser}
              classname={"p-0"}
            />

            <Input
              labelName={"Password"}
              inputName={"password"}
              inputType={"password"}
              onchange={handelChange}
              onchangeValue={loginUser}
              classname={"p-0"}
            />
            <Button
              buttonText={"Login"}
              color={"success"}
              buttonClassName={"col-12 mt-5 fw-bold"}
              onclick={()=> { setIsLoginClicked(true) }}
            />
            <div className="d-flex my-3">
              <hr className="w-100" /> <span className="mx-1 mt-1"> OR </span>
              <hr className="w-100" />
            </div>
            <div className="d-flex justify-content-center">
              <Button
                buttonText={"Continue With Google"}
                color={"success"}
                buttonClassName={"col-12 fw-bold mb-4"}
              />
            </div>
            <div className="d-flex justify-content-center user-select-none">
              Don't have account?{" "}
              <span
                className="signUp_link ms-2 fw-bold"
                onClick={() => {
                  setIsRegister(true);
                }}
              >
                Sign Up
              </span>
            </div>
          </div>
          <div className="register-form">
            <div className="d-flex justify-content-center">
              <h3>Register</h3>
            </div>
            <div className="row row-cols-sm-2 row-cols-1">
              <div>
                <Input
                  labelName={"first Name"}
                  inputName={"username"}
                  inputType={"text"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
              <div>
                <Input
                  labelName={"last Name"}
                  inputName={"username"}
                  inputType={"text"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
            </div>

            <div className="row row-cols-sm-2 row-cols-1">
              <div>
                <Input
                  labelName={"User Name"}
                  inputName={"username"}
                  inputType={"text"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
              <div>
                <Input
                  labelName={"Email"}
                  inputName={"email"}
                  inputType={"email"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
            </div>

            <div className="row row-cols-sm-2 row-cols-1">
              <div>
                <Input
                  labelName={"Mobile Number"}
                  inputName={"email"}
                  inputType={"number"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
              <div>
                <Input
                  labelName={"Password"}
                  inputName={"password"}
                  inputType={"password"}
                  // onchange={handelChange}
                  // onchangeValue={user}
                  classname={"p-0"}
                />
              </div>
            </div>

            <Button
              buttonText={"Register"}
              color={"success"}
              buttonClassName={"col-12 mt-3 fw-bold"}
            />
            <div className="d-flex my-3">
              <hr className="w-100" /> <span className="mx-1 mt-1"> OR </span>
              <hr className="w-100" />
            </div>
            <div className="d-flex justify-content-center">
              <Button
                buttonText={"Continue With Google"}
                color={"success"}
                buttonClassName={"col-12 fw-bold mb-2"}
              />
            </div>
            <div className="d-flex justify-content-center user-select-none">
              Aldready have an account?{" "}
              <span
                className="signin_link ms-2 fw-bold"
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
