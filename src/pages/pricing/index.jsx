import React from 'react';
import Layout from '../../layouts/layout';
import { BACKEND_URL } from '../../actions/types';
import Link from 'next/link';
import { BsCheck2 } from 'react-icons/bs';


const Pricing = ({pricing_list, premium}) => {


    return (
        <Layout
            title={"Premium - Mediahosting"}
        >
            <section className="pricing">
                <div className="intro-pricing">
                    <div className="heading">
                        <h1>Успейте получить 3 месяца Premium за ${premium.price}</h1>
                        <p>
                            Не упустите возможность слушать музыку без рекламы, офлайн и не только. 
                            Отменить подписку можно в любой момент.
                        </p>
                
                        <div className="goto-premium">
                            <p>Акция заканчивается 4 дн. 14 ч. 24 мин..</p>
                            
                            <Link href={`/pricing/${premium.slug}`}>
                                <a id="link">Возобновить Premium</a>
                            </Link>
                            <a href="#other_pricing" id="other">Посмотреть другие варианты</a>
                
                            <small>
                                Только индивидуальная подписка. Затем $4.99 в месяц. 
                                Действуют Условия использования. Предложение недоступно для пользователей, 
                                отменивших Premium-подписку после 15 июля 2022 года. Акция заканчивается 11.09.2022.
                            </small>
                        </div>
                    </div>
                    <div className="poster">
                        <img src="https://i.scdn.co/image/ab678e040000ed3a3fd916d6bf69a2028dadff6b" alt="" />
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="intro-features">
                    <h1>Что дает Premium-подписка</h1>
                    <div className="block">
                        <div className="box">
                            <img src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f" width="120" alt="" />
                            <h2>Скачивай ресурсы.</h2>
                            <small>Смотри видео даже офлайн.</small>
                        </div>
                        <div className="box">
                            <img src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137" width="120" alt="" />
                            <h2>Скачивай ресурсы.</h2>
                            <small>Смотри видео даже офлайн.</small>
                        </div>
                        <div className="box">
                            <img src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67" width="120" alt="" />
                            <h2>Скачивай ресурсы.</h2>
                            <small>Смотри видео даже офлайн.</small>
                        </div>
                        <div className="box">
                            <img src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012" width="120" alt="" />
                            <h2>Скачивай ресурсы.</h2>
                            <small>Смотри видео даже офлайн.</small>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="premium-choice" id="other_pricing">
                <div className="intro-premium-choice">
                    <h1>Выберите свой Premium</h1>
                    <p>Слушай что угодно и когда захочешь — на телефоне, динамике и других устройствах.</p>
            
                    <div className="block">
                        {pricing_list.map((pricing, i) => {
                            return (
                                <div className="premium-pox" key={i}>
                                    <div className="title">
                                        <h3>{pricing.membership_type}</h3>
                                        <p>${pricing.price} в месяц после пробного периода</p>
                                        <p>1 аккаунт</p>
                                    </div>
                                    <hr />
                                    <ul className="ft">
                                        <li><BsCheck2 /> Музыка без рекламы</li>
                                        <li><BsCheck2 /> Доступ к музыке в офлайн-режиме</li>
                                        <li><BsCheck2 /> Выбор любого трека</li>
                                    </ul>
                                    <div className="begin">
                                        <Link href={`/pricing/${pricing.slug}`}>
                                            <a>Начать</a>
                                        </Link>
                                        <small>
                                            Только индивидуальная подписка. Затем $4.99 в месяц. 
                                            Действуют Условия использования. Предложение недоступно для пользователей, 
                                            отменивших Premium-подписку после 15 июля 2022 года. Акция заканчивается 11.09.2022.
                                        </small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${BACKEND_URL}/accounts/pricing/`)
    const data = await res.json();
    const pricing_list = data.pricing_list;
    const premium = data.premium;

    return {
        props: {
            pricing_list,
            premium
        }
    }
}


export default Pricing;