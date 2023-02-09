import Modal from "react-modal";
import { Container } from "./style";
import closeImg from "../../assets/btn-fechar.svg";
interface NewTransactionProps {
  isOpen: boolean;
  onClosedModalFunction: () => void;
}

export function NewTransactionModal({
  isOpen,
  onClosedModalFunction,
}: NewTransactionProps) {
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
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
