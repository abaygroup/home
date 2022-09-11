import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineInstagram, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';


const Footer = () => {
    const router = useRouter();

    return (
        <div className="footer">
            <div className="intro-footer">
                <div className="company">
                    <div className="logo">
                        <Link href="">
                            <a>
                                <Image src={'/images/full_logo_black.png'} width={5636} height={1080} />
                            </a>
                        </Link>
                        <small>&#xa9;2022 ИП &quot;Mediahosting&ldquo;</small>
                    </div>
                    
                    <ul>
                        <h3>КОМПАНИЯ</h3>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Вакансии</a></li>
                        <li><a href="">For the Record</a></li>
                    </ul>
            
                    <ul>
                        <h3>СООБЩЕСТВА</h3>
                        <li><a href="">Для исполнителей</a></li>
                        <li><a href="">Для разработчиков</a></li>
                        <li><a href="">Реклама</a></li>
                        <li><a href="">Для инвесторов</a></li>
                        <li><a href="">Для вендоров</a></li>
                    </ul>
                    
                    <ul>
                        <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
                        <li><a href="">Справка</a></li>
                        <li><a href="">Веб-плеер</a></li>
                        <li><a href="">Бесплатное мобильное приложение</a></li>
                    </ul>

                    <div className="social-media">
                        <Link href={"/"}>
                            <a><AiFillYoutube /></a>
                        </Link>
                        <Link href={"/"}>
                            <a><AiOutlineInstagram /></a>
                        </Link>
                        <Link href={"/"}>
                            <a><AiOutlineWhatsApp /></a>
                        </Link>
                    </div>
                </div>
                <div className="conf">
                    <div className="terms">
                        <a href="">Юридическая информация</a>
                        <a href="">Центр конфиденциальности</a>
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Файлы cookie</a>
                        <a href="">О рекламе</a>
                    </div>
                    <div className="copy">
                        <ul className="i18next">
                            {router.locales.map(locale => (
                                <li key={locale}>
                                    <BiWorld />
                                    <Link href={router.asPath} locale={locale}>
                                        <a>
                                            {locale === "kz" ? "Казахстан (Қазашқа)" : locale === "ru" ? "Казахстан (Русский)" : null}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;