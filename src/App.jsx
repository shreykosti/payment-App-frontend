import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Signup from "./pages/SignUp.jsx";
import Signin from "./pages/SignIn.jsx";
import Sendmoney from "./pages/Sendmoney.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UpdateProfile from "./pages/Updateprofile.jsx";
import Aftermoney from "./pages/Aftermoney.jsx";
function App() {
  return (
    <div className=" text-slate-400  h-full w-full font-medium bg-slate-700 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sendmoney" element={<Sendmoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/transfer/complete" element={<Aftermoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Firstpage() {
  return (
    <div className=" p-10 w-full h-screen text-white text-sm bg-slate-700 ">
      <button className="block">PAYTM V1</button>
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
      <Link to="/sendmoney" target="_blank">
        <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
          Sendmoney
        </button>
      </Link>
      <Link to="/dashboard" target="_blank">
        <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
          Dashboard
        </button>
      </Link>
      <Link to="/update" target="_blank">
        <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
          update
        </button>
      </Link>
      <Link to="/transfer/complete" target="_blank">
        <button className="p-5 border-4 rounded-lg border-blue-950 m-5 hover:bg-neutral-400">
          transfer complete
        </button>
      </Link>
    </div>
  );
}

export default App;
