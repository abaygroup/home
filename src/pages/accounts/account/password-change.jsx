import React from 'react';
import AccountLayout from '../../../layouts/account';


const PasswordChange = () => {
    return (
        <AccountLayout
            heading={"Изменить пароль"}
        >
            <div className="password-change-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Новый пароль</label>
                        <input type="password" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Повторить пароль</label>
                        <input type="password" placeholder=""/>
                    </div>
                    <div className="form-group submit">
                        <input type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        </AccountLayout>
    )
}

export default PasswordChange;