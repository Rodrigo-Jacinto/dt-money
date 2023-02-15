import { Container } from "./style";
import { useTransaction } from "../../hooks/useTransactions";

export function TransctionTable() {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactionItem) => (
            <tr key={transactionItem.id}>
              <td>{transactionItem.title}</td>

              <td className={transactionItem.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transactionItem.amount)}
              </td>

              <td>{transactionItem.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transactionItem.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
