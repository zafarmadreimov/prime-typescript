import {logo,menu,close} from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";
import { useState } from "react";

const Navbar = () => {

    const [togglenav,settogglenav]=useState(false);
    const [active,setactive]=useState("home");

    const toggleHandler = () => {
        settogglenav(prev => !prev); 
    };

    return (
        <div className={`w-full py-6 ${styles.flexBetween}`}>
            {/* Logo */}
           <img src={logo} alt="logo" className="w-[130px] h-[60px] cursor-pointer items-center" />

            {/* navigation link */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navigationLinks.map((nav, idx) => (
                <li 
                key={nav.id} 
                className={`font-monserrat font-normal cursor-pointer text-[16px] 
                            ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                            ${active === nav.id ? "text-white" : "text-lightWhite"} 
                            hover:text-white transition-all duration-500`}
                            onClick={() => setactive(nav.id)}
            >
                     <a href={`#${nav.id}`}> {nav.title}</a>
                     </li>
                ))}
            </ul>
            {/*Navigation btn*/}
            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                <img src={togglenav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain" onClick={toggleHandler}/>
                <div className={`${!togglenav ? "hidden":"flex"} p-6 absolute top-20 right-0 left-0 my-2 width  full sidebar bg-black-gradient z-[99]`}>
                <ul className="list-none flex justify-center items-center flex-1">
                {navigationLinks.map((nav, idx) => (
         <li 
    key={nav.id} 
    className={`font-monserrat font-normal cursor-pointer text-[16px] 
     ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
        ${active === nav.id ? "text-white" : "text-lightWhite"} 
             hover:text-white transition-all duration-500`}
                 onClick={() => setactive(nav.id)}
                                >
                    <a href={`#${nav.id}`}> {nav.title}</a>
                    </li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
