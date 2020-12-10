// id, containerImage, padding,listener, maskBorder, maskBorder, avatar, children, random

import React from "react";

export default (props) =>{
	return(
		<div id={props.id} className="MaskedAvatar" style={{display:"inline-block", position:"relative", maxWidth:"100%", ...props.styleContainer}}  onClick={props.listener}>
			<img src={props.containerImage} style={{...props.styleImageContainer, width:"100%"}} alt=""/>
			<div style={{position:"absolute", width:"100%", height:"100%", top:0, left:0, display:"flex", justifyContent:"center"}}>
				<div style={{
					display:'inline-block',
					margin:props.padding, 
					overflow:"hidden",
					borderRadius:props.maskBorder+"%",
					WebkitBorderRadius:props.maskBorder+"%",
					msBorderRadius:props.maskBorder+"%",
				}}>
					<img id={props.id+"_avatar"} src={props.avatar} alt="" style={{width:"100%", ...props.styleImage}}/>
				</div>
			</div>
			{props.children}
		</div>
	)
}