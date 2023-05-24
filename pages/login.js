import Link from "next/link";
import styles from "../styles/Login.module.css";
import LoginCard from "../src/components/loginCard/loginCard";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <LoginCard title={"Entre em sua conta"}>
        <form className={styles.form}>
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Entrar</Button>
          <Link href={"/cadastro"} className={styles.link}>
            Ainda não possui conta?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
};

export default LoginPage;
