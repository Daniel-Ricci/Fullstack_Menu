import { ShoppingCart } from "lucide-react";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src="./house-special-double.png"
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">
            HOUSE SPECIAL DOUBLE
          </p>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            Two juicy 120g beef patties, cheddar cheese, crispy bacon, homemade
            mayonnaise, and pickles on a toasted brioche bun.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$28,90</p>
            <ShoppingCart size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
