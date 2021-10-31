import logoImg from '../../assets/logo.svg';
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewDeveloperModal: () => void;
}

export function Header({ onOpenNewDeveloperModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="developer" title="developer" />
        <button type="button" onClick={onOpenNewDeveloperModal}>
          Cadastrar desenvolvedor
        </button>
      </Content>
    </Container>
  );
}
