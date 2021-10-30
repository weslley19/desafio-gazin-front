import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function DevelopersTable() {
  const {developers} = useTransactions();

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
          </tr>
        </thead>
        <tbody>
          {developers.map(developer => (
            <tr key={developer.name}>
              <td>{developer.name}</td>
              <td>{developer.sexo}</td>
              <td>{developer.age}</td>
              <td>{developer.hobby}</td>
              <td>{developer.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
