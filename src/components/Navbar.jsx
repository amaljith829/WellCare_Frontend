import { React, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b bg-white shadow-md px-4'>
            {/* Logo */}
            <img
                onClick={() => navigate('/')}
                className='w-32 cursor-pointer'
                src={assets.wellcare_logo}
                alt="Logo"
            />

            {/* Nav Links */}
            <ul className='hidden md:flex items-center gap-8 font-semibold flex-1 justify-center'>
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

            {/* Profile & Auth */}
            <div className='flex items-center gap-4 ml-auto'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full border-2 border-blue-500' src={assets.profile_pic} alt="Profile" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
                            <div className='hidden group-hover:block absolute top-4 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-blue-500 text-white rounded px-4 py-2 font-semibold shadow hover:bg-blue-600 transition'>Create Account</button>
                }
                {/* Hamburger Menu */}
                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="menu" />
            </div>

            {/* Mobile Menu */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="logo" />
                    <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="close" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar