// textAlign
// image
// debug
// padding = padding of label
// label
// id
//textStyle

import React from "react";

export default (props)=>{
	let mainStyle = {position: "absolute",top: 0, left:0, width:"100%", height:props.height || "100%"}
	return(
		<div id={props.id} className={props.debug ? "ImagedLabel testBox" : "ImagedLabel"} style={{position:"relative", display:"inline-block"}}>
			<img alt="" src={props.image} style={{width:"100%"}}/>
			<div style={mainStyle} className={props.debug ? "testBox" : ""}>
				<div style={{
						position:"relative", width:"100%",
						boxSizing: "border-box",
						height:"100%",
						display:"flex",
						justifyContent:"center",
						alignItems:"center", 
						flexDirection:"column",
					}} className={props.debug ? "testBox" : ""}>
						<div style={{ boxSizing:"border-box", textAlign: props.textAlign || "center", padding: props.padding || 0, ...props.textStyle}} className={props.debug ? "testBox" : ""}>
							<div id="label_avatar" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
								{props.label}
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}