import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <nav className={`nav w-full flex justify-between items-center px-[2%] lg:px-[12%] sm:px-[8%] h-[70px] fixed top-0 left-0 right-0 border border-[#045eb014] transition-all duration-500 z-50 ${isActive ? 'bg-white shadow-lg' : ''}`}>

                <div className="nav-left flex items-center">
                    <div className="nav-logo">
                        <Link to="/">
                            <h1 className="text-3xl font-semibold unbounded-font ">
                                Stud <span className='text-[#006dca] unbounded-font'> IQ</span>
                            </h1>
                        </Link>
                    </div>

                    <ul className='hidden xl:flex gap-8 items-center ms-20 nav-menu'>
                        <li className='relative px-4 py-1.5 group'>
                            <Link to="/" className='font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300'>Home</Link>
                        </li>

                        <li className='relative px-4 py-1.5 group'>
                            <Link to="/" className='font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300'>About</Link>
                        </li>

                        <li className='relative px-4 py-1.5 group'>
                            <Link to="/" className='font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300'>Courses</Link>
                        </li>

                        <li className='relative px-4 py-1.5 group'>
                            <Link to="/" className='font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300'>Contact</Link>
                        </li>

                    </ul>
                </div>
                <div className="nav-right flex gap-2 items-center">
                    <div className="user text-xl min-h-[40px] bg-white hover:bg-[#006dca] hover:text-white transition-colors duration-300 shadow-xl p-1 flex justify-center items-center rounded-full cursor-pointer">
                        <Link to="/SingIn" className='px-2 py-1 font-semibold'>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Link>
                    </div>
                    <div className="open-slidebar min-h-[40px] min-w-[40px] text-xl bg-white hover:bg-[#006dca] hover:text-white transition-colors duration-300 shadow-xl p-1 justify-center items-center rounded-full flex xl:hidden" onClick={() => setIsOpen(true)}>
                        <FontAwesomeIcon className='px-2 py-1 font-semibold' icon={faBars} />
                    </div>
                </div>
            </nav>

            <div className={`sidebar overflow-y-scroll ${isOpen ? "active" : ""}`}>
                <div className="nav-logo">
                    <Link to="/">
                        <h1 className="text 3xl font-semibold ">
                            Stud <span className='text-[#006dca]'> IQ</span>
                        </h1>
                    </Link>
                </div>

                <ul className="flex flex-col items-start gap-6 pt-10 w-full">
                    <li className='relative px-4 py-1.5 group'>
                        <Link to="/" className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font text-md relative uppercase text-4xl border-b border-gray-300 pb-2 w-full block'>Home</Link>
                    </li>

                    <li className='relative px-4 py-1.5 group'>
                        <Link to="/About" className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font text-md relative uppercase text-4xl border-b border-gray-300 pb-2 w-full block'>About</Link>
                    </li>

                    <li className='relative px-4 py-1.5 group'>
                        <Link to="/Courses" className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font text-md relative uppercase text-4xl border-b border-gray-300 pb-2 w-full block'>Courses</Link>
                    </li>

                    <li className='relative px-4 py-1.5 group'>
                        <Link to="/Blog" className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font text-md relative uppercase text-4xl border-b border-gray-300 pb-2 w-full block'>Blog</Link>
                    </li>

                    <li className='relative px-4 py-1.5 group'>
                        <Link to="/Contact" className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font text-md relative uppercase text-4xl border-b border-gray-300 pb-2 w-full block'>Contact</Link>
                    </li>
                </ul>

                <div className="close-btn absolute top-5 right-10 text-2xl xl:text-3xl cursor-pointer" onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>
        </>
    )
}

export default Nav