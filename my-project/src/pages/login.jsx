import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let aymaan = ["AYMAAN", "AYMAANWEB"];
  let mahmudul = ["MAHMUDUL", "MODULETRUMP"];
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  console.log(user);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.toUpperCase() === aymaan[0] && pass.toUpperCase() === aymaan[1]) {
      navigate("/aymaan");
    } else if (
      user.toUpperCase() === mahmudul[0] &&
      pass.toUpperCase() === mahmudul[1]
    ) {
      navigate("/mahmudul");
    }
  };

  return (
    <>
      <div
        className="main w-full h-screen flex justify-center items-center bg-gray-800"
        style={{ fontFamily: "Silkscreen" }}
      >
        <div
          className="maindiv bg-black-400 h-120 w-80 p-8  bg-black rounded-2xl border-white border text-center hover:shadow-2xl shadow-white sm:w-140"
          style={{ transition: "0.7s" }}
        >
          <h1
            className="hello font-bold text-2xl mt-5 text-white"
            style={{ fontFamily: "Silkscreen" }}
          >
            Welcome to the System
          </h1>
          <p className="text-white mt-3">Identify yourself before proceeding</p>

          <input
            type="text"
            placeholder="username"
            className=" w-60 border border-white rounded-2xl h-10 text-white p-2 text-center mt-8 sm:w-100"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            className=" w-60 border border-white rounded-2xl h-10 text-white p-2 text-center mt-8 sm:w-100"
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="w-60 h-10 bg-white rounded-2xl mt-12 sm:w-100" onClick={handleLogin}>
            Log in
          </button> 
        </div>
      </div>
    </>
  );
}
export default Login;
