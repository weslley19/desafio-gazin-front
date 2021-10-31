import { useTransactions } from "../../hooks/useTransactions";
import { FaUserEdit, FaSearchPlus, FaRegTrashAlt } from 'react-icons/fa';

import { Container } from "./styles";

export function DevelopersTable() {
  const { developers } = useTransactions();

  console.log(developers)

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
                  <a href="http://localhost:3000/"><FaSearchPlus color="#000" /></a> &nbsp;&nbsp;
                  <a href="http://localhost:3000/"><FaUserEdit color="#000" /></a> &nbsp;&nbsp;
                  <a href="http://localhost:3000/"><FaRegTrashAlt color="#be0404" /></a>
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
