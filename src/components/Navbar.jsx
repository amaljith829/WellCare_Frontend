import {React,useState} from 'react'
import { assets } from '../assets/assets'
import { NavLink,useNavigate } from 'react-router-dom'

const Navbar = () => {

             const navigate=useNavigate();
             const [showMenu, setShowMenu] = useState(false);
             const[token,setToken]=useState(true);
    
return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b bg-white shadow-md p-4'>
        <img onClick={()=>navigate('/')} className='w-32 cursor-pointer' src={assets.wellcare_logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-8 font-semibold'>
            <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
            >
                <li className='py-1'>HOME</li>
            </NavLink>
            <NavLink 
                to='/doctors' 
                className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
            >
                <li className='py-1'>ALL DOCTORS</li>
            </NavLink>
            <NavLink 
                to='/about' 
                className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
            >
                <li className='py-1'>ABOUT</li>
            </NavLink>
            <NavLink 
                to='/contact' 
                className={({ isActive }) => isActive ? 'underline text-blue-500' : ''}
            >
                <li className='py-1'>CONTACT</li>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
                    <div className='hidden group-hover:block absolute top-4 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>

                </div>
                :<button onClick={()=>navigate('/login')} className='bg-blue-500 text-white rounded px-4 py-2'>Create Account</button>
            }
            
        </div>
    </div>
)
}

export default Navbar