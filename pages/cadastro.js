import Link from "next/link";
import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";

const CadastroPage = () => {
  return (
    <div className={styles.background}>
      <LoginCard title={"Crie sua conta"}>
        <form className={styles.form}>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button>

          <Link href={"/login"} className={styles.link}>
            Possui alguma conta?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
};

export default CadastroPage;
