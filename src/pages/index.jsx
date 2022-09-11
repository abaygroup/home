import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../layouts/layout';
import useTranslation from 'next-translate/useTranslation'
import { AiFillPlayCircle, AiFillThunderbolt } from 'react-icons/ai';
import { MdFavorite, MdCategory } from 'react-icons/md';
import randomColor from "randomcolor";



const Index = () => {
    const { t } = useTranslation("common");
    const color = randomColor();

    return (
        <Layout
            title={t("index.head.title")}
            content={t("index.head.content")}
        >
            <div className="main">
                <section className="overview">
                    <div className="intro-overview">
                        <div className="poster">
                            <Image src={"/images/overview.png"} width={3200} height={2200} />
                         </div>
                         <div className="heading">
                            <h1>{t("index.overview.head")}</h1>
                            {/* <p>Изучай тысячи курсы бесплатно и стань экспертом своей делой</p> */}
                            <Link href={"/"}>
                                <a className="link-get-started">{t("index.overview.link")}</a>
                            </Link>
                         </div>
                    </div>
                </section>
                
                <section className="advantages">
                    <div className="intro-advantages">
                        <h1>Преимущества Mediahosting</h1>
                        <div className="advantages-list">
                            <div className="advantages-item">
                                <div className="picture">
                                    <AiFillPlayCircle />
                                </div>
                                <h3>Любимый контент</h3>
                                <p>
                                    Изучай любимые занятность и находите новую курсы бесплатно.
                                </p>
                            </div>
                            <div className="advantages-item">
                                <div className="picture">
                                    <MdCategory />
                                </div>
                                <h3>Подсказки для категорий</h3>
                                <p>
                                    Мы поможем составить свой категорий и предложим готовые 
                                    подборки от наставник экспертов.
                                </p>
                            </div>
                            <div className="advantages-item">
                                <div className="picture">
                                    <MdFavorite />
                                </div>
                                <h3>Рекомендации</h3>
                                <p>
                                    Расскажите, что вы любите, и мы подберем для вас полезные курсы.
                                </p>
                            </div>
                            <div className="advantages-item">
                                <div className="picture">
                                    <AiFillThunderbolt />
                                </div>
                                <h3>Экономия трафика</h3>
                                <p>
                                    Включите режим экономии трафика в настройках и не беспокойтесь о расходах.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="free">
                    <div className="intro-free">
                        <h1>Это бесплатно!</h1>
                        <h1>Данные банковской карты указывать не нужно.</h1>
                    </div>
                </section>

                <section className="questions">
                    <div className="intro-questions">
                        <h1>Есть вопросы?</h1>
                        <div className="questions-list">
                            <ul>
                                <li>Как создать плейлист?</li>
                                <li>Как включить режим экономии трафика?</li>
                                <li>Музыку можно слушать только вперемешку?</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="get-started">
                    <div className="intro-get-started">
                        <h1>Готовы? Поехали!</h1>
                        <Link href="">
                            <a className='link-get-started'>Начинать бесплатно</a>
                        </Link>
                    </div>
                </section>
            </div>
        </Layout>

    )
}




export default Index;