import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';


const Login = ({authService}) => {

    const onLogin = (event) =>{
        authService//
        .login(event.currentTarget.textContent)//
        .then(console.log);
    }
    return(
        <section className={styles.Login}>
            <Header/>
            <section>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.lilist}><button className={styles.loginBtn} onClick={onLogin}>Google</button></li>
                    <li className={styles.lilist}><button className={styles.loginBtn} onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
}

export default Login;