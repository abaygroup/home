import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { check_auth_status, login } from '../../actions/auth';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BiErrorCircle } from 'react-icons/bi';
import useTranslation from 'next-translate/useTranslation';
import AuthLayout from '../../layouts/auth_layout';

const Login = () => {
    const { t } = useTranslation("common");


    const schema = yup.object().shape({
        email: yup.string()
            .email('Электронная почта должна быть действительной')
            .required('Электронная почта требуется'),
        password: yup.string()
            .required('Необходим пароль')
            .min(6, 'Пароль должен состоять из 6 или более символов'),
    });

    const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(login(data.email, data.password));
        }
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);


    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem("currentPage"));

    return (
        <AuthLayout
            title={t("accounts.login.heading")}
        >
            <div className="accounts-form">
                <div className="intro-accounts-form">
                    <h3>{t("accounts.login.heading")}</h3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.login.form.email.label")}</label>
                            <input type="email" {...register("email")} placeholder={t("accounts.login.form.email.placeholder")} />
                            {errors["email"] ? <p><BiErrorCircle /> {errors["email"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.login.form.password.label")}</label>
                            <input type="password" {...register("password")} placeholder={t("accounts.login.form.password.placeholder")} />
                            {errors["password"] ? <p><BiErrorCircle /> {errors["password"].message}</p>: null}
                        </div>
                        <div className="form-group submit">
                            <Link href={"/accounts/password-reset"}>
                                <a>{t("accounts.forgot_password")}</a>
                            </Link>
                            {loading ? <span>Отправка...</span> : <input type="submit" value={t("accounts.enter")} />}
                        </div>
                    </form>
                    <hr />
                    <div className="register-link">
                        <h3>{t("accounts.is_register")}</h3>
                        <Link href={"/accounts/register"}>
                            <a>{t("accounts.register_link")}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login;