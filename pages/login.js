import styles from '../styles/login.module.css';

const Login = () => {

    return (
        <div className = {styles.container}>
            <div className={styles['login-form']}>
                <p>LOGIN</p>
                <div className={styles['container-login']}>
                    <div className={styles['username-email']}>Username / Email</div>
                    <input type='text' className={styles['input-username-email']}/>
                    <div className={styles['password']}>Password</div>
                    <input type='text' className={styles['input-password']}/>
                    <div className={styles['remember-me']}><input type='checkbox'/> Remember Me</div>
                    <div> <button className={styles.button}>Log In</button> </div>
                </div>
                <div className={styles['sign-up']}>Sign Up</div>
                <div className={styles['forgot-password']}>Forgot Password</div>
            </div>
            <div className={styles.image}>



            </div>
        </div>
    );
};

export default Login;