import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Layout from '../../../../layouts/layout';
import { check_auth_status, reset_password_confirm } from '../../../../actions/auth';


const PasswordResetConfirm = () => {
    const { t } = useTranslation("common");

    const schema = yup.object().shape({
        new_password: yup.string()
            .required('Необходим пароль')
            .min(6, 'Пароль должен состоять из 6 или более символов')
            .matches(
                /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Пароль должен состоять не менее чем из 6 символов, одного верхнего регистра, одной цифры и одного символа специального регистра."
            ),
        re_new_password: yup.string()
            .required('Необходим подтверждение пароль')
            .min(6).oneOf([yup.ref('new_password'), null], 'Пароли должны совпадать'),
    });

    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();


    const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(reset_password_confirm(router.query.uid, router.query.token, data.new_password, data.re_new_password));
        }
        router.push('/accounts/login')
    };


    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);


    if (typeof window !== "undefined" && isAuthenticated)
        router.push("/");

    return (
        <Layout 
            title={t("accounts.confirm.heading")}
            content={"Новый пароль"}
        >
            <div className="accounts-form">
                <div className="intro-accounts-form">
                    <h3>{t("accounts.confirm.heading")}</h3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.confirm.form.new_password.label")}</label>
                            <input type="password" className={errors["new_password"] && "warning"} {...register("new_password")} placeholder={t("accounts.confirm.form.new_password.placeholder")} />
                            {errors["new_password"] ? <p>{errors["new_password"].message}</p>: null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{t("accounts.confirm.form.re_new_password.label")}</label>
                            <input type="password" className={errors["re_new_password"] && "warning"} {...register("re_new_password")} placeholder={t("accounts.confirm.form.re_new_password.placeholder")} />
                            {errors["re_new_password"] ? <p>{errors["re_new_password"].message}</p>: null}
                        </div>
                        <div className="form-group submit">
                            <span></span>
                            {loading ? <span>Отправка...</span> : <input type="submit" value={t("accounts.password-reset.form.submit")} />}
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    ) 
}

export default PasswordResetConfirm;