import styles from '../../styles/interface_text.module.css';
import styles2 from './chatbox.module.css';
import Image from 'next/image';
import recent_chats_logo from "../../components/SVG/Chats.svg";
import create_message_logo from "../../components/SVG/publish.svg";
import send_btn from '../../components/SVG/send-button.svg';
import Link from 'next/link';
import { useUser } from '../../firebase/useUser';
import WriteDataToDatabase from '../../firebase-components/firestore/Write';
import { useState } from 'react';

const Chatbox = () => {
    // for user current state
    const { user , logout } = useUser();
    const [ chats, setChats ] = useState('');
    if (user) {
        // format for sending to database
        const sendChats = (uid1 , uid2 , chatsId , chats) => {
            WriteDataToDatabase(uid1 , uid2 , chatsId , chats)
        }
    // wrapper format for userId and chats
    const chats_content = {chats : [], uid: user.id};

    // total chats at database (for chatsId)
    const total_chats = 8888;
    // event handler
    const changeHandler = (event) => {
        setChats(event.target.value);
    }
    const submitChats = (event) => {
        event.preventDefault();
        chats_content.chats.push(chats);
        sendChats(user.id , 0 , total_chats , chats_content.chats);
        console.log(chats_content.chats);
    }

    return (
        <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["write-msg-btn"]}>
            <Image src={create_message_logo} alt="Create Message" />
        </div>
        <div className={styles["recent-msg-btn"]}>
            <Link href='/recent_chats'><Image src={recent_chats_logo} alt="Recent Chats" /></Link>
        </div>
      </div>
            <div className={styles['main-content']}>
            <textarea onChange={changeHandler} value={chats} className={styles2.textArea} autoFocus></textarea>
            <button className={styles2['send-btn']} onClick={submitChats}><Image src={send_btn} alt="Send"/></button>
            </div>
        </div>
    );}
}


export default Chatbox;