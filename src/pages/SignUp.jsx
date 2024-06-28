import { Heading } from "../components/Heading";
import { Inputbox, PinInputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Signup() {
  const [firstname, setFirst] = useState(" ");
  const [lastname, setLast] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [pin, setPin] = useState(0);
  const [vissible, setVissible] = useState(false);
  const [vissible1, setVissible1] = useState(false);
  const [error, setError] = useState(
    "Enter your information to create an account"
  );

  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-700 h-screen flex justify-center items-center box-si box-border">
      <div className="flex flex-col justify-center items-center p-4 rounded-lg border border-slate-500 bg-slate-700 ">
        <div className="mt-[-15px]">
          <Heading input="Sign up" />
        </div>
        <Toast />
        <p className="mt-2 w-full p-2 text-sm text-center text-white">
          {error}
        </p>
        <Inputbox
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          placeholdername="Jhon"
          labelname="First Name"
        />
        <Inputbox
          onChange={(e) => {
            setLast(e.target.value);
          }}
          placeholdername="Doe"
          labelname="Last Name"
        />
        <Inputbox
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholdername="johnoe@example.com"
          labelname="Email"
        />
        <div className="w-full flex flex-col">
          <Inputbox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholdername=" "
            labelname="Password"
            type={vissible ? "text" : "password"}
          />
          <div>
            <button
              onClick={() => {
                setVissible(!vissible);
              }}
              className="relative top-[-43px] right-[-250px]"
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
            <div className="mt-[-40px]">
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
                className="relative top-[-43px] right-[-250px]"
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
