//id, image, listener, style({}), scale(1.1)
import React from 'react'
import anime from "../Animations/anime"

function TwoButtonsWithAnimated(props) {
	let scale = props.scale || '1.0'
	const clickHandler = () => {
		anime({
			targets: "#" + props.id,
			translateY: 40,
			delay: 500,
			complete: function (anim) {
				props.listener();
			}
		})
		anime({
			targets: "#" + props.id2,
			translateY: 40
		})
	}
	return (
		<div className={props.debug ? 'testBox' : ''} style={{display:'flex',position:'relative', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<div>
				<div id={props.id}
					style={{ ...props.style, cursor: "pointer", display: "inline-block" }}
					onClick={clickHandler}
				>
					<img alt="boton" src={props.image} style={{ width: "100%", transform: `scale(${scale})` }} />
				</div>
			</div>
			<div style={{position:'absolute', top:'40%'}}>
				<div id={props.id2}
					style={{ ...props.style, cursor: "pointer", display: "inline-block" }}
					onClick={clickHandler}
				>
					<img alt="boton" src={props.image} style={{ width: "100%", transform: `scale(${scale})` }} />
				</div>
			</div>
		</div>
	)
}

export default TwoButtonsWithAnimated;
