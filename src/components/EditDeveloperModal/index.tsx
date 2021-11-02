import { useEffect, useState, FormEvent } from 'react';
import { useTransactions } from '../../hooks/useDevelopers';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RegisterDeveloperContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface EditDeveloperModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditDeveloperModal({ isOpen, onRequestClose }: EditDeveloperModalProps) {
  const { developer, editDeveloper } = useTransactions();

  const [name, setName] = useState('');
  const [sexo, setSexo] = useState(developer.sexo);
  const [age, setAge] = useState(developer.age);
  const [hobby, setHobby] = useState(developer.hobby);
  const [birthdate, setBirthdate] = useState(developer.birthdate);
  const [active, setActive] = useState(developer.active);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await editDeveloper({
      name,
      sexo,
      age,
      hobby,
      birthdate,
      active
    });

    onRequestClose();
  }

  useEffect(() => {
    if (isOpen) {
      setName(developer.name)
      setSexo(developer.sexo)
      setAge(developer.age)
      setHobby(developer.hobby)
      setBirthdate(developer.birthdate)
      setActive(developer.active)
    }
  }, [developer]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmit}>
        <button type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Editar desenvolvedor</h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          id="age"
          name="age"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />

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

        <input
          type="text"
          id="hooby"
          name="hobby"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          required
        />

        <input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Data de aniversário"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />

        <input
          type="checkbox"
          id="active"
          name="active"
          placeholder="Ativo?"
          checked={active ? true: false}
          onChange={() => setActive(true)}
          required
        />

        <button type="submit">Editar</button>
      </Container>
    </Modal>
  );
}
