//<Timer 
// 	id={uuid} 
// 	seconds={Def:0} 
// 	listener={func}
// 	start={bool}
//	stopOn={int optional}
// newSecond={Def:0}
// reset={int} increment reset for reset timer
// />

import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0, start: false }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.setState({ seconds: this.props.seconds, start: this.props.start })
        if (this.props.stopOn) { this.stopOn = this.props.stopOn }

    }

    componentDidUpdate(prev) {
        if (this.props.newSecond) {
            if (prev.newSecond !== this.props.newSecond) { 
                console.log('PROPS NEWSECONDS  ====> ', this.props.newSecond) 
                this.setState({ seconds: this.props.newSecond });
            } 
        }
        if (this.props.reset) {
            if(prev.reset !== this.props.reset) {
                this.setState({ seconds: this.props.seconds });
            }
        }
        if (this.props.start && !this.timer) {
            this.start()
        } else if (!this.props.start) {
            this.stop()
        }
    }

    componentWillUnmount() {
        console.log("------------TIMER UNMOUNTED")
        this.timer && clearInterval(this.timer)
    }

    tick() {
        this.setState((state) => {
            const timer = state.seconds === 0 ? 0 : state.seconds - 1
            this.props.listener && this.props.listener(timer);
            if (this.stopOn && this.stopOn === timer) { this.stop() };
            return { seconds: timer }
        })
    }

    start = () => this.timer ? null : this.timer = setInterval(() => this.tick(), 1000)
    stop = () => this.timer && clearInterval(this.timer)
    calculatePercentage = () => {
        return ((100 * this.state.seconds) / this.props.seconds)
    }
    render() {
        return (
            React.cloneElement(this.props.children, { percentage: this.calculatePercentage() })
        )
    }
}

export default Timer;
