import { useState } from "react";
import OrderCard from "../Components/OrderCard";

const Orders = () => {
  const [category, setCategory] = useState("Pending");

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
      {/* Categorias */}
      <div className="mt-1 mb-3 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Pending")}
          onClick={() => handleChangeCategory("Pending")}
        >
          Pending
        </div>
        <div
          className={getCategoryClass("Picked Up")}
          onClick={() => handleChangeCategory("Picked Up")}
        >
          Picked Up
        </div>
        <div
          className={getCategoryClass("Canceled")}
          onClick={() => handleChangeCategory("Canceled")}
        >
          Canceled
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <OrderCard
          id={2}
          name="Daniel Ricci"
          date="27/12/2027"
          orderTime="21:00"
          deliveredTime="21:15"
          total={124.75}
        />
      </div>
    </div>
  );
};

export default Orders;
