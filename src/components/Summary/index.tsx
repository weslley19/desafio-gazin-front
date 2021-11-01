import { useTransactions } from '../../hooks/useDevelopers';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { developers } = useTransactions();

  const developersActives = developers.filter(developer => developer.active === true);

  return (
    <Container>
      <div>
        <header>
          <p>Desenvolvedores ativos</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          { developersActives.length }
        </strong>
      </div>
      <div>
        <header>
          <p>Desenvolvedores inativos</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          { developers.length - developersActives.length }
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          { developers.length }
        </strong>
      </div>
    </Container>
  );
}
