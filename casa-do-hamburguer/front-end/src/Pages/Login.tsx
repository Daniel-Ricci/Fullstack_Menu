import { useState } from "react";
import { Link } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!(email && password)) {
        setError("User and password are required.");
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      switch (response.status) {
        case 200:
          setError("");
          const data = await response.json();
          console.log(data);
          return;
        case 400:
          setError("User and password are required.");
          return;
        case 401:
          setError("Invalid credentials.");
          return;
        case 404:
          setError("User not found.");
          return;
        case 500:
          setError("Server error.");
          return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>

        <Button title="Login" type="submit" />

        <Link to="/register" className="w-full">
          <Button title="Create account" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
