import { twMerge } from "tailwind-merge";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: () => void;
  title?: string;
  text: string;
}

const ActionButton = ({action, title, text, ...props}: ActionButtonProps) => {
  
  const buttonClass = twMerge("bg-blue-600 py-1 px-4 rounded text-white cursor-pointer hover:bg-blue-700 w-[100%]", props.className);
  return (
    <div className=" space-y-1">
      {title &&
          <h2 className="text-gray-600">
          {title}
        </h2>
      }
      <button className={buttonClass}
        onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default ActionButton;