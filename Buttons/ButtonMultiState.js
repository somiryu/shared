// id, scale(1.1)
// state: "key" //just for setting initial
// images={key:image, key2:image...} //set needed
// listeners={key: func, key2: func...} //not all required
// style={key:{}, key2:{}} //only needed
// children
// lock

import React, { useState, useEffect } from 'react'
import anime from "../Animations/anime"

function Button(props) {
	const [current, setCurrent] = useState(props.state)
	useEffect(() => { setCurrent(props.state) }, [props.state])
	let styles = {}
	for (let key in props.images) { styles[key] = props.styles ? props.styles[key] || {} : {} }
	const clickHandler = () => {
		if (!props.lock) {
			if (props.listeners[current]) {
				anime({
					targets: "#" + props.id,
					scale: props.scale || 1.1,
					duration: 200,
					direction: "alternate",
					easing: "linear",
					complete: function (anim) {
						props.listeners[current](props.id);
					}
				})
			}
		}
	}

	let style = { ...props.style, display: "inline-block", position: "relative" }
	if (props.listeners) { if (props.listeners[current]) style.cursor = "pointer"; }
	let image = props.images[current]

	return (
		<div id={props.id}
			className={props.debug ? "testBox ButtonMultiStage" : "ButtonMultiStage"}
			style={style} onClick={clickHandler}>
			<img alt="boton" src={image} style={{ ...styles[current], width: "100%" }} />
			{props.children}
		</div>
	)
}

export default Button;
