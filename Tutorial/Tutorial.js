/*
scope
current
animate
animateTop
translate
current
next
arrowUp
arroDown
*/

import React, { useState, useEffect } from "react";
import AnimatedText from "../Animations/AnimatedText"
import ImageTest from "../../images/Buttons/boton.png";
import "./Tutorial.css"
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";
import Levitation from "../Animations/Levitation";
import Flecha from "../../images/Buttons/flechaUp.png";
import { getCookie, Players } from "../Utils/engine";
// import {TutorialModel} from "../../models/TutorialModel";
export default (props) => {
	const [index, setIndex] = useState(0)
	const [tutorial, setTutorial] = useState(props.tutorial[props.scope] && props.tutorial[props.scope][props.current] ? props.tutorial[props.scope][props.current] : null)

	useEffect(() => {
		if (tutorial && tutorial.next && tutorial.next !== 'null' && props.scope) {
			if (tutorial.next !== 'end') {
				if (props.tutorial[props.scope] && props.tutorial[props.scope][tutorial.next] && props.tutorial[props.scope][tutorial.next].screen)
					props.saveNextTutorial(tutorial.next, props.tutorial[props.scope][tutorial.next].screen || tutorial.screen)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tutorial])
	useEffect(() => {
		if (props.current !== 'end') {
			setIndex(0)
			setTutorial(props.tutorial[props.scope] && props.tutorial[props.scope][props.current] ? props.tutorial[props.scope][props.current] : null)
		} else {
			setTutorial(null)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.current]);
	useEffect(() => {
		let animation;
		window.anime({
			targets: "#continueTut",
			scale: [1, 1.1],
			direction: "alternate",
			loop: true,
			duration: 300,
			easing: "linear",
		})

		if (props.animate) {
			const opts = {
				targets: props.animate,
				scale: [1, 1.1],
				direction: "alternate",
				loop: true,
				duration: 300,
				easing: "linear",
			}
			if (props.translate) opts.translateX = ["-50%", "-50%"];
			animation = window.anime(opts)
		}
		return () => {
			if (animation) animation.pause();
		}
	}, [props.animate, props.translate])
	useEffect(() => {
		let animation;
		if (props.animateTop) {
			animation = window.anime({
				targets: props.animateTop,
				top: -20,
				direction: "alternate",
				loop: true,
				duration: 300,
				easing: "linear",
			})
		}
		return () => {
			if (animation) animation.pause();
		}
	}, [props.animateTop])
	const updateKeyTutorial = (current) => {
		// if (!window.test) {
			let id = getCookie("temp_engine_id");
			Players.update_tutorial(id, current, {}, (res) => {
				console.log('Current ===> ', res.response)
				if(res && res.response && res.response){
					window.setTutorial(res.response) 
				}
			})
		// }
	}
	const calculatePositionArrow = (direction) => {
		let rotate = 0
		if (direction === 'top') {
			rotate = 0
		} else if (direction === 'right') {
			rotate = 90
		} else if (direction === 'bottom') {
			rotate = 180
		} else if (direction === 'left') {
			rotate = 270
		}
		return rotate + 'deg'
	}
	if (!tutorial) { return (<div></div>) }
	return (
		<div className="tutorial" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: `100%`, height: '100%' }}>
			{tutorial.arrow &&
				<div className="arrow" style={{
					position: 'absolute',
					top: `${tutorial.arrow['y']}%`,
					left: `${tutorial.arrow['x']}%`,
					transform: `rotate(${calculatePositionArrow(tutorial.arrow['direction'])})`,
					zIndex: props.zIndexArrow || (props.zIndexContent || 0)
				}}>
					<Levitation id="ArrowAnimation" duration={200} endDelay={30} to='30%'>
						<div id='imgArrow'>
							<img src={Flecha} alt='Flecha' />
							{/* ^ */}
						</div>
					</Levitation>
				</div>
			}
			<div className="tutorialContent" style={{ top: props.top || '75%', zIndex: props.zIndexContent || 0 }}>
				<div className="tutorialContentText" style={{ width: (tutorial.texts[index + 1]) || (!tutorial.texts[index + 1] && tutorial.button) ? '75%' : '100%' }}>
					{(props.image || tutorial.image) &&
						<div className="character">
							<img src={tutorial.image || props.image} alt="Character" />
						</div>
					}
					<div className="tutorialText">
						<div style={{ display: tutorial.title ? 'flex' : 'none' }}><strong>Tutorial:</strong></div><br />
						<AnimatedText
							value={tutorial.texts[index]}
							id="tutorialText"
							duration={3000}
							delay={200}
						>
							<div>...</div>
						</AnimatedText>
					</div>
				</div>
				{tutorial.texts[index + 1] &&
					<div className="cta">
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="saltar" state="off" label={<label id="labelBtn">Siguiente</label>} listener={() => { setIndex(index + 1); }} />
					</div>
				}
				{!tutorial.texts[index + 1] && tutorial.button &&
					<div className="cta">
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="continuar" state="off" label={<label id="labelBtn">Continuar</label>} listener={() => { setIndex(0); props.nextTutorial(tutorial.next, tutorial.screen); updateKeyTutorial(props.current) }} />
					</div>
				}
			</div>
		</div>
	)
}

export const createTutorial = (engineData) => {
	//
}


