import { Heading } from "../components/Heading";
import { Inputbox, PinInputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import { Navbar } from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Signup() {
  const [firstname, setFirst] = useState(" ");
  const [lastname, setLast] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [pin, setPin] = useState(0);
  const [vissible1, setVissible1] = useState(false);
  const [show, setShow] = useState("hidden");
  const [error, setError] = useState(
    "Enter your information to create an account"
  );

  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-700 h-screen flex justify-center items-center box-si box-border">
      <Navbar display={show} />
      <div className="flex flex-col justify-center items-center p-4 rounded-lg border border-slate-500 bg-slate-700 ">
        <div className="mt-[-15px]">
          <Heading input="Sign up" />
        </div>
        <Toast />
        <p className="mt-2 w-full p-2 text-sm text-center text-white">
          {error}
        </p>
        <Inputbox
          vissibl={true}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="BLACK"
              class="size-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          }
          labelname="First Name"
          message={"Enter your first name"}
        />
        <Inputbox
          vissibl={true}
          onChange={(e) => {
            setLast(e.target.value);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="BLACK"
              class="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          }
          labelname="Last Name"
          message={"Enter your last name"}
        />
        <Inputbox
          vissibl={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          }
          labelname="Email"
          message={"Enter your email"}
        />
        <div className="w-full flex flex-col">
          <Inputbox
            vissibl={false}
            icon2={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            }
            message={"Enter your password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            labelname="Password"
          />
          <div>
            <div>
              <PinInputbox
                type={vissible1 ? "text" : "password"}
                onChange={(e) => {
                  const pin = Number(e.target.value);
                  setPin(pin);
                }}
              />
              <button
                onClick={() => {
                  setVissible1(!vissible1);
                  console.log(vissible1);
                }}
                className="relative z-10 top-[-43px] right-[-250px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-[-50px]">
          <Button
            input="Sign Up"
            onClick={() => {
              axios
                .post("http://localhost:3000/api/v1/user/signup", {
                  firstname: firstname,
                  lastname: lastname,
                  username: username,
                  password: password,
                  pin: pin,
                })
                .then((res) => {
                  let jwttocken = res.data.token;
                  localStorage.setItem("token", jwttocken);
                  navigate("/signin", {
                    state: true,
                  });
                })
                .catch((err) => {
                  console.log(err.request);
                  const notify = () =>
                    toast(err.request.response || "Not Authorized To Be Here");
                  notify();
                  setError(err.request.response || "Not Authorized To Be Here");
                  setShow("flex");
                });
            }}
          />
        </div>

        <p className="mt-4">
          Already have an account?
          <Link to="/signin">
            <button className="text-white">
              <span className=" hover:text-black hover:text-xl">Sign In</span>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
