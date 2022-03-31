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
          <H1>Controle todas as suas financias aqui!</H1>
          <Form>
            <Input label="Email" type="email" />
            <Input label="Senha" type="password" />
            <Button>Login</Button>
          </Form>
          <span>
            Não possui cadastro? <Link href="/registrar">Clique aqui!</Link>
          </span>
        </Main>
      </Content>
    </Container>
  );
};

export default Login;
