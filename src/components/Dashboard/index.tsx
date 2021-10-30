import { Summary } from "../Summary";
import { DevelopersTable } from "../DevelopersTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <DevelopersTable />
    </Container>
  );
}
