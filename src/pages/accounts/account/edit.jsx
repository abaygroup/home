import React from 'react';
import AccountLayout from '../../../layouts/account';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';



const Edit = () => {
    const { t } = useTranslation("common");
    const { register, handleSubmit } = useForm();
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    if(typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <AccountLayout
            heading={"Изменить профиль"}
        >
            <div className="edit-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">{t("accounts.register.form.email.label")}</label>
                        <input type="email" {...register("email")} placeholder={t("accounts.register.form.email.placeholder")} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">{t("accounts.register.form.username.label")}</label>
                        <input type="text" {...register("username")} placeholder={t("accounts.register.form.username.placeholder")} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">{t("accounts.register.form.full_name.label")}</label>
                        <input type="text" {...register("full_name")} placeholder={t("accounts.register.form.full_name.placeholder")} />
                    </div>

                    <div className="form-group submit">
                        {loading ? <span>Отправка...</span> : <input type="submit" value="Регистрация" />}
                    </div>
                </form>
            </div>
        </AccountLayout>
    )
}

export default Edit;