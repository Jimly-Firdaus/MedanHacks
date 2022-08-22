import Link from 'next/link';
import styles from './footer.module.css';



const Footer = () => {
    return(
        <div className={styles.container}>
            <p><Link href='/contactUs'>Contact Us</Link></p>
            <p><Link href='/about'>Our Terms and Policy</Link></p>
        </div>
    );
}


export default Footer;