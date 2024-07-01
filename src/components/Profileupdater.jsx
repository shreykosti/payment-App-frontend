import React, { useState } from "react";
import { Inputbox } from "./Inputbox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Profileupdater = ({ outerdiv, innerbutton, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstname, setFirstname] = useState("user");
  const [lastname, setLastname] = useState("user");
  const [balance, setBalance] = useState(0);
  const [changeFirstname, setChangeFirstname] = useState("");
  const [changeLastname, setChangeLastname] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const tocken = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className={`hidden sm:block ${outerdiv}`}>
      <span className="bg-white">
        <button
          className={`hidden sm:flex items-center ${innerbutton}`}
          onClick={() => {
            axios
              .get("http://localhost:3000/api/v1/account/getBallance", {
                headers: {
                  authorization: `Bearer ${tocken}`,
                },
              })
              .then((res) => {
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setBalance(res.data.Balance);
              })
              .catch(() => {});
            handleOpen();
          }}
        >
          <span className="">Hello,{name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6  w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </span>

      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex flexx-col gap-40">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your profile
                  </h3>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {balance}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                  }}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 text-xl text-black">
                {/* input */}
                <Inputbox
                  vissibl={true}
                  onChange={(e) => {
                    setChangeFirstname(e.target.value);
                  }}
                  labelname={`FirstName : ${firstname} `}
                  placeholder={`enter to update firstname`}
                />
                <Inputbox
                  vissibl={true}
                  onChange={(e) => {
                    setChangeLastname(e.target.value);
                  }}
                  labelname={`LastName : ${lastname}`}
                  placeholder="enter to update lastname"
                />
                <Inputbox
                  onChange={(e) => {
                    setChangePassword(e.target.value);
                  }}
                  labelname={`Password  `}
                  placeholder="shrey"
                />
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => {
                    axios
                      .put(
                        "http://localhost:3000/api/v1/user/update",
                        {
                          firstname: changeFirstname,
                          lastname: changeLastname,
                        },
                        {
                          headers: {
                            authorization: `Bearer ${tocken}`,
                          },
                        }
                      )
                      .then((res) => {
                        window.location.reload();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    handleClose();
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    handleClose();
                  }}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
