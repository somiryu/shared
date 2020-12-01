import React, { useRef, useState, useEffect } from 'react';
import Flex from './Containers/Flex';
//
export default function CountdownRealtime(props) {
  // eslint-disable-next-line no-unused-vars
  const [timerDays, setTimerDays] = useState(null);
  const [timerHours, setTimerHours] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(null);
  const [countDownDate, setCountDownDate] = useState(null);
  let interval = useRef();
  useEffect(() => {
    let limit = new Date();
    if (props.fechaFin < limit) {
      reset();
    }
    if (timerMinutes !== 0) {
      if (countDownDate === null) {
        let fin = props.fechaFin;
        setCountDownDate(fin);
      }
      startTimer();
    } else if (timerSeconds !== 0) {
      startTimer()
    } else {
      reset();
      return () => {
        clearInterval(null);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDownDate, timerSeconds, timerMinutes, props.fechaFin]);
  const reset = () => {
    props.reset(props.id);
  }
  const startTimer = () => {
    const fin = new Date(countDownDate).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = fin - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //terminar timer
        clearInterval(interval.current);

      } else {
        //update timer
        setTimerSeconds(seconds);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(~~minutes);

      }
    }, 1000)
  }
  return (
    <Flex direction='column' justify="center" align="center">
      <Flex>
        <h1 className='h1-bg' style={{ color: 'white', textShadow: '2px 1px 30px rgba(0, 0, 0, 1)' }}>{props.msg}</h1>
      </Flex>
      <Flex>
        {timerHours === null ? <h2 className='h1-bg' style={{ color: 'white' }}>cargando...</h2> :
          <div style={{ ...props.style }}>
            <h1 className='h1-bg'>
              {timerHours <= 9 ?
                `0${timerHours}` : timerHours}:{timerMinutes <= 9 ? `0${timerMinutes}` : timerMinutes} :
              {timerSeconds <= 9 ? `0${timerSeconds}` : timerSeconds}
            </h1>
          </div>
        }

      </Flex>
    </Flex>
  )
}