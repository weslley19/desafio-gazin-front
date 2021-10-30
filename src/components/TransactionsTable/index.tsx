import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionTable() {
  const {developers} = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
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
