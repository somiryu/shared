//children
//seconds: default: 6000
//message: text or false
import React,{useState, useEffect} from "react";
import anime from "../Animations/anime"
export default (props) =>{
	const [message, setMessage] = useState(false)
	let timeOut;

	useEffect(()=>{
		if(props.message){
			if(timeOut) clearTimeout(timeOut);
			setMessage(props.message)
			anime({
				targets: "#"+props.id,
				opacity: [0,1],
				duration: 1000,
				easing: "easeOutSine",
			})
			timeOut = setTimeout(()=>{
				anime({
					targets: "#"+props.id,
					opacity: [0],
					duration: 1000,
					easing: "easeInSine",
				})
			}, props.seconds || 6000)
		}
	}, [props.message])

	return (
		<div className="AlertFlash" id={props.id}>
			{message && props.children}
		</div>
	)
}