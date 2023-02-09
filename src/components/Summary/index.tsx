import { Container } from "./style";
import EntradasImg from "../../assets/entradas.svg";
import SaidasImg from "../../assets/saidas.svg";
import TotalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={EntradasImg} alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          Entradas
          <img src={SaidasImg} alt="" />
        </header>
        <strong>R$ -1000,00</strong>
      </div>

      <div className="high-background">
        <header>
          Total
          <img src={TotalImg} alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}
