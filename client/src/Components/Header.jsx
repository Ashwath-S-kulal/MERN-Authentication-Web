import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className='sticky top-0 left-0 w-full bg-gray-200 text-black h-16  px-6 z-50 shadow-md'>
      <div className='flex justify-between items-baseline max-w-6xl mx-auto p-4'>
        <Link to='/'><h1 className='font-bold text-black text-lg md:text-2xl'>Auth Web</h1></Link>
        <ul className='flex gap-4 text-sm md:text-lg'>
          <Link to='/' className=" text-black hover:text-blue-700"><li>Home</li></Link>
          <Link to='/about' className=" text-black  hover:text-blue-700"><li>About</li></Link>
          <Link to='/profile' className=" text-black  hover:text-blue-700">
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="image"
                className="h-7 w-7 rounded-full object-cover" />
            ) : (<li>Sign In</li>)}
          </Link>
        </ul>
      </div>
    </div>
  )
}
