import Link from 'next/link';
import React, { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { check_auth_status, passwordReset } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import AuthLayout from '../../layouts/auth_layout';


const PasswordReset = () => {
    const { t } = useTranslation("common");

    const schema = yup.object().shape({
        email: yup.string()
            .email('Электронная почта должна быть действительной')
            .required('Электронная почта требуется'),
    });

    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(passwordReset(data.email));
        }
        router.push("/accounts/login")
    };


    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);


    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem("currentPage"));

    return (
        <AuthLayout
            title={t("accounts.password-reset.heading")}
        >
            <div className="accounts-form">
                <div className="intro-accounts-form">
                    <h3>{t("accounts.password-reset.heading")}</h3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">{t("accounts.password-reset.form.email.label")}</label>
                            <input type="email" {...register("email")} placeholder={t("accounts.password-reset.form.email.placeholder")} />
                            {errors["email"] ? <p>{errors["email"].message}</p>: null}
                        </div>
                        <div className="form-group submit">
                            <Link href={"/accounts/login"}>
                                <a>{t("accounts.back")}</a>
                            </Link>
                            {loading ? <span>Отправка...</span> : <input type="submit" value={t("accounts.password-reset.form.submit")} />}
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>

    )
}

export default PasswordReset;