import React, { useRef, useState, useEffect } from 'react';
import Flex from './Containers/Flex';
//
export default function CountdownRealtime(props) {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [countDownDate, setCountDownDate] = useState(null);
    let interval = useRef();
    useEffect(() => {
        if (countDownDate === null) { 
          let fin = new Date()
          let horas = fin.getHours()+props.horas ;
          let minutos = fin.getMinutes()+props.minutos;
          fin.setHours(horas)
          fin.setMinutes(minutos);
          setCountDownDate(fin);
          console.log(countDownDate);
        }
        startTimer();
        return () => {
          clearInterval(interval.current);
        }
      });
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
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(~~minutes);
            setTimerSeconds(seconds);
          }  
        }, 1000)
      }
      return(
          <Flex>
              <h3>Dias:{timerDays}-Horas:{timerHours}-Minutos:{timerMinutes}-Seconds:{timerSeconds}</h3>
          </Flex>
      )
}