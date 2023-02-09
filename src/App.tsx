import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleClosedNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenModalFunction={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosedNewTransactionModal}
      >
        <h2>Nova Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
