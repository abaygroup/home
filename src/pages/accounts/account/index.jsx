
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import AccountLayout from '../../../layouts/account';

const AccountUser = () => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    
    if(typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <AccountLayout
            heading={"Аккаунт"}
        >
            <div className="user-body">
                <h2>Профиль</h2>
                <ul className="profile-name">
                    <li>
                        <span className="label">Имя пользователя</span>
                        <span className="value">username</span>
                    </li>
                    <li>
                        <span className="label">Электронная почта</span>
                        <span className="value">username@gmail.com</span>
                    </li>
                    <li>
                        <span className="label">Дата рождения</span>
                        <span className="value">20.03.2022</span>
                    </li>
                    <li>
                        <span className="label">Страна или регион</span>
                        <span className="value">Казахстан</span>
                    </li>
                </ul>
            </div>
        </AccountLayout>
    )
}

export default AccountUser;