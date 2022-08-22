import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["main-content"]}>
        <div className={styles['text-content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc. Dictum varius duis at consectetur lorem donec massa sapien. Sodales neque sodales ut etiam sit amet nisl purus in. Tristique senectus et netus et malesuada fames ac turpis. Suspendisse ultrices gravida dictum fusce ut placerat orci. Consectetur a erat nam at. Tristique senectus et netus et malesuada fames. Faucibus in ornare quam viverra orci sagittis. In mollis nunc sed id semper risus in. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nec feugiat nisl pretium fusce id. Quam nulla porttitor massa id neque aliquam. Suspendisse ultrices gravida dictum fusce ut. Justo nec ultrices dui sapien. Sapien pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt augue interdum velit euismod. Ornare quam viverra orci sagittis.</div>
        <div><button className={styles.joinUs}>Join Us</button></div>
      </div>
    </div>
  );
};

export default Homepage;
