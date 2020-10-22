import React,{Component} from 'react';

//horas {0}
//minutos {0}
//segundos {0}
//iniciar {bolean} //iniciar {true} detener {false} reiniciar {false} //inicia o reanuda
//detener {bolean} //iniciar {false} detener {true} reiniciar {false}
//reiniciar {bolean} //iniciar {false} detener {false} reiniciar {true} //luego iniciar
//style
//styleTimer
class TimerGameboard extends Component{
    constructor(props) {
        super(props);
        let hours=this.props.horas*3600;
        let minutes=this.props.minutos*60;
        let segundos=hours+minutes+this.props.segundos;
        this.state = { time: {}, seconds: segundos, pause:false};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
      
      componentDidUpdate(prevProps){
          if(this.props.iniciar!==prevProps.iniciar){
            if(this.props.iniciar===true) this.startTimer();
          } 
          if(this.props.detener!==prevProps.detener){
            if(this.props.detener===true) this.pauseTimer();
          }
          if(this.props.reiniciar!==prevProps.reiniciar){
            if(this.props.reiniciar===true) this.resetTimer();
          } 
      }
      startTimer() {
      
        if(this.state.pause===true){
            this.setState({pause:false});
        }
        
        if (this.timer === 0 && this.state.seconds > 0 && this.state.pause===false ) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
      pauseTimer(){
        this.setState({pause:true});
      }
      resetTimer(){
        let hours=this.props.horas*3600;
        let minutes=this.props.minutos*60;
        let segundos=hours+minutes+this.props.segundos;
        this.setState({seconds:segundos,pause:true});
        let timeLeftVar = this.secondsToTime(segundos);
        this.setState({ time: timeLeftVar });
        this.startTimer();
      }
      countDown() {
        let seconds = this.state.seconds - 1;
        if(this.state.pause===false){
            this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        }
        if (seconds === 0) { 
          clearInterval(this.timer);
        }
      }

      render() {
        return(
          <div style={this.props.style}>
              {
                /*
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.pauseTimer}>stop</button>
                <button onClick={this.resetTimer}>reset</button>
                */ 
              } 
            <p style={{...this.props.styleTimer}}>{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</p>
          </div>
        );
      }
}
export default TimerGameboard