import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";

import axios from "axios";
export default function Signin() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(
    "Enter your credentials to access your account "
  );
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const notify = () => toast("account acreated succesfully");
      notify();
    }
  }, [location]);
  return (
    <div className="w-screen h-screen  flex justify-center items-center box-si box-border bg-slate-700">
      <div className="  vmd:bg-slate-700 w-max  flex flex-col justify-center items-center p-4 rounded-lg bg-c2 border border-slate-500">
        <Heading input="Sign In" />
        <p className="mt-2 w-full p-2 text-center text-sm ">{error}</p>

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
                const notify = () =>
                  toast(err.request.response || "Not Authorized To Be Here");
                notify();
                setError(err.request.response || "Not Authorized To Be Here");
              });
          }}
        />
        <Toast />
        <p className="mt-4">
          Don't have an have an account?
          <Link to="/signup">
            <button className="text-black">
              <span className=" hover:text-white">Sign Up</span>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
