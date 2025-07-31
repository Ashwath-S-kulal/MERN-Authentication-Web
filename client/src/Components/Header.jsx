import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='sticky top-0 left-0 w-full bg-gray-800 text-white h-16  px-6 z-50 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
            <Link to='/'><h1 className='font-bold text-white text-lg'>Auth App</h1></Link>
            <ul className='flex gap-4'>
                <Link to='/' className="font-serif text-white hover:text-blue-700"><li>Home</li></Link>
                <Link to='/project' className="font-serif text-white  hover:text-blue-700"><li>Project</li></Link>
                <Link to='/profile' className="font-serif text-white  hover:text-blue-700">
                {currentUser? (
                  <img src={currentUser.profilePicture} alt="image"
                  className="h-7 w-7 rounded-full object-cover" />
                ):( <li>Sign In</li> )}
                </Link>
            </ul>
        </div>
    </div>
  )
}
