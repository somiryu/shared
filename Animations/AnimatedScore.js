/* 
<AnimatedScore 
	to={endValue} 
	from={0} //optional
	id={uuid} 
	duration={2000} //optional
	childStyle={{styles}}
/>

*/
import React, { Component } from 'react'
import anime from "./anime"

class AnimatedScore extends Component {
	constructor(props) {
		super(props);
		this.animate = this.animate.bind(this)
	}

	animate(_from, _to) {
		if (this.props.id) {
			let e = document.getElementById(this.props.id).firstChild
			let v = { qty: _from }
			if (e) {
				anime({
					targets: v, qty: _to,
					easing: 'linear', round: 1,
					duration: this.props.duration || 2000,
					update: function () {
						e.innerHTML = v.qty;
					}
				})
				setTimeout(()=>{e.innerHTML = _to}, (this.props.duration || 2000) + 50)
			}
		}
	}

	componentDidMount() {
		setTimeout(() => this.animate((this.props.from ? this.props.from : 0), this.props.to || 0), 500)
	}

	componentDidUpdate(prevProps) {
		this.animate(prevProps.to, this.props.to)
	}


	render(){
		return( 
			<div className={this.props.className ? `AnimatedScore ${this.props.className}`: ""} id={this.props.id}>
			 	<span style={this.props.childStyle || {position:"relative"}}></span>
				{this.props.children}
			</div>
		)
	}
}

export default AnimatedScore;
