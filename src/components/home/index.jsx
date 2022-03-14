import * as S from './styles'
import Button from '../Button/index';
import {BsCalendar2Check} from 'react-icons/bs'
import { BarIcons } from '../BarIcons';
import { ScheduleItem } from '../ ScheduleItem';
import { EmailSend } from '../EmailSend';

const Home = () => {
  
  const scheduleContent = [
    {
      date: {
        number: "14/03",
        dayDesc: "segunda",
        hours: "as 20h"
      },
      title: "Como anunciar no Google e atrair muitos clientes investindo pouco",
      subtitle: "Aprenda a criar e gerenciar campanhas no Google com o foco em atração de clientes. Você dará os passos iniciais para lucrar mais no Google investindo pouco."
    },
    {
      date: {
        number: "15/03",
        dayDesc: "terca",
        hours: "as 20h"
      },
      title: "Como vender muito com anúncios no Instagram e Facebook",
      subtitle: "Descubra como usar as maiores redes sociais do mundo para atrair clientes e gerar vendas. O passo a passo de criação e gerenciamento de campanhas no Facebook e Instagram."
    },
    {
      date: {
        number: "16/03",
        dayDesc: "quarta",
        hours: "as 20h"
      },
      title: "Como gerar vendas no YouTube sem ter um canal",
      subtitle: "Domine os anúncios no YouTube e aprenda a gerar vendas com campanhas inteligentes de vídeo, mesmo que você não tenha um canal ou experiência na ferramenta."},
    {
      date: {
        number: "17/03",
        dayDesc: "quinta",
        hours: "as 20h"
      },
      title: "Como criar um site que vende mais que a concorrência",
      subtitle: "Domine os anúncios no YouTube e aprenda a gerar vendas com campanhas inteligentes de vídeo, mesmo que você não tenha um canal ou experiência na ferramenta."
    },
    {
      date: {
        number: "20/03",
        dayDesc: "domingo",
        hours: "as 20h"
      },
      title: "Tema surpresa",
      subtitle: "O encerramento do Intensivo acontecerá no domingo às 20h com um conteúdo surpresa e totalmente fora do padrão. Atenção: A aula não terá gravação."
    }
    ]
  
  
  
  
  
  
  return (
    <>
      <S.Container >
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
        <BarIcons />

        <div className='title-schedule'>
          <h2>Conteúdo direto<br/>do Campo de batalha</h2> 
          <p>Marque na sua agenda:</p>
        </div>
        <dir className="wrap-schedules">
          {scheduleContent.map( (schedule, i) => <ScheduleItem schedule={schedule} count={i} key={i} classN="schedule-item"/> )}
        </dir>
        <EmailSend />
      </S.Container>
    </>
    )
  }
  
  export default Home;