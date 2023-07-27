import "./App.css";
import { useState } from "react";
import Authenticate from "./components/Authenticate.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

export default function App() {
  const [token, setToken] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <>
      <SignUpForm
        token={token}
        setToken={setToken}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <Authenticate
        token={token}
        setToken={setToken}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
    </>
  );
}
