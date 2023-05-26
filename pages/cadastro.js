import Link from "next/link";
import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import { useForm } from "react-hook-form";
import React from "react";
import stylesInput from "../src/components/input/input.module.css";
import { toast } from "react-toastify";


const CadastroPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    toast.success("Sucesso")
  };

  return (
    <div className={styles.background}>

      <LoginCard title={"Crie sua conta"}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Seu nome" {...register("nome")} className={stylesInput.input} />
          <input type="text" placeholder="Seu email" {...register("email")} className={stylesInput.input} />
          <input type="text" placeholder="Sua senha" {...register("password")} className={stylesInput.input} />
          <Button type="submit">Cadastrar</Button>

          <Link href={"/login"} className={styles.link}>
            Possui alguma conta?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
};

export default CadastroPage;
