// image=IMAGE*
// listener=FUNCTION*
// id (Optional)
// width=panelMaxWidth "100%""
// bottom=percentageFromBottom 10
// textWidth=textWidthPercentage 80
// buttonPadding=SeparationBetweenTextAdnButton 10
// textHeight=percentage 70
// children=panelContentHTML
// imageButton
// label
// styleLabelButton
import React from "react";
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";
import ImageTest from "../ExampleImages/Buttons/boton.png";
export default (props) => {
	let style = { position: "relative", display: "flex", alignItems:"center", justifyContent:"center" }
	if (props.width) style.maxWidth = props.width;
	if (props.debug) style.border = "1px dashed blue"

	let textWidth = props.textWidth || 80
	let buttonPadding = props.buttonPadding || 10

	let mainStyle = {
		position: "absolute",
		width: textWidth + "%",
		height: (props.textHeight || 70) + "%",
		overflow: "auto",
		bottom: (props.bottom + buttonPadding || 80) + "%",
	}
	let buttonStyle = {
		position: "absolute",
		bottom: (props.bottom || 10) + "%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width:"20%"
	}
	return (
		<div className={props.debug ? 'testBox PanelWithButtonCenterImaged' : 'PanelWithButtonCenterImaged'} style={style} id={props.id}>
			<img alt="" src={props.image} style={{
				width: "100%",
			}} />
			<div className={props.debug ? 'testBox scrollbar' : 'scrollbar'} style={mainStyle}>
				{props.children}
			</div>
			<div  className={props.debug ? 'testBox' : ''} style={buttonStyle}>
				<ButtonImageWithLabel
					id="btn3"
					image={ImageTest}
					listener={props.listener}
					label={props.labelButton}
					debug={props.debug}
				>
				</ButtonImageWithLabel>
			</div>

		</div>
	)
}