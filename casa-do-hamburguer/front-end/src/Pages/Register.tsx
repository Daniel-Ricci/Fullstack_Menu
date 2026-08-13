import { useState } from "react";
import { Link } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, zipCode });
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

        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />

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

        <Input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Input
          placeholder="Zip code"
          onChange={(e) => setZipCode(e.target.value)}
        />

        <Button title="Create account" />
        <Link to="/login" className="w-full">
          <Button title="I already have an account" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
