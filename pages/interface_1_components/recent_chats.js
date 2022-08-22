import styles from '../../styles/interface_text.module.css';
import styles2 from './recent_chats.module.css';
import Image from 'next/image';
import recent_chats_logo from "../../components/SVG/Chats.svg";
import create_message_logo from "../../components/SVG/publish.svg";
import Link from 'next/link';

const Recent_chats = () => {
    return (
        <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["write-msg-btn"]}>
        <Link href='/interface_1_components/chatbox'><Image src={create_message_logo} alt="Create Message" /></Link>
        </div>
        <div className={styles["recent-msg-btn"]}>
            <Image src={recent_chats_logo} alt="Recent Chats" />
        </div>
      </div>
            <div className={styles['main-content']}>
                <div className={styles2['recent-ctc']}>
                <p>Recent Chats Here</p>

                </div>
                <div className={styles2.chatbox}>
                <p>Chat Here!</p>

                </div>
            </div>
        </div>
    );
}


export default Recent_chats;