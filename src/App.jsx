import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/SignUp.jsx";
import Signin from "./pages/Signin.jsx";
import Sendmoney from "./pages/Sendmoney.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Aftermoney from "./pages/Aftermoney.jsx";
import TransationHistory from "./pages/TransationHistory.jsx";
import { Toast } from "./components/Toast.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className=" text-slate-400 font-medium flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sendmoney" element={<Sendmoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer/complete" element={<Aftermoney />} />
          <Route path="/transactionhistory" element={<TransationHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Firstpage() {
  const [visible, setVisible] = useState("hidden");
  const notify1 = () => toast("Developer version");
  const notify2 = () => toast("Paytm v1");
  return (
    <div className=" p-10 w-full h-screen text-white text-sm bg-slate-700 flex flex-col ">
      <div className="flex justify-around text-xl">
        <button
          className="block"
          onClick={() => {
            setVisible("hidden");
            notify2();
          }}
        >
          Paytm v1
        </button>
        <button
          className="block"
          onClick={() => {
            setVisible("block");
            notify1();
          }}
        >
          Developer version
        </button>
      </div>

      <div>
        <Link to="/signup" target="_blank">
          <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
            Signup
          </button>
        </Link>
        <Link to="/signin" target="_blank">
          <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
            Signin
          </button>
        </Link>
        <Link to="/dashboard" target="_blank">
          <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
            Dashboard
          </button>
        </Link>
        <div className={visible}>
          <Link to="/sendmoney" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
              Sendmoney
            </button>
          </Link>

          <Link to="/transfer/complete" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
              transfer complete
            </button>
          </Link>
          <Link to="/transactionhistory" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
              transaction history
            </button>
          </Link>
        </div>
      </div>
      <Toast />
    </div>
  );
}

export default App;
