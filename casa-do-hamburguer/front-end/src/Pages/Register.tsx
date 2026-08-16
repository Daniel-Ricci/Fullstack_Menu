import { useState } from "react";
import { Link } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!name || !email || !password || !zip) {
        setError("All information are required to register new user.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password, zip }),
      });

      switch (response.status) {
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setZip("");
          setError("");
          break;
        case 400:
          setError("Missing information to register new user.");
          break;
        case 409:
          setError("E-mail already registered.");
          break;
        case 500:
          setError("Server error.");
          break;
        default:
          setError("");
      }
    } catch (error) {
      console.log(error);
      return;
    }
    console.log({ name, email, password, confirmPassword, zip });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mx-auto mb-4" />
        </Link>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Input
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <Input
            placeholder="Zip code"
            onChange={(e) => setZip(e.target.value)}
            value={zip}
          />

          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>

        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title="Create account" type="submit" />
          <Link to="/login" className="w-full">
            <Button title="I already have an account" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
