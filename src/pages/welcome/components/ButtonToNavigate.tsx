import {twMerge} from "tailwind-merge"
interface ButtonToNavigate extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  text: string;
}

const ButtonToNavigate = ({ handleClick, text, ...props }: ButtonToNavigate) => {
  const className = twMerge("bg-green-600 py-2 px-3 rounded w-[200px] hover:bg-green-700 cursor-pointer", props.className);
  
  return (
    <button
      onClick={handleClick}
      className={className}
    > 
        {text}
    </button>
  );
};

export default ButtonToNavigate;