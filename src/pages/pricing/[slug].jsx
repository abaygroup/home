import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../layouts/layout';
import { useForm } from "react-hook-form";


const PricingDetail = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    } 

    return (
        <Layout>
            <div className="pricing-plan-detail">
                <div className="pricing-card">
                    <div className="title">
                        <h3>Мой план</h3>
                        <Link href={"/pricing"}>
                            <a>Сменить план</a>
                        </Link>
                    </div>
                    <div className="card">
                        <div className="heading">
                            <div className="name">
                                <h3>{router.query.slug}</h3>
                                <small>1 Premium-аккаунт</small>
                            </div>
                            <div className="price">
                                <h2>4.99 USD</h2>
                            </div>
                        </div>
                        <div className="body">
                            <div className="expires">
                                <div className="row">
                                    <div className="col">С сегодняшнего дня</div>
                                    <div className="col">4.99 USD за 3 мес.</div>
                                </div>
                                <div className="row">
                                    <div className="col">С 4 дек. 2022 г.</div>
                                    <div className="col">4.99 USD за месяц</div>
                                </div>
                            </div>
                            <ul className="fts">
                                <li>Стандартная стоимость — 4.99 USD в месяц.</li>
                                <li>Плата будет списана 3 дек. 2022 г.</li>
                                <li>Отменить можно в любой момент. Действуют Условия предложения.</li>
                                <li>Мы пришлем уведомление за 7 дней до списания.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pricing-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="email" {...register("email")} placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" {...register("phone")} placeholder="+X XXX-XXX-XXXX" required />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("full_name")} placeholder="Ваше имя" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default PricingDetail;