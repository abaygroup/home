import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { check_auth_status } from '../actions/auth';
import { useRouter } from 'next/router';


const AuthLayout = (props) => {
    const dispatch = useDispatch();
    const router = useRouter()


    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.content} />
                
            </Head>
            <div id="root">
                <div className="home-wrapper">
                    <Header />
                    {/* ============================================ */}
                    {props.children}
                </div>
                
                <Footer />
                {/* ============================================ */}
            </div>
        </React.Fragment>
    )
}

AuthLayout.defaultProps = {
    title: "Mediahosting",
    content: `
        Mediahosting - бұл заманауи технологиялармен өңделген, 
        ақпарат берудің жетілдірілген онлайн платформасы.
    `
}

export default AuthLayout;