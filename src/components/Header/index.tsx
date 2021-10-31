// import logoImg from '../../assets/logo.svg';
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewDeveloperModal: () => void;
}

export function Header({ onOpenNewDeveloperModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src="https://marcas-logos.net/wp-content/uploads/2020/03/YouTube-Logo-1.png" width="60" alt="developer" title="developer" />
        <button type="button" onClick={onOpenNewDeveloperModal}>
          Cadastrar desenvolvedor
        </button>
      </Content>
    </Container>
  );
}
