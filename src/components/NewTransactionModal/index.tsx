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
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} />

        {/* <RegisterDeveloperContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            isActiveColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            isActiveColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </RegisterDeveloperContainer> */}

        <input type="text" placeholder="Idade" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <input type="text" placeholder="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
