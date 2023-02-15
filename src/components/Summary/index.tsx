import { Container } from "./style";
import EntradasImg from "../../assets/entradas.svg";
import SaidasImg from "../../assets/saidas.svg";
import TotalImg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transactionsItem) => {
      if (transactionsItem.type === "deposit") {
        acc.deposits += transactionsItem.amount;
        acc.total += transactionsItem.amount;
      } else {
        acc.withdraws += transactionsItem.amount;
        acc.total -= transactionsItem.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  function currencyBRL(val: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  }

  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={EntradasImg} alt="" />
        </header>
        <strong>{currencyBRL(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          Saídas
          <img src={SaidasImg} alt="" />
        </header>
        <strong>-{currencyBRL(summary.withdraws)}</strong>
      </div>

      <div className="high-background">
        <header>
          Total
          <img src={TotalImg} alt="" />
        </header>
        <strong>{currencyBRL(summary.total)}</strong>
      </div>
    </Container>
  );
}
