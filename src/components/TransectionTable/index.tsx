import { Container } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransctionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

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
            <tr>
              <td>{transactionItem.title}</td>
              <td className={transactionItem.type}>{transactionItem.amount}</td>
              <td>{transactionItem.category}</td>
              <td>{transactionItem.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
