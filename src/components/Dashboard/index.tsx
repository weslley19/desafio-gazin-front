import { Summary } from "../Summary";
import { DevelopersTable } from "../DevelopersTable";
import { Container } from "./styles";

interface DashboardProps {
  onOpenEditDeveloperModal: () => void;
  onOpenViewDeveloperModal: () => void;
}

export function Dashboard({ onOpenEditDeveloperModal, onOpenViewDeveloperModal }: DashboardProps) {
  return (
    <Container>
      <Summary />
      <DevelopersTable onOpenEditDeveloperModal={onOpenEditDeveloperModal} onOpenViewDeveloperModal={onOpenViewDeveloperModal} />
    </Container>
  );
}
