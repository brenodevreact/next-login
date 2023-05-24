import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";

const CadastroPage = () => {
  return (
    <div className={styles.background}>
      <LoginCard title={"Crie sua conta"}></LoginCard>
    </div>
  );
};

export default CadastroPage;
