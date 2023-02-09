import Modal from "react-modal";
import { Container, ContainerTransactionButtons, RadioBox } from "./style";
import closeImg from "../../assets/btn-fechar.svg";
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import { useState } from "react";

interface NewTransactionProps {
  isOpen: boolean;
  onClosedModalFunction: () => void;
}

export function NewTransactionModal({
  isOpen,
  onClosedModalFunction,
}: NewTransactionProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClosedModalFunction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="btn-close-modal"
        onClick={onClosedModalFunction}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Nova Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <ContainerTransactionButtons>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor={'green'}
          >
            <img src={entradasImg} alt="" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor={'red'}
          >
            <img src={saidasImg} alt="" />
            <span>Saídas</span>
          </RadioBox>
        </ContainerTransactionButtons>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
