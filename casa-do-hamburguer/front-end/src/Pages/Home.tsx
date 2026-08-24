import Product from "../Components/Product";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("Burgers");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const selectedElement =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const notSelectedElement =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category === categoryName) {
      return selectedElement;
    } else {
      return notSelectedElement;
    }
  };

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Burgers")}
          onClick={() => handleChangeCategory("Burgers")}
        >
          Burgers
        </div>
        <div
          className={getCategoryClass("Drinks")}
          onClick={() => handleChangeCategory("Drinks")}
        >
          Drinks
        </div>
        <div
          className={getCategoryClass("Sides")}
          onClick={() => handleChangeCategory("Sides")}
        >
          Sides
        </div>
      </div>

      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>

      <div className="flex flex-col gap-2 md:gap-3">
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
