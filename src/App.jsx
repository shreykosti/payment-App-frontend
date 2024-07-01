import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import Signup from "./pages/SignUp.jsx";
import Signin from "./pages/Signin.jsx";
import Sendmoney from "./pages/Sendmoney.jsx";
import Dashboard from "./pages/Dashboard.jsx";
const Aftermoney = lazy(() => import("./pages/Aftermoney.jsx"));
import TransationHistory from "./pages/TransationHistory.jsx";
import Pinpage from "./pages/Pinpage.jsx";
const Landingpage = lazy(() => import("./pages/Landingpage.jsx"));
import { Toast } from "./components/Toast.jsx";
import { toast } from "react-toastify";
import { Loader1 } from "./loader/loader1.jsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" text-slate-400 font-medium flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader1 />}>
                {showLandingPage ? <Landingpage /> : <Loader1 />}
              </Suspense>
            }
          />
          <Route path="/loader" element={<Loader1 />} />
          <Route path="/developerVersion" element={<Firstpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sendmoney" element={<Sendmoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/transfer/complete"
            element={
              <Suspense fallback={"...loading"}>
                <Aftermoney />
              </Suspense>
            }
          />
          <Route path="/transactionhistory" element={<TransationHistory />} />
          <Route path="/pinpage" element={<Pinpage />} />
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
    <div className=" p-10 w-full h-screen text-white text-sm bg-slate-700 flex flex-col justify-center">
      <div className="flex justify-around text-2xl mb-10">
        <span className="block p-3 bg-black rounded-lg">Paytm v1</span>
        <span className="p-3 bg-black rounded-lg">Developer version</span>
      </div>

      <div>
        <div className="text-xl">
          <Link to="/signup" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400 hover:text-black">
              Signup
            </button>
          </Link>
          <Link to="/signin" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400 hover:text-black">
              Signin
            </button>
          </Link>
          <Link to="/dashboard" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400 hover:text-black">
              Dashboard
            </button>
          </Link>
        </div>

        <div>
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
          <Link to="/pinpage" target="_blank">
            <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
              Pin Page
            </button>
          </Link>
        </div>
      </div>
      <Toast />
    </div>
  );
}

export default App;
