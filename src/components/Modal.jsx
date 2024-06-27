import React, { useState } from "react";
import { Inputbox } from "./Inputbox";
import axios from "axios";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [firstname, setFirstname] = useState("user");
  const [lastname, setLastname] = useState("user");
  const [balance, setBalance] = useState(0);
  const [changeFirstname, setChangeFirstname] = useState("");
  const [changeLastname, setChangeLastname] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const tocken = localStorage.getItem("token");
  return (
    <div>
      <div className="h-full flex items-center gap-2 px-2 sm:px-6 font-sans text-[0.7rem] sm:text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border">
        <button
          className="font-sans text-[0.7rem] sm:text-xs font-bold text-center text-white uppercase h-full"
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
          update
        </button>
      </div>

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
                  onChange={(e) => {
                    setChangeFirstname(e.target.value);
                  }}
                  labelname={`FirstName : ${firstname} `}
                  placeholder={`enter to update firstname`}
                />
                <Inputbox
                  onChange={(e) => {
                    setChangeLastname(e.target.value);
                  }}
                  labelname={`LastName : ${lastname}`}
                  placeholder="enter to update lastname"
                />
                {changePassword}
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

export default Modal;
