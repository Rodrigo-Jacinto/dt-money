import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
  onOpenModalFunction: () => void;
}

export function Header({ onOpenModalFunction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="De Money" />
        <button type="button" onClick={onOpenModalFunction}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
