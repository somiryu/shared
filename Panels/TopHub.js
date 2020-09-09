import React, {useState, useEffect} from "react";
//import "TopHub.css"
import SlideDown from "../../shared/Animations/SlideDown"

export default (props) =>{
	const [message, setMessage] = useState("")
	let style = {position:"fixed",top:0,width:"inherit",zIndex:1}

	useEffect(() => {
		window.EM.addListener('top', ({message}) => {setMessage(message);});
	}, []);

	return(
		<div className={window.DEBUG ? "TopHub testBox" : "TopHub"} style={style}>
			<SlideDown id="animtop">
			<div style={{position:"relative"}}>
				<img src={props.image} style={{width:"100%"}} alt=""/> 
				<div style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}>
					{React.cloneElement(props.children, {message: message})}
				</div>
			</div>
			</SlideDown>
		</div>
	)
}