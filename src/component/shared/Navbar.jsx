import { IoTimeOutline } from 'react-icons/io5';
import { PiChartLineLight } from 'react-icons/pi';
import { RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive}) => `font-semibold btn border-none flex item-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><RiHome2Line size={20}/> Home</NavLink></li>
        <li><NavLink to='/timeline' className={({isActive}) => `font-semibold btn border-none flex item-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><IoTimeOutline size={20}/> Timeline</NavLink></li>
        <li><NavLink to='/status' className={({isActive}) => `font-semibold btn border-none flex item-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><PiChartLineLight size={20}/> Status</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <NavLink to='/' className="text-xl font-bold">
                    {/* Keen<span className='text-gray-600 font-semibold'>Keeper</span> */}
                    <img src={logo} alt="" />
                </NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex-wrap">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;