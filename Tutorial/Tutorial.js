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
import Tutorial from "../../models/TutorialModel"
import ImageTest from "../ExampleImages/Buttons/boton.png";
import "./Tutorial.css"
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";
import Levitation from "../Animations/Levitation";
import Flecha from "../ExampleImages/Buttons/flechaUp.png";

export default (props) => {
	const [index, setIndex] = useState(0)
	const [lastK, setLastK] = useState('')
	const [tutorial, setTutorial] = useState(Tutorial[props.scope][props.current])
	// const changeTut = (key) => {
	// 	// llamar al motor con la nueva llave
	// 	 engine.agentUpdate(id_in_app, "Player", ()=>{},{
	// 	 	tutorial_state: key
	// 	 })
	// 	props.listener(key)
	// }
	useEffect(() => {
		props.listener(false, tutorial.next, tutorial.screen)
	}, [tutorial])
	useEffect(() => {
		setIndex(0)
		setTutorial(Tutorial[props.scope][props.current])
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
	return (
		<div className="tutorial" style={{ display: 'flex', flexDirection: 'row', width: `100%`, zIndex: 2 }}>
			{tutorial.arrow &&
				<div className="arrow" style={{
					position: 'absolute',
					top: `${tutorial.arrow['y']}%`,
					left: `${tutorial.arrow['x']}%`,
					transform: `rotate(${calculatePositionArrow(tutorial.arrow['direction'])})`,
				}}>
					<Levitation id="ArrowAnimation" duration={200} endDelay={30} to='30%'>
						<div style={{ transform: `scale(1.5)` }}>
							<img src={Flecha} alt='Flecha' />
							{/* ^ */}
						</div>
					</Levitation>
				</div>
			}
			<div style={{ display: 'flex', width: '100%' }}>
				<div className="tutorialContent" style={{ width: '80%', height: '100%', minWidth: '80%', marginRigth: '5%' }}>
					{(props.image || tutorial.image) &&
						<div className="character">
							<img src={tutorial.image || props.image} alt="Character" />
						</div>
					}
					<div className="tutorialText">
						<div><strong>Tutorial:</strong></div><br />
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
					<div className="cta" style={{ display: 'flex', width: '15%', minWidth: '15%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						{/* <span id="continueTut" class="span-btn" state="off" onClick={() => setIndex(index + 1)}>Siguiente</span> */}
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="saltar" state="off" label={<label id="labelBtn">Siguiente</label>} listener={() => setIndex(index + 1)} />
						{/* <ButtonImageWithLabel image={props.imageButton || ImageTest} id="continueTut" state="off" label={<label id="labelBtn">Siguiente</label>} listener={() => setIndex(index + 1)} /> */}
					</div>
				}
				{!tutorial.texts[index + 1] && props.current === "instruction" &&
					<div className="cta-buttons" style={{ display: 'flex', width: '15%', minWidth: '15%', height: '80%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
						{/* <span id="saltar" class="span-btn" state="off" onClick={() => { setIndex(0); props.followTutorial(false) }}>Saltar</span>
						<span id="continuar" class="span-btn" state="off" onClick={() => { setIndex(0); props.followTutorial(true, tutorial.next) }}>Continuar</span> */}
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="saltar" state="off" label={<label id="labelBtn">Saltar</label>} listener={() => { setIndex(0); props.followTutorial(false) }} />
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="continuar" state="off" label={<label id="labelBtn">Continuar</label>} listener={() => { setIndex(0); props.followTutorial(true, tutorial.next) }} />
					</div>
				}
				{!tutorial.texts[index + 1] && tutorial.button && tutorial.next &&
					<div className="cta" style={{ display: 'flex', width: '15%', minWidth: '15%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
						{/* <span id="continuar" class="span-btn" state="off" onClick={() => { setIndex(0); props.followTutorial(true, tutorial.next) }}>Continuar</span> */}
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="continuar" state="off" label={<label id="labelBtn">Continuar</label>} listener={() => { setIndex(0); props.followTutorial(true, tutorial.next) }} />
					</div>
				}
			</div>
		</div>
	)
}

export const createTutorial = (engineData) => {
	//
}


