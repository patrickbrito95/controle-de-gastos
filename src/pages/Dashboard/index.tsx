import React from "react";
import Button from "../../components/Button";
import Cards from "../../components/Card";
import { Container } from "../../templates";

const Dashboard = () => {
  return (
    <Container>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6 ">
        <span className="font-bold text-4xl">Controlador de Gastos</span>
        <nav className="flex gap-8">
          <Button variant="primary">Adicionar nova despesa</Button>
          <Button variant="secondary">Logout</Button>
        </nav>
      </header>
      <main className="w-full max-w-screen-lg h-5/6 grid grid-cols-3 gap-4 p-4">
        <Cards expense="Netflix" price="45,99" tag="Streaming" />
        <Cards expense="VIVO - Fibra" price="99,99" tag="Internet" />
        <Cards expense="iFood" price="150,00" tag="Alimentação" />
        <Cards expense="Academia" price="79,90" tag="Fitness" />
        <Cards expense="Lazer" price="200,00" tag="Lazer" />
      </main>
    </Container>
  );
};

export default Dashboard;
