import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { check_auth_status, signup } from '../../actions/auth';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BiErrorCircle } from 'react-icons/bi';
import useTranslation from 'next-translate/useTranslation';
import AuthLayout from '../../layouts/auth_layout';



const Register = () => {
    const { t } = useTranslation("common");

    const schema = yup.object().shape({
        username: yup.string()
        // .notOneOf(userList, 'Имя такое же пользователь уже существует')
        .min(3, "Минимум 3 символа")
        .max(32, "Максимум 32 символов")
        .matches(
            /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/, 
            "Введите правильные имя пользователя")
        .required('Требуется имя пользователя'),
        email: yup.string()
            .email('Электронная почта должна быть действительной')
            // .notOneOf(emailList, 'Электронная почта уже существует')
            .required('Электронная почта требуется')
            .max(32, "Максимум 32 символов"),
        full_name: yup.string()
            .required('Имя требуется')
            .max(32, "Максимум 32 символов"),
        password: yup.string()
            .required('Необходим пароль')
            .min(8, 'Пароль должен состоять из 8 или более символов')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Пароль должен состоять не менее чем из 8 символов, одного верхнего регистра, одной цифры и одного символа специального регистра."
            ),
        re_password: yup.string()
            .required('Необходим подтверждение пароль')
            .min(8).oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
    });


    const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch()
    const register_success = useSelector(state => state.auth.register_success);


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(signup(data.username, data.email, data.full_name, data.password, data.re_password));
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem("currentPage"));


    if (register_success)
        router.push('/accounts/login');

    return (
        <AuthLayout
            title={t("accounts.register.heading")}
        >
            <div className="accounts-form">
                <div className="intro-accounts-form">
                    <h3>{t("accounts.register.heading")}</h3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.register.form.email.label")}</label>
                            <input type="email" {...register("email")} placeholder={t("accounts.register.form.email.placeholder")} />
                            {errors["email"] ? <p><BiErrorCircle /> {errors["email"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.register.form.username.label")}</label>
                            <input type="text" {...register("username")} placeholder={t("accounts.register.form.username.placeholder")} />
                            {errors["username"] ? <p><BiErrorCircle /> {errors["username"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.register.form.full_name.label")}</label>
                            <input type="text" {...register("full_name")} placeholder={t("accounts.register.form.full_name.placeholder")} />
                            {errors["full_name"] ? <p><BiErrorCircle /> {errors["full_name"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.register.form.password.label")}</label>
                            <input type="password" {...register("password")} placeholder={t("accounts.register.form.password.placeholder")} />
                            {errors["password"] ? <p><BiErrorCircle /> {errors["password"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.register.form.re_password.label")}</label>
                            <input type="password" {...register("re_password")} placeholder={t("accounts.register.form.re_password.placeholder")} />
                            {errors["re_password"] ? <p><BiErrorCircle /> {errors["re_password"].message}</p>: null}
                        </div>
                        <div className="form-group submit">
                            <div className="checked">
                                <input type="checkbox" name="check" id="check" />
                                <label htmlFor="check">Согласование на регистрации</label>
                            </div>

                            {loading ? <span>Отправка...</span> : <input type="submit" value="Регистрация" />}
                        </div>
                    </form>
                    <hr />
                    <div className="register-link">
                        <h3>{t("accounts.is_accounts")}</h3>
                        <Link href={"/accounts/login"}>
                            <a>{t("accounts.login_link")}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Register;