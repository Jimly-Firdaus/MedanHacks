import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const WriteDataToDatabase = (uid1, uid2, chatsId, chats) => {
    const data_format = { name : '' , userId1 : 0 , userId2 : 2 , chatsId : 3 , chatsContent : [], time_stamp : 0 };
  const writeData = (uid1, uid2, chatsId, chats) => {
    try {
      firebase.firestore().collection("chatsCollection")
        .doc("chats_data")
        .set({
          uid1: uid1,
          uid2: uid2,
          chatsId: chatsId,
          chats: chats,
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date())
        }).then(console.log("Successfully added items!"));
    } catch (error) {
      console.log(error);
    }
  };
  return writeData(uid1, uid2, chatsId, chats);
};

export default WriteDataToDatabase;
