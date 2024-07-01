import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdownbutton1 } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import { Th } from "../components/Thistory";
import "react-toastify/dist/ReactToastify.css";

export default function TransationHistory() {
  const tocken = localStorage.getItem("token");
  const [values, setValues] = useState([]);
  const [balance, setBalance] = useState("");
  const [userName, setUserName] = useState("");
  const [fname, setFname] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/getBallance", {
        headers: {
          authorization: `Bearer ${tocken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBalance(res.data.Balance);
        setUserName(res.data.username);
        setFname(res.data.firstname);
      })
      .catch(() => {
        const notify = () => toast("not signed in");
        notify();
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/transaction/history", {
        headers: {
          authorization: `Bearer ${tocken}`,
        },
      })
      .then((res) => {
        console.log(res.data.transaction);
        setValues(res.data.transaction.reverse());
        const notify1 = () => toast("Transaction history");
        notify1();
      })
      .catch(() => {
        const notify2 = () => toast("Not authorized to be on this place");
        notify2();
      });
  }, []);
  return (
    <div className="w-screen h-screen">
      <Toast />
      <div className="w-full flex flex-col gap-10 relative top-10 items-center">
        <Navbar usern={userName} name={fname} />
        <div className="py-3 flex flex-col sm:flex-row justify-center sm:justify-between w-full items-center mt-10 ">
          <span className="sm:ml-10 flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-8"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
            ${balance}
          </span>
          <span className="sm:mr-10 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <span>{userName}</span>
          </span>
        </div>
        <div className=" w-[90%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[35%] border mt-6 flex flex-col gap-5 p-5 rounded-xl">
          {values.map((value) => {
            return (
              <Th
                day={value.day}
                year={value.year}
                month={value.month}
                sendto={value.sendto}
                amount={value.amount}
                recived={value.recived}
                id={value._id}
                hour={value.hour}
                minutes={value.minutes}
                icon1={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                }
                icon2={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
