/*
Setup
Add to App.js
import EventEmitter from "events"
window.EM = new EventEmitter();
window.updateKeyTutorial = (key) => window.EM.emit('tutorial', key);

//Then set from App.js tutorial variables using Players.getTutorials from engine
//Create a listener to here answers from updateKeyTutorial in App.js to reset tutorial state variables


scope
current
animate
animateTop
translate
current
next
arrowUp
arroDown
listener => use to reset tutorial state variables in App.js
*/

import React, { useState, useEffect, useCallback } from "react";
import AnimatedText from "../Animations/AnimatedText"
import ImageTest from "../../images/Buttons/boton.png";
import "./Tutorial.css"
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";
import Levitation from "../Animations/Levitation";
import Flecha from "../../images/Buttons/flechaUp.png";
import { Players } from "../Utils/engine";
// import {TutorialModel} from "../../models/TutorialModel";

const organizePages = (pages, description) => {
	let arr = []
	if (pages.length === 0) {
		arr.push(description)
	} else {
		arr.push(description)
		Object.entries(pages[0]).map(
			// eslint-disable-next-line array-callback-return
			element => {
				if (element[0].match(/text/g))
					arr.push(element[1])
			}
		)
	}
	return arr
}

const getTutorial = (e) => {
	let nameTutorial = [];
	// eslint-disable-next-line array-callback-return
	if (e['tutorials']) {
		// eslint-disable-next-line array-callback-return
		Object.entries(e['tutorials']).map(ex => {
			nameTutorial[ex[0]] = {};
			ex[1].map(
				// eslint-disable-next-line array-callback-return
				subkey => {
					nameTutorial[ex[0]][subkey.tag] = {}
					nameTutorial[ex[0]][subkey.tag] = {
						texts: organizePages(subkey.pages, subkey.description),
						screen: subkey.screen,
						next: subkey.next_tag,
						arrow: subkey.arrow,
						button: subkey.meta === 'true' ? true : false
					}
				}
			)
		})
	}
	return nameTutorial
}

let firstTime = true;
export default (props) => {
	const [index, setIndex] = useState(0)
	const [organized, setOrganized] = useState(getTutorial(props.tutorial)) 
	const [tutorial, setTutorial] = useState(organized[props.scope] && organized[props.scope][props.current])
	const [keyActive, setkeyActive] = useState(true)
	const [loading, setLoading] = useState(false)
	const [updating, setUpdating] = useState(false)

	let contStyle = { zIndex: props.zIndexContent || 0 }
	
	useEffect(() => {
		if (firstTime) {setkeyActive(true)}
	}, [])

	
	useEffect(() => {
		if (tutorial && tutorial.next && tutorial.next !== 'null' && props.scope) {
			if (tutorial.next !== 'end2') {
				if (props.tutorial[props.scope] && props.tutorial[props.scope][tutorial.next] && props.tutorial[props.scope][tutorial.next].screen)
					props.saveNextTutorial(tutorial.next, props.tutorial[props.scope][tutorial.next].screen || tutorial.screen)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tutorial])
	
	useEffect(() => {
		setIndex(0)
		setTutorial(organized[props.scope] && organized[props.scope][props.current])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.current]);

	useEffect(() => {
		let animation;
		window.anime({
			targets: "#continueTut",scale: [1, 1.1],
			direction: "alternate",loop: true,duration: 300,easing: "linear",
		})

		if (props.animate) {
			const opts = {
				targets: props.animate,scale: [1, 1.1],direction: "alternate",
				loop: true,duration: 300,easing: "linear",
			}
			if (props.translate) opts.translateX = ["-50%", "-50%"];
			animation = window.anime(opts)
		}
		return () => {if (animation) animation.pause();}
	}, [props.animate, props.translate])
	
	useEffect(() => {
		let animation;
		if (props.animateTop) {
			animation = window.anime({
				targets: props.animateTop,top: -20,
				direction: "alternate",loop: true,duration: 300,
				easing: "linear",
			})
		}
		return () => {if (animation) animation.pause();}
	}, [props.animateTop])

	const eventListener = useCallback((key) => {
		if(updating !== key) { //Avoid repeated firing
			console.log("ªªªRECEIVED KEY", key)
			setUpdating(key)
			updateKeyTutorial(key)
		}
	}, [])

	useEffect(() => {
		if(window.EM){
			window.EM.addListener('tutorial', eventListener);
			console.log("event listener EM?", window.EM)
		}
		return ()=>window.EM.removeListener("tutorial", eventListener)
	}, []);
	
	const updateKeyTutorial = (current) => {
		if (!window.testTutorial) {
			const id = window.id_in_app;
			setLoading(true)
			Players.update_tutorial(id, current, {}, (res) => {
				if (res && res.response) {
					console.log('TUTORIAL UPDATE ===> ', res)
					setIndex(0);
					firstTime = false;
					setLoading(false)
					setkeyActive(true)
					if(props.listener){ //To do it externally
						console.log("listening tut")
						props.listener(res.response)
					} else {
						//TODO, do it internally... need to move the tutorial Model inside
					}
				}
			})
		}
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
	if (!tutorial || loading || props.dontRender || !props.current) { return (<div className="NoTutorial"></div>) }
	console.log("rendering tutorial")
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
			<div className="tutorialContent" style={contStyle}>
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
				{!tutorial.texts[index + 1] && tutorial.button && keyActive &&
					<div className="cta">
						<ButtonImageWithLabel image={props.imageButton || ImageTest} id="continuar" state="off" label={<label id="labelBtn">Continuar</label>} 
							listener={() => { 
								setkeyActive(window.testTutorial ? true : false); 
								props.nextTutorial(tutorial.next, tutorial.screen); 
								updateKeyTutorial(props.current)
							}} 
						/>
					</div>
				}
			</div>
		</div>
	)
}

export const createTutorial = (engineData) => {
	//
}


