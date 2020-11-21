//id, image, listener, style({}), scale(1.1), children, disabled
import React from 'react'
import anime from "../Animations/anime"

function Button(props) {
	const clickHandler = () => {
		if (!props.disabled) {
			anime({
				targets: "#" + props.id,
				scale: props.scale || 1.1,
				duration: 200,
				direction: "alternate",
				easing: "linear",
				complete: function (anim) {
					if (props.listener) props.listener(props.id);
				}
			})
		}
	}

	return (
		<div id={props.id} className={props.debug ? "testBox ButtonImage" : "ButtonImage"}
			style={{ ...props.style, display: 'inline-block', animation: 'filter 1s linear', filter: `grayscale(${props.disabled ? '75%' : '0%'})` }}

			onClick={clickHandler}
		>
			<div style={{ cursor: "pointer", display: "flex", alignItems: "flex-start", position: "relative", width: '100%' }}>
				<img alt="boton" src={props.image} style={{ width: "100%", ...props.styleImage }} />
				{props.children}
			</div>
		</div>
	)
}

export default Button;
