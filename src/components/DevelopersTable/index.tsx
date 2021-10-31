import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function DevelopersTable() {
  const { developers } = useTransactions();

  console.log(developers)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Idade</th>
            <th>Hobby</th>
            <th>Data de aniversário</th>
          </tr>
        </thead>
        <tbody>
          {developers.length ? (
            developers.map(developer => (
              <tr key={developer.id}>
                <td>
                  <a href="#">Visu</a> | <a href="#">Edit</a>
                </td>
                <td>{developer.name}</td>
                <td>{developer.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                <td>{`${developer.age} anos`}</td>
                <td>{developer.hobby}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(developer.birthdate))}</td>
              </tr>
            ))
          ) : null
          }
        </tbody>
      </table>
    </Container>
  );
}
