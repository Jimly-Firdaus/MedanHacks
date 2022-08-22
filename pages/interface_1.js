import styles from "../styles/interface_text.module.css";
import Image from "next/image";
import recent_chats_logo from "../components/SVG/Chats.svg";
import create_message_logo from "../components/SVG/publish.svg";
import Link from 'next/link'

const Interface_text = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["write-msg-btn"]}>
            <Link href='/interface_1_components/chatbox'><Image src={create_message_logo} alt="Create Message" /></Link>
        </div>
        <div className={styles["recent-msg-btn"]}>
        <Link href='/interface_1_components/recent_chats'><Image src={recent_chats_logo} alt="Recent Chats" /></Link>
        </div>
      </div>
      <div className={styles['main-content']}>
        <p>What are you up to?</p>
      </div>
    </div>
  );
};

export default Interface_text;
