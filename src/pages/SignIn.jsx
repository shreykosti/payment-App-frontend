import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Signin() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [vissible, setVissible] = useState(false);
  const [show, setShow] = useState("hidden");
  const [error, setError] = useState(
    "Enter your information to create an account"
  );

  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-700 h-screen flex justify-center items-center box-si box-border">
      <Navbar display={show} />
      <div className="flex flex-col justify-center items-center p-4 rounded-lg border border-slate-500 bg-slate-700 ">
        <Heading input="Sign in" />
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        <Toast />
        <p className="mt-2 w-full p-2 text-sm text-center text-white">
          {error}
        </p>
        <Inputbox
          vissibl={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholdername="johnoe@example.com"
          labelname="Email"
          message="Enter email "
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            labelname="Password"
            message="Enter password"
            type={vissible ? "text" : "password"}
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
          />
        </div>
        <div className="w-full">
          <Button
            input="Sign In"
            onClick={() => {
              axios
                .post("http://localhost:3000/api/v1/user/signin", {
                  username: username,
                  password: password,
                })
                .then((res) => {
                  let jwttocken = res.data.token;
                  localStorage.setItem("token", jwttocken);
                  navigate("/dashboard", {
                    state: true,
                  });
                })
                .catch((err) => {
                  console.log(err.request.response);
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
          Don't have an have an account?
          <Link to="/signup">
            <button className="text-white">
              <span className="hover:text-black hover:text-xl">Sign Up</span>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
