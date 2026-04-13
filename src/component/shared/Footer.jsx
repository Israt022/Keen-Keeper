import footerLogo from '../../assets/images/logo-xl.png'
import insta from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import x from '../../assets/images/twitter.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
            <nav className="grid grid-rows-1 gap-4">
                <img src={footerLogo} alt="" className='h-10'/>
                <p className='text-white/80'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </nav>
            <nav>
                <p className='text-white text-lg'>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                <a>
                    <img src={insta} alt="" />
                </a>
                <a>
                     <img src={facebook} alt="" />
                </a>
                <a>
                     <img src={x} alt="" />
                </a>
                </div>
            </nav>
            <div className='flex flex-col lg:flex-row justify-between w-full items-center mt-5'>
                <p className='text-white/80 text-sm'>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='text-white/80 flex flex-wrap gap-3 '>
                    <li>
                        <a className="link link-hover text-sm">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="link link-hover text-sm">Terms of Service</a>
                    </li>
                    <li>
                        <a className="link link-hover text-sm">Cookies</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;