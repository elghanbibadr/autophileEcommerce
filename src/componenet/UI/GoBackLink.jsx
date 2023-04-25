import { useNavigate,Link } from "react-router-dom";
const GoBackLink = () => {
    const navigate = useNavigate();
    const handleBackClick = () => navigate(-1);

    return <Link onClick={handleBackClick} className='text-lightBlack relative top-2 hover:underline'>Go Back</Link>

}

export default GoBackLink