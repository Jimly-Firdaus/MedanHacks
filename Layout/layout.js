import styles from './Layout.module.css';
import Header from '../components/header';
import Footer from '../components/footer';


const Layout = ({children})=>{
    return(
        <>
        <div className={styles.header}><Header /></div>
            <div className={styles.main}>{children}</div>
        <div className={styles.footer}><Footer /></div>
        </>
    );
};

export default Layout;