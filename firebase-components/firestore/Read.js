import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { connectStorageEmulator } from "firebase/storage";

// Initialize all recent chats
// const ReadDataFromDatabase = (JSON_chats_data) => {
//   const getData = async (JSON_chats_data) => {
//     try {
//     firebase
//       .firestore()
//       .collection("chatsCollection")
//       .doc("chats_data")
//       .onSnapshot(function (doc) {
//         JSON_chats_data = JSON.stringify(doc.data());
//         // console.log(JSON_chats_data)
//         console.log("Succesfully fetched data!");
//       })
//       ;} catch (error){
//         console.log(error)
//       }
// //     // const full_data_array = [];
// //     // for (let i = 0; i < JSON_chats_data.length; i++) {
// //     //   full_data_array.push(JSON_chats_data[i]);
// //     // }
// //     // return full_data_array;
//   };
//   getData();
// };

const ReadDataFromDatabase = () => {
  const CloudToJSON = (data) => {
    let JSON_retrieved_data = data;
    return JSON_retrieved_data;
  }

  const fetchingData = async () => {
    // let data = {};
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection("chatsCollection")
        .doc("chats_data")
        .get()
        return (CloudToJSON(querySnapshot.data()));
      // data = querySnapshot.data();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const data = fetchingData();
  console.log(data)
};

export default ReadDataFromDatabase;
