import styles from "../styles/interface_text.module.css";
import Image from "next/image";
import recent_chats_logo from "../components/SVG/Chats.svg";
import create_message_logo from "../components/SVG/publish.svg";
import Link from 'next/link';
import Header_after_login from "../components/header_after_login";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from "../components/footer";
// const pushRouter = (props) => {
//   Router.push({ pathname: '/recent_chats' , state : {props.this.value} })
// }

const Interface_text = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["write-msg-btn"]}>
            <Link href='/interface_1_components/chatbox'><Image src={create_message_logo} alt="Create Message" /></Link>
        </div>
        <div className={styles["recent-msg-btn"]}>
        <Link href='/recent_chats'><Image src={recent_chats_logo} alt="Recent Chats" /></Link>
        </div>
      </div>
      <div className={styles['main-content']}>
        <p>What are you up to {props.name} ?</p>
      </div>
    </div>
  );
};

export default Interface_text;

// No error but nothing changed
// Interface_text.getLayout = function PageLayout (page) {
//   return (
//     <>
//     <Header_after_login />
//     {page}
//     <Footer />
//     </>
//   );
// }