import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';



const Dropdown = ({toggleDropdown, logout, user}) => {
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="dropdown-container"
        >
            <span onClick={toggleDropdown} className="close-btn"><IoMdClose /></span>
            <div className="user-block">
                <div className="image" onClick={() => router.push(`/accounts/account`)}>
                    <Image src={"/images/logo_black.png"} width={56} height={56} />
                </div>
                <div className="title">
                    <h3 onClick={() => router.push(`/accounts/account`)}>{user.username}</h3>
                    <small>{user.email}</small>
                    <span onClick={logout}>Выйти</span>
                </div>
            </div>
            <ul>
                <li>
                    <Link href={`/accounts/account`}>
                        <a>Аккаунт</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <a>Настройка</a>
                    </Link>
                </li>
                <li>
                    <span onClick={logout}>
                        Выйти
                    </span>
                </li>
            </ul>
        </motion.div>
    )
}

export default Dropdown;