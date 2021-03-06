import React from "react";
import { useTransactions } from "../../hooks/useDevelopers";
import { FaUserEdit, FaSearchPlus, FaRegTrashAlt } from 'react-icons/fa';

import { Container } from "./styles";

interface DevelopersaTableProps {
  onOpenEditDeveloperModal: (id: any) => void;
  onOpenViewDeveloperModal: (id: any) => void;
}

export function DevelopersTable({ onOpenEditDeveloperModal, onOpenViewDeveloperModal }: DevelopersaTableProps) {
  const { developers, deleteDeveloper, findDeveloperId } = useTransactions();

  const handleEditDeveloperModal = async (id: any) => {
    await findDeveloperId(id);
  }

  const handleViewDeveloperModal = async (id: any) => {
    await findDeveloperId(id);
  }

  const handleDeleteDeveloper = async (id: any) => {
    await deleteDeveloper(id);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Idade</th>
            <th>Hobby</th>
            <th>Data de aniversário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {developers.length ? (
            developers.map(developer => (
              <tr key={developer.id}>
                <td>{developer.name}</td>
                <td>{developer.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                <td>{`${developer.age} anos`}</td>
                <td>{developer.hobby}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(developer.birthdate))}</td>
                <td className="">
                  <span
                    onClick={() => onOpenViewDeveloperModal(developer.id)}
                  >
                    <span onClick={() => handleViewDeveloperModal(developer.id)}><FaSearchPlus color="#000" /> &nbsp;&nbsp;</span>
                  </span>
                  <span
                    onClick={() => { onOpenEditDeveloperModal(developer.id) }}
                  >
                    <span onClick={() => handleEditDeveloperModal(developer.id)}><FaUserEdit color="#000" /> &nbsp;&nbsp;</span>
                  </span>
                  <span
                    onClick={(event: React.MouseEvent) => { handleDeleteDeveloper(developer.id) }}
                  >
                    <FaRegTrashAlt color="#be0404" />
                  </span>
                </td>
              </tr>
            ))
          ) : null
          }
        </tbody>
      </table>
    </Container>
  );
}
