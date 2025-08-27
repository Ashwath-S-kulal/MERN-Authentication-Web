
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../Components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);

    if (data.success === false) {
      setError(true);
      return;
    }
    navigate('/sign-in');
  };


  return (
    <div className="max-w-sm md:max-w-lg mx-auto bg-gray-100 p-10 mt-14  shadow-2xl rounded-xl ring-2 ring-blue-100">
      <h1 className='text-3xl text-center text-black font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChange} type='text' placeholder='Username' id='username' className='bg-slate-300 p-3 px-6 rounded-lg' />
        <input onChange={handleChange} type='email' placeholder='email' id='email' className='bg-slate-300 p-3 px-6 rounded-lg' />
        <input onChange={handleChange} type='password' placeholder='password' id='password' className='bg-slate-300 p-3 px-6 rounded-lg' />
        <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:bg-slate-900 disabled:opacity-80 '>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <div className='flex flex-row gap-3  items-center'>
          <hr className='w-48'></hr><span className='text-black'>OR</span><hr className='w-48'></hr>
        </div>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-black'>have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-600'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-500 mt-3'>{error && "something went wrong!"}</p>
    </div>
  )
}
