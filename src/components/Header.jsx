import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Dropdown from './Dropdown';
import { logout } from '../actions/auth';
import { BiUserCircle } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';


const Header = () => {
    const { t } = useTranslation("common");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [dropdown, setDropdown] = useState(false);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();


    const toggleDropdown = () => setDropdown(!dropdown);

    const logoutHandler = () => {
        if(dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
    }

    return (
        <div className="header">
            <div className="intro-header">
                <div className="logo">
                    <Link href={"/"}>
                        <a>
                            <Image src={'/images/full_logo_black.png'} width={5636} height={1080} />
                        </a>
                    </Link>
                </div>

                <div className="navbar">
                    <Link href={"/pricing"}>
                        <a className="nav-link">Premium</a>
                    </Link>
                    <Link href={"/"}>
                        <a className="nav-link">{t("header.navbar.reference")}</a>
                    </Link>
                    <span className="nav-link">|</span>
                    {isAuthenticated ?
                        <>
                            <div className="nav-link" onClick={() => toggleDropdown()}>
                                <BiUserCircle />
                                <span>{user && user.full_name}</span>
                                <AiFillCaretDown />
                            </div>
                            <AnimatePresence>
                                {dropdown && 
                                    <Dropdown toggleDropdown={toggleDropdown} user={user} logout={logoutHandler} />
                                }
                            </AnimatePresence>
                        </>

                    :
                        <React.Fragment>
                            <Link href={"/accounts/login"}>
                                <a className="nav-link">{t("header.navbar.login")}</a>
                            </Link>
                            <Link href={"/accounts/register"}>
                                <a className="nav-link">{t("header.navbar.register")}</a>
                            </Link>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}


export default Header;