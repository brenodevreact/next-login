import styles from "../styles/Login.module.css";
import LoginCard from "../src/components/loginCard/loginCard";

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <LoginCard title={"Entre em sua conta"}></LoginCard>
    </div>
  );
};

export default LoginPage;
