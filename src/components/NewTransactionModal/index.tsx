import Modal from "react-modal";
import { Container, ContainerTransactionButtons, RadioBox } from "./style";
import closeImg from "../../assets/btn-fechar.svg";
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransactions";

interface NewTransactionProps {
  isOpen: boolean;
  onClosedModalFunction: () => void;
}

export function NewTransactionModal({
  isOpen,
  onClosedModalFunction,
}: NewTransactionProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");
  const { createTransaction } = useTransaction();

  async function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, type, category });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onClosedModalFunction();
  }

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

      <Container onSubmit={handleOnSubmit}>
        <h2>Nova Transação</h2>

        <input
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <ContainerTransactionButtons>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor={"green"}
          >
            <img src={entradasImg} alt="" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor={"red"}
          >
            <img src={saidasImg} alt="" />
            <span>Saídas</span>
          </RadioBox>
        </ContainerTransactionButtons>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
