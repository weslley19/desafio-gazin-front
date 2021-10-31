import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RegisterDeveloperContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewDeveloperModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewDeveloperModal({ isOpen, onRequestClose }: NewDeveloperModalProps) {
  const { createDeveloper } = useTransactions();
  const [name, setName] = useState('');
  const [sexo, setSexo] = useState('M');
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleCreateNewDeveloper = async (event: FormEvent) => {
    event.preventDefault();

    await createDeveloper({
      name,
      sexo,
      age,
      hobby,
      birthdate,
    });

    setName('');
    setSexo('M');
    setAge(0);
    setHobby('');
    setBirthdate('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewDeveloper}>
        <button type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar desenvolvedor</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Idade" value={age} onChange={(e) => setAge(Number(e.target.value))} required />

        <RegisterDeveloperContainer>
          <RadioBox
            type="button"
            onClick={() => setSexo('M')}
          >
            <img src={incomeImg} alt="Masculino" />
            <span>Masculino</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setSexo('F')}
          >
            <img src={outcomeImg} alt="Feminino" />
            <span>Feminino</span>
          </RadioBox>
        </RegisterDeveloperContainer>

        <input type="text" placeholder="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} required />
        <input type="date" placeholder="Data de aniversário" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
