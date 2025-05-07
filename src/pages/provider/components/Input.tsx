import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  customInputStyle?: string;
  customLabelStyle?: string;
}

const Input = ({label, customInputStyle,customLabelStyle, ...props}: InputProps) => {
  const inputStyle = twMerge("bg-gray-200 ring ring-black outline-0 border border-white rounded pl-2 py-1 focus:outline-0 w-full", customInputStyle);
  
  const labelStyle = twMerge("flex flex-col space-y-1", customLabelStyle);
  return (
    <label className={labelStyle}>
      {label}
      <input 
      type="text" 
      className={inputStyle}
      {...props}/>
    </label>
  );
};

export default Input;