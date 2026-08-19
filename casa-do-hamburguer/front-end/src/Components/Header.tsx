import { Link } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        {user ? (
          <p className="text-white">Hello, {user.name}</p>
        ) : (
          <Link to="/login">
            <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-md bg-[#F2DAAC]">
              Login
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
