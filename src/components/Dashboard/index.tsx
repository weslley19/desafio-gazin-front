import { Summary } from "../Summary";
import { DevelopersTable } from "../DevelopersTable";
import { Container } from "./styles";

interface DashboardProps {
  onOpenEditDeveloperModal: () => void;
}

export function Dashboard({ onOpenEditDeveloperModal }: DashboardProps) {
  return (
    <Container>
      <Summary />
      <DevelopersTable onOpenEditDeveloperModal={onOpenEditDeveloperModal} />
    </Container>
  );
}
