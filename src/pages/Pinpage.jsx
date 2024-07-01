import PinInput from "react-pin-input";
import { Button } from "../components/Button";
import { Logoutbutton } from "../components/Navigationbutton";
import { Dashboardbutton } from "../components/Navigationbutton";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Pinpage({}) {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState("hidden");
  const [pin, setPin] = useState(0);
  const tocken = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, to, tosendname, firstname, lastname, balance } =
    location.state || {
      amount: 0,
      to: "Not Autherised",
      tosendname: "Not Autherised",
      firstname: "Not Autherised",
      lastname: "Not Autherised",
    };
  return (
    <div className="w-full flex flex-col justify-center items-center  h-screen text-white">
      <div>
        <div className={visible2}>
          <Logoutbutton data="shrey" />
          <Dashboardbutton />
        </div>
        <div className=" w-[320px] sm:w-max border rounded-lg flex flex-col items-center p-10 px-0">
          <h1 className="text-2xl sm:text-3xl mt-[-20px] text-center px-14 ">
            PIN Verification
          </h1>
          <div className="w-full flex flex-col px-2 mt-6 bg-slate-500">
            <div className="flex justify-between">
              <span>To:</span>
              <span>{tosendname}</span>
            </div>
            <div className="flex justify-between">
              <span>Sending:</span>
              <span>{amount}</span>
            </div>
          </div>
          <span className="text-center mt-6 pb-1">Enter the 4-digit pin</span>

          <div className="mt-5 flex flex-col items-center w-full gap-4">
            <Toast />
            <PinInput
              length={4}
              initialValue=""
              secret={false}
              type="numeric"
              inputMode="number"
              style={{
                padding: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              inputStyle={{
                borderRadius: "10px",
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "#F9F6EE",
                backgroundColor: "#64748b",
              }}
              inputFocusStyle={{ borderColor: "#64748b" }}
              onComplete={(value, index) => {
                const pin = Number(value);
                setPin(pin);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>

          <div className="w-full px-1 mt-8 ">
            <div className="bg-slate-500 rounded-l-full rounded-r-full  flex items-center justify-start gap-3 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div className="h-10 flex flex-col text-[0.8rem]">
                <span>You are transferring money from Your </span>
                <span>account to {tosendname}</span>
              </div>
            </div>
          </div>
          <div className="w-full px-2 mb-[-20px] ">
            <Button
              input="Send Money"
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/api/v1/account/transfer",
                    {
                      amount: amount,
                      to: to,
                      pin: pin,
                    },
                    {
                      headers: {
                        authorization: `Bearer ${tocken}`,
                      },
                    }
                  )
                  .then((res) => {
                    // alert(`${res.data.message} 🎉🎉`);
                    const notify = () => toast(`done🎉🎉`);
                    notify();
                    navigate("/transfer/complete", {
                      state: {
                        amount: amount,
                        tosendname: tosendname,
                        firstname: firstname,
                        lastname: lastname,
                        balance: balance,
                      },
                    });
                  })
                  .catch((err) => {
                    setVisible2("flex justify-between w-full");
                    const mess = "Not Authorised";
                    const error = err.request.response || mess;
                    alert("transaction failed");
                    const notify = () => toast(`${error}🧐🧐`);
                    notify();
                  });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
