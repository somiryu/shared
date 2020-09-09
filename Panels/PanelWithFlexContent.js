//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
// listenerLeft, imageLeft, styleLeft({margin:5})
// listenerRight, imageRight, styleRight({margin:5})
//verticalAlign: "flex-start", "flex-end" ("center")
//direction: "column" ("row")

import React from "react";
import ImagedPanel from "./ImagedPanel"

export default (props) => {
	// let styleLeft = props.styleLeft || {margin:5}
	// let styleRight = props.styleRight || {margin:5}
	return(
		<div id={props.id + "_panel"} className="PanelWithFlexContent">
			<ImagedPanel {...props}>
				<div style={{display:"flex",flexDirection: "column", justifyContent:props.verticalAlign || "center", height:"100%", }}>
					{props.children}
				</div>
			</ImagedPanel>
		</div>
	)
}