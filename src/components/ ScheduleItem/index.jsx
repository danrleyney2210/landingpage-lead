import React from 'react'
import {Container} from "./styles"


export const ScheduleItem = ({schedule, count, classN}) => {

  return (
    <Container className={classN}>
      <div className='date-content'>
        <h2>{schedule.date.number}</h2>
        <p className='date-content'><span>{schedule.date.dayDesc.toUpperCase()}</span><span className='point'>.</span><span className='hours' >{schedule.date.hours.toUpperCase()}</span></p>
      </div>
      <div className='description-content'>
        <span>AULA {count + 1}</span>
        <h2>{schedule.title}</h2>
        <p>{schedule.subtitle}</p>
      </div>
    </Container>
  )
}
