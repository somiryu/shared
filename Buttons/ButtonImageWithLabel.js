//id, image, listener, style({}), scale(1.1), children (FROM BUTTONIMAGE)
//debug, label, keyLabel
import React, { Component } from 'react'
import anime from "../Utils/anime"
import ButtonImage from "./ButtonImage"

class ButtonImageWithLabel extends Component {
	clickHandler = () => {
		const t = this
		var scale = this.props.scale || 1.1
		anime({
			targets: "#" + this.props.id,
			scale: scale, duration: 200,
			direction: "alternate",
			easing: "linear",
			complete: function (anim) {
				t.props.listener && t.props.listener("home");
			}
		})
	}
	render() {
		let style = {
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
		}
		return (
			<ButtonImage {...this.props}>
				<div className={this.props.debug ? 'testBox' : ''} style={style}>
					<div className={this.props.debug ? 'testBox' : ''} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: "var(--wine)" }}>
						{this.props.label === undefined ? 
						<div style={{
							position: "relative", width: "100%",
							padding: this.props.padding || "5%",
							boxSizing: "border-box",
							height: "100%",
						}} className={this.props.debug ? "testBox" : ""}>
							<div style={{ overflow: "none", height: "100%" }}>
								{this.props.children}
							</div>
						</div> : <div style={{ display: 'flex', justifyContent: 'center' }}>
								{this.props.label}
							</div>}



					</div>
				</div>
			</ButtonImage>
		)
	}
}

export default ButtonImageWithLabel;
