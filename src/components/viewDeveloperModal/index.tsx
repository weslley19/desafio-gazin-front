import { useTransactions } from '../../hooks/useDevelopers';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RegisterDeveloperContainer, RadioBox } from './styles';

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
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={developer.name}
          required
        />

        <input
          type="number"
          id="age"
          name="age"
          placeholder="Idade"
          value={developer.age}
          required
        />

        <RegisterDeveloperContainer>
          <RadioBox
            type="button"
          >
            <img src={incomeImg} alt="Masculino" />
            <span>Masculino</span>
          </RadioBox>
          <RadioBox
            type="button"
          >
            <img src={outcomeImg} alt="Feminino" />
            <span>Feminino</span>
          </RadioBox>
        </RegisterDeveloperContainer>

        <input
          type="text"
          id="hooby"
          name="hobby"
          placeholder="Hobby"
          value={developer.hobby}
          required
        />

        <input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Data de aniversário"
          value={developer.birthdate}
          required
        />

        <input
          type="checkbox"
          id="active"
          name="active"
          placeholder="Ativo?"
          checked={developer.active ? true : false}
          required
        />

        <button type="submit">Fechar</button>
      </Container>
    </Modal>
  );
}
