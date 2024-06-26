import { Navbar } from "../components/Navbar";
import { Payment } from "../components/Payment";
import { useEffect, useState } from "react";
import { Inputbox } from "../components/Inputbox";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../components/Toast";

export default function Dashboard() {
  const location = useLocation();
  const [balance, setBalance] = useState(0);
  const [filteredData, setFilteredData] = useState([
    { username: "plz enter a username in top bar" },
  ]);
  const [name, setName] = useState("User");
  const [userName, setuserName] = useState("User");
  const [error, setError] = useState("hello");
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
        setBalance(balance);
        setName(firstname);
        setuserName(username);
      })
      .catch(() => {
        const notify = () => toast("not authorised to be on this page");
        notify();
      });
  }, []);

  return (
    <div className="w-full h-screen bg-slate-700">
      <Toast />
      <Navbar firstname={name} />
      <div className="flex flex-col relative top-5 bg-slate-700 ">
        <div className="py-3 flex justify-between">
          <span className="ml-10">Your Balance: ${balance}</span>
          <span className="mr-10">{userName}</span>
        </div>
        <div className="bg-slate-700">
          <div className="px-10 mt-7">
            <Inputbox
              onChange={(e) => {
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
              placeholdername="Search Users"
            />
          </div>
          <div className="px-10 mt-5">
            {filteredData.map((user) => (
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
                          },
                        });
                  }
                }}
                usernameSendTo={user.username}
                firstname={user.firstname}
                lastname={user.lastname}
                id={user._id}
              />
            ))}
            <span className="text-3xl text-center">{error}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
