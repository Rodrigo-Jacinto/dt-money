import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

export interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

//Eu herdo as propriedades da interface Transaction, mas omito as propriedades 'id' e 'createdAt'
type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export interface TransactionProviderData {
  transactions: Transaction[];
  createTransaction: (data: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}
//ESTOU forçando o createContext aceitar um objeto vazio com a tipagem indicada
const TransactionsContext = createContext<TransactionProviderData>(
  {} as TransactionProviderData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  async function createTransaction(data: TransactionInput) {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionsContext);
  return context;
}
