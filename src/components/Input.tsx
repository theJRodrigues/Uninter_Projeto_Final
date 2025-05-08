import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  customInputStyle?: string;
  customLabelStyle?: string;
  errorMessage: string | undefined
}

const Input = ({label, customInputStyle, customLabelStyle, errorMessage, ...props}: InputProps) => {
  const inputStyle = twMerge(`bg-gray-200 ring ring-black outline-0 rounded pl-1 py-0.5 focus:outline-0 w-full ${errorMessage && "ring ring-red-500"}`, customInputStyle);
  
  const labelStyle = twMerge("flex flex-col", customLabelStyle);
  return (
    <label className={labelStyle}>
      {label}
      <input
      type="text" 
      className={inputStyle}
      {...props}/> 
      {errorMessage && <p className="text-[13px] text-red-500">{errorMessage}</p>}
    </label>
  );
};

export default Input;