import React from "react";
import { useTransactions } from "../../hooks/useDevelopers";
import { FaUserEdit, FaSearchPlus, FaRegTrashAlt } from 'react-icons/fa';

import { Container } from "./styles";

export function DevelopersTable() {
  const { developers, deleteDeveloper } = useTransactions();

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
                  <FaSearchPlus color="#000" /> &nbsp;&nbsp;
                  <FaUserEdit color="#000" /> &nbsp;&nbsp;
                  <span
                    onClick={(event: React.MouseEvent) => {handleDeleteDeveloper(developer.id)}}
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
