const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] rounded-md bg-white px-2 py-2 text-xs text-[#32343E] placeholder-[#524f4b] outline-none"
    />
  );
};

export default Input;
