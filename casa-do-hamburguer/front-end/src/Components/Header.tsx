import { Link, useLocation } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import { useContext, useEffect } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    const response = await fetch("http://localhost:3000/me", {
      credentials: "include",
    });

    if (response.status !== 200) return;

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    handleAuthUser();
  }, []);

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1";
    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    }
    return baseClass;
  };

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />

        {user ? (
          <div className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[#F2DAAC]">
              <Link to="/">
                <div className={getNavItemClass("/")}>
                  <Box size={18} />
                </div>
              </Link>
              <Link to="/orders">
                <div className={getNavItemClass("/orders")}>
                  <LayoutDashboard size={18} />
                </div>
              </Link>
              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1">
                <Plus size={18} />
              </div>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart size={18}></ShoppingCart>
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>Hello, {user.name}</p>
              <LogOut size={18} className="cursor-pointer"></LogOut>
            </div>
          </div>
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
