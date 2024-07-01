import React, { useState } from "react";
import { Inputbox } from "./Inputbox";
import { Toast } from "./Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Modal = ({ border, size }) => {
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
      <div
        className={`w-full ${border}  relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold text-white  border border-gray-200  shadow-sm gap-x-2   disabled:opacity-50 disabled:pointer-events-none`}
      >
        <button
          className={` px-4 py-[13px] font-sans   ${size} font-bold text-center text-white w-full bbg  h-full`}
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
          Update
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
                  vissibl={true}
                  message={"Enter a name to update your first name"}
                  onChange={(e) => {
                    setChangeFirstname(e.target.value);
                  }}
                  labelname={`FirstName : ${firstname} `}
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
                />
                <Inputbox
                  vissibl={true}
                  message={"Enter a name to update your last name"}
                  onChange={(e) => {
                    setChangeLastname(e.target.value);
                  }}
                  labelname={`LastName : ${lastname}`}
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
                />
                {changePassword}
                <Inputbox
                  onChange={(e) => {
                    setChangePassword(e.target.value);
                  }}
                  labelname={`Password  `}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  }
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
