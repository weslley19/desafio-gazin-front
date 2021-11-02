import { useTransactions } from '../../hooks/useDevelopers';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container, Label } from './styles';

Modal.setAppElement('#root');

interface ViewDeveloperModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ViewDeveloperModal({ isOpen, onRequestClose }: ViewDeveloperModalProps) {
  const { developer } = useTransactions();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Dados do desenvolvedor</h2>

        <div>
          <Label htmlFor="name">Nome: </Label>
          <span id="name">{developer.name}</span>
        </div>

        <div>
          <Label htmlFor="sexo">Sexo: </Label>
          <span id="sexo">{developer.sexo === 'M' ? 'Masculino' : 'Feminino'}</span>
        </div>

        <div>
          <Label htmlFor="age">Idade: </Label>
          <span id="age">{`${developer.age} anos`}</span>
        </div>

        <div>
          <Label htmlFor="hobby">hobby: </Label>
          <span id="hobby">{developer.hobby}</span>
        </div>

        <div>
          <Label htmlFor="birthdate">Data de aniversário: </Label>
          <span id="birthdate">{new Intl.DateTimeFormat('pt-BR').format(new Date(developer.birthdate))}</span>
        </div>

        <div>
          <Label htmlFor="active">Ativo?: </Label>
          <span id="active">{developer.active ? 'Sim' : 'Não'}</span>
        </div>

      </Container>
    </Modal>
  );
}
