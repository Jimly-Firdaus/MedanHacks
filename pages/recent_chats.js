import styles from "../styles/interface_text.module.css";
import styles2 from "../styles/recent_chats.module.css";
import Image from "next/image";
import recent_chats_logo from "../components/SVG/Chats.svg";
import create_message_logo from "../components/SVG/publish.svg";
import Link from "next/link";
import send_btn from "../components/SVG/send-button.svg";
import { useUser } from "../firebase/useUser";
import ReadDataFromDatabase from "../firebase-components/firestore/Read";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Recent_chats = () => {
  const { user, logout } = useUser();
  //     let usable_data;
  //   const res = (data) => usable_data = data;

  if (user) {
    const current_user = user.id;

    const load_chats = async () => {
      let data = {};
      const querySnapshot = await firebase
        .firestore()
        .collection("chatsCollection")
        .doc("chats_data")
        .get();
      data = querySnapshot.data();
      return data;
    };
    load_chats().then((data) => {
      return (
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles["write-msg-btn"]}>
              <Link href="/interface_1_components/chatbox">
                <Image src={create_message_logo} alt="Create Message" />
              </Link>
            </div>
            <div className={styles["recent-msg-btn"]}>
              <Image src={recent_chats_logo} alt="Recent Chats" />
            </div>
          </div>
          <div className={styles["main-content"]}>
            <div className={styles2["recent-ctc"]}>
              <ul className={styles2.listchat}>
                <li>
                  {console.log(data, "logged this out")}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore...
                  </p>
                </li>
                <li>
                  Harry
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore...
                  </p>
                </li>
                <li>
                  Charles
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore...
                  </p>
                </li>
                <li>
                  John
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore...
                  </p>
                </li>
                <li>
                  Carl
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore...
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles2.chatbox}>
              <div className={styles2["chats-content"]}>
                {/* <p>{current_history_chats}</p> */}
                <p>New Chats</p>
              </div>
              <div className={styles2["chats-area"]}>
                <textarea className={styles2.textArea}></textarea>
                <button className={styles2["send-btn"]}>
                  <Image src={send_btn} alt="Send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default Recent_chats;
