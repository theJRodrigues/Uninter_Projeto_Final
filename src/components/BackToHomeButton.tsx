import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { routes } from '../constants/Routes';


const BackToHomeButton = () => {
  const navigate = useNavigate();
  const { home } = routes;
  const handleClick= ()=>{
    navigate(home)
  }
  return (
    <button onClick={handleClick} className='cursor-pointer'>
      <ArrowLeft size= {30} /> 
    </button>
  );
};

export default BackToHomeButton;