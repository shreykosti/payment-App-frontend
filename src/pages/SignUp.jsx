import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
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
  const [error, setError] = useState(
    "Enter your information to create an account"
  );

  const navigate = useNavigate();

  return (
    <div className="w-full h-full  flex justify-center items-center box-si box-border bg-slate-700  ">
      <div className=" p flex flex-col justify-center items-center p-4 rounded-lg border border-slate-500 bg-slate-700 ">
        <Heading input="Sign up" />
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
        <Inputbox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholdername=" "
          labelname="Password"
        />
        <Button
          input="Sign Up"
          onClick={() => {
            axios
              .post("http://localhost:3000/api/v1/user/signup", {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
              })
              .then((res) => {
                let jwttocken = res.data.token;
                localStorage.setItem("token", jwttocken);
                navigate("/signin", {
                  state: true,
                });
              })
              .catch((err) => {
                console.log(err.request.response);
                const notify = () =>
                  toast(err.request.response || "Not Authorized To Be Here");
                notify();
                setError(err.request.response || "Not Authorized To Be Here");
              });
          }}
        />

        <p className="mt-4">
          Already have an account?
          <Link to="/signin">
            <button className="text-black">
              <span className=" hover:text-white">Sign In</span>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
