import { Navbar } from "../components/Navbar";
import { Payment } from "../components/Payment";
import { useEffect, useState } from "react";
import { Inputbox } from "../components/Inputbox";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../components/Toast";
import Modal from "../components/Modal";
export default function Dashboard() {
  const location = useLocation();
  const [balance, setBalance] = useState(0);
  const [filteredData, setFilteredData] = useState([
    { username: "not authorised" },
  ]);
  const [name, setName] = useState("User");
  const [userName, setuserName] = useState("User");
  const [error, setError] = useState("hello");
  const [lastname, setlastname] = useState("User");
  const [visible, setVisible] = useState("hidden");
  const [popmessage, setPopmessage] = useState(
    "Not Authorised to be on this page"
  );
  const navigate = useNavigate();
  let tocken = localStorage.getItem("token");

  useEffect(() => {
    let signinsate = location.state || {
      state: false,
    };
    console.log(signinsate);
    if (signinsate === true) {
      const notify = () => toast("signin suceesfull");

      notify();

      signinsate = false;
    }

    axios
      .get("http://localhost:3000/api/v1/account/getBallance", {
        headers: {
          authorization: `Bearer ${tocken}`,
        },
      })
      .then((res) => {
        const balance = res.data.Balance;
        const firstname = res.data.firstname;
        const lastname = res.data.lastname;
        const username = res.data.username;
        const notify1 = () =>
          toast("Enter a username in top bar to search users");
        notify1();
        setPopmessage("Enter a username in search bar to search users");
        setBalance(balance);
        setName(firstname);
        setuserName(username);
        setlastname(lastname);
      })
      .catch(() => {
        const notify = () => toast("not authorised to be on this page");
        notify();
      });
  }, []);

  return (
    <div className="w-full h-screen bg-slate-700">
      <Toast />
      <Navbar name={name} usern={userName} />
      <div className="flex flex-col relative top-20 bg-slate-700 ">
        <div className="py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <span className="ml-0 sm:ml-10 flex gap-3 items-center">
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
          <span className="mr-0 sm:mr-10 flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            {userName}
          </span>
        </div>
        <div className="bg-slate-700">
          <div className="px-10 mt-7">
            <Inputbox
              message={popmessage}
              vissibl={true}
              onChange={(e) => {
                setVisible("visible");
                axios
                  .get(
                    `http://localhost:3000/api/v1/user/bulk?filter=${
                      e.target.value || " "
                    }`,
                    {
                      headers: {
                        authorization: `Bearer ${tocken}`,
                      },
                    }
                  )
                  .then((res) => {
                    setError("hello");
                    setFilteredData(res.data.users);
                  })
                  .catch((err) => {
                    if (!tocken) {
                      const notify = () => toast("signin to be on this page");
                      notify();
                      setError("you are not authorised to be on this page");
                    }

                    console.log(tocken);
                  });
              }}
              labelname="Users"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
            />
          </div>
          <div className={`px-10 mt-5 ${visible}`}>
            {filteredData.map((user) => (
              <div>
                <Payment
                  onClick={() => {
                    {
                      tocken === null
                        ? navigate("/signup")
                        : navigate("/sendmoney", {
                            state: {
                              usernameSendTo: user.username,
                              firstname: user.firstname,
                              lastname: user.lastname,
                              id: user._id,
                              balance: balance,
                              you: userName,
                              youname: name,
                            },
                          });
                    }
                  }}
                  usernameSendTo={user.username}
                  firstname={user.firstname}
                  lastname={user.lastname}
                  amount={balance}
                />
              </div>
            ))}
            <span className="text-3xl text-center">{error}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
