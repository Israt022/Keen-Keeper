import { IoTimeOutline } from 'react-icons/io5';
import { PiChartLineLight } from 'react-icons/pi';
import { RiDropdownList, RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'
import { FaDropbox } from 'react-icons/fa';
import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive}) => `font-semibold btn border-none flex items-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><RiHome2Line size={20}/> Home</NavLink></li>
        <li><NavLink to='/timeline' className={({isActive}) => `font-semibold btn border-none flex items-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><IoTimeOutline size={20}/> Timeline</NavLink></li>
        <li><NavLink to='/status' className={({isActive}) => `font-semibold btn border-none flex items-center ${isActive ? 'bg-green-900 text-white' : 'text-gray-500'}`}><PiChartLineLight size={20}/> Status</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar container mx-auto">
                {/* <div className="flex-1">
                    <NavLink to='/' className="text-xl font-bold">
                    <img src={logo} alt="" />
                </NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex flex-wrap">
                        {links}
                    </ul>
                </div> */}
                <div className="navbar-start">
                    
                    {/* Mobile menu */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <RxDropdownMenu size={30}/>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <NavLink to='/' className="text-xl font-bold">
                        <img src={logo} alt="" className="h-8"/>
                    </NavLink>
                </div>

                {/* Desktop menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;