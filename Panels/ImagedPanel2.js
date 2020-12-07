//id, image, padding(5%), debug, children(opt)
//Done for avoiding porblems with iOS....
import React, {useState, useEffect} from "react";

export default (props) => {
	let mainStyle = {position: "absolute",top: 0, left:0, width:"100%", height:"100%"}
	const [off, setOff] = useState(true)
	useEffect(()=>{
		setTimeout(()=>{
			setOff(false)
		}, 200)
	})
	return(
		<div className="ImagedPanel" id={props.id} style={{position:"relative", display:"inline-block",...props.style}}>
			{!off &&
				<img alt="" src={props.image} style={{width:"100%"}}/>
			}
			<div  style={mainStyle} className={props.debug ? "testBox" : ""}>
				<div style={{
						position:"relative", width:"100%", 
						padding: props.padding || "5%",
						boxSizing: "border-box",
						height:"100%",
					}} className={props.debug ? "testBox" : ""}>
						<div style={{overflow:props.overflow || "none", height:"100%",...props.contentPrincipal}} className={props.debug ? "testBox" : ""}>
							{props.children}
						</div>
				</div>
			</div>
		</div>
	)
}