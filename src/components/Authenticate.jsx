import { useState } from "react";

export default function Authenticate({
  token,
  successMessage,
  setSuccessMessage,
}) {
  // const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2 style={{ color: "#0026FF" }}>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button style={{ color: "#0026FF" }} onClick={handleClick}>
        Authenticate Token!
      </button>
    </div>
  );
}
