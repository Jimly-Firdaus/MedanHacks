import Homepage from "../components/homepage";
// import Login from "../components/login";
import Interface_text from "./interface_1";
import WriteDataToDatabase from "../firebase-components/firestore/Write";
import { useState } from "react";
import { useUser } from '../firebase/useUser'



export default function Home() {
  
  const { user, logout } = useUser();
  
  if (user) {
    console.log(user.name)
    return (
      <>
      <Interface_text name = {user.name}/>
      <button onClick={() => logout()}>Log Out</button>
      </>
    )
  }

  else {return (
    <div>
      {/* <Header /> */}
      <Homepage />
      {/* <WriteDataToDatabase /> */}
      {/* <p>{data}</p>
      <button
        onClick={() => {
          setData(full_data_obj);
        }}
      >
        Change
      </button> */}
      {/* <Interface_text data = {current_chats_data}/>
      <WriteToCloudFirestore /> */}
      {/* <props /> */}
    </div>
  );
}}
