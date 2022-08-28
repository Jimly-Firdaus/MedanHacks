import FirebaseAuth from "../firebase-components/auth/firebaseAuth";
import styles from '../styles/auth.module.css';


const Auth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <div className={styles.textContent}>
          <p>Sign In</p>
        </div>
        <div><FirebaseAuth /></div>
        <div>
          <a href="/">Back to Homepage</a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
