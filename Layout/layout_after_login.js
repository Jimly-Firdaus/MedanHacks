import styles from './Layout.module.css';
import Header_after_login from '../components/header_after_login';
import Footer from '../components/footer';


const Layout_after_login = ({children})=>{
    return(
        <>
        <div className={styles.header}><Header_after_login /></div>
            <div className={styles.main}>{children}</div>
        <div className={styles.footer}><Footer /></div>
        </>
    );
};

export default Layout_after_login;