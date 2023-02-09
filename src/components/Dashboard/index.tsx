import { Summary } from "../Summary";
import { TransctionTable } from "../TransectionTable";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransctionTable />
    </Container>
  );
}
