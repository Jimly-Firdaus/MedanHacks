import styles from '../../styles/interface_text.module.css';
import styles2 from './chatbox.module.css';
import Image from 'next/image';
import recent_chats_logo from "../../components/SVG/Chats.svg";
import create_message_logo from "../../components/SVG/publish.svg";
import send_btn from '../../components/SVG/send-button.svg'
import Link from 'next/link';

const Chatbox = () => {
    return (
        <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["write-msg-btn"]}>
            <Image src={create_message_logo} alt="Create Message" />
        </div>
        <div className={styles["recent-msg-btn"]}>
            <Link href='/interface_1_components/recent_chats'><Image src={recent_chats_logo} alt="Recent Chats" /></Link>
        </div>
      </div>
            <div className={styles['main-content']}>
            <textarea className={styles2.textArea} autoFocus></textarea>
            <button className={styles2['send-btn']}><Image src={send_btn} alt="Send"/></button>
            </div>
        </div>
    );
}


export default Chatbox;