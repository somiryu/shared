//leftHeight
//rightHeight
//topWitdth
//bottomWidth

import React from "react";
//import "Frame.css"
import SlideUp from "../../shared/Animations/SlideUp"
import SlideRight from "../../shared/Animations/SlideRight"
import SlideLeft from "../../shared/Animations/SlideLeft"

export default (props) =>{

	let style = {position: "fixed", top:0,width:"0vw", height:"100vh"}


	return(
		<div className={props.debug ? "Frame testBox" : "Frame"} style={style}>
			<div className={props.debug ? "testBox" : ""} style={{position:"fixed", height:props.leftHeight, left:0 }}>
				<SlideRight id="animframeleft" easing="easeOutBack" from={-150} style={{height:"100%"}}>
					<img src={props.imageLeft} style={{height:"100%"}} alt=""/> 
				</SlideRight>
			</div>
			<div className={props.debug ? "testBox" : ""} style={{position:"fixed", height:props.rightHeight, right:0 }}>
				<SlideLeft id="animframeright" easing="easeOutBack" from={150} style={{height:"100%"}}>
					<img src={props.imageRight} style={{height:"100%"}} alt=""/> 
				</SlideLeft>
			</div>
			<div className={props.debug ? "testBox" : ""} style={{position:"fixed", width:props.topWidth, top:0 }}>
				<img src={props.imageTop} style={{width:"100%"}} alt=""/> 
			</div>
			<div className={props.debug ? "testBox" : ""} style={{position:"fixed", width:props.bottomWidth, bottom:-16 }}>
				<SlideUp id="animframeup" easing="easeOutBack" from={150}>
					<img src={props.imageBottom} style={{width:"100%"}} alt=""/> 
				</SlideUp>
			</div>
		</div>
	)
}