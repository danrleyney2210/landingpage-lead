import * as S from './styles'
import Button from '../Button/index';
import {BsCalendar2Check} from 'react-icons/bs'

const Home = () => {
  return (
    <S.Wrapper>
      <div className='content'>
        <div>
          <h1>MAIS VIEWS!!</h1>

          <h3>
            Uma semana de aulas ao vivo para você dominar os anúncios no Google, Facebook, YouTube e Instagram - 
            <strong>As maiores ferramentas de vendas da internet.</strong>
          </h3>

          <div className='date'>
            <BsCalendar2Check />
            <p>Evento online e gratuito dos dias <strong>14 a 20 de Março.</strong></p>
          </div>

          <div className='form'>
            <input type="text" placeholder='Digite seu melhor e-mail' />
            <Button>Quero participar</Button>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Home;