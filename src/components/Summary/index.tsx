import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { developers } = useTransactions();

  console.log(developers);

  return (
    <Container>
      <div>
        <header>
          <p>Desenvolvedores</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          20
        </strong>
      </div>
      <div>
        <header>
          <p>Desenvolvedores excluídos</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          - 3
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          17
        </strong>
      </div>
    </Container>
  );
}
