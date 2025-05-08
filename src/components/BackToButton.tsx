import { ArrowLeft } from 'lucide-react';

interface BackToButtonProps {
  handleClick: () => void
}

const BackToButton = ({ handleClick }: BackToButtonProps) => {
  return (
    <button onClick={handleClick} className='cursor-pointer'>
      <ArrowLeft size= {30} /> 
    </button>
  );
};

export default BackToButton;