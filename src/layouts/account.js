import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineHome, AiOutlineLock } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';
import { useSelector } from 'react-redux';
import Layout from './layout';



const AccountLayout = (props) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if(typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <Layout
            title={props.heading}
        >
            {isAuthenticated &&
                <div className="accounts-user">
                    <div className="intro-accounts-user">
                        <div className="navbar">
                            <div className="avatar">
                                <Image src={'/images/logo_black.png'} width={64} height={64} />
                            </div>
                            <ul className="nav-list">
                                <li className={router.pathname == "/accounts/account" ? "active" : ""}>
                                    <Link href={`/accounts/account/`}>
                                        <a>
                                            <AiOutlineHome />
                                            <span>Аккаунт</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/accounts/account/edit" ? "active" : ""}>
                                    <Link href={"/accounts/account/edit"}>
                                        <a>
                                            <BsPencil />
                                            <span>Изменить профиль</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/accounts/account/password-change" ? "active" : ""}>
                                    <Link href={"/accounts/account/password-change"}>
                                        <a>
                                            <AiOutlineLock />
                                            <span>Смена пароля</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/accounts/account/receipt" ? "active" : ""}>
                                    <Link href={"/accounts/account/receipt"}>
                                        <a>
                                            <IoMdTime />
                                            <span>Квитанция</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* ======================================================= */}
                        
                        <div className="account-page">
                            <div className="heading">
                                <h1>{props.heading}</h1>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </Layout>

    )
}

export default AccountLayout;