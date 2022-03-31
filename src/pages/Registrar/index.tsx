import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import { Aside, Container, Content, Form, H1, Main } from "../../templates";

const Login = () => {
  return (
    <Container>
      <Content>
        <Aside>
          <img src="/saving-money.svg" alt="Economia de Dinheiro" />
        </Aside>
        <Main>
          <H1>Cadastre-se na nossa plataforma!</H1>
          <Form>
            <Input label="Email" type="email" />
            <Input label="Senha" type="password" />
            <Button>Cadastrar</Button>
          </Form>
          <span>
            Já possui cadastro? <Link href="/">Clique aqui!</Link>
          </span>
        </Main>
      </Content>
    </Container>
  );
};

export default Login;
