import React, {useState} from "react";
import ImagedLabel from "../Labels/ImagedLabel"
import ImagedWithText from "../Labels/ImagedWithText";

export default (props) => {
	const [debug, setDebug] = useState(true)
	return(
		<div className="Labels">
			<span>Debug</span>
			<But text={debug ? false : true} listener={setDebug}/>
			<hr/>
			<div className="testBox">
				<h4>ImagedLabel</h4>
				<ImagedLabel
					label={<h3 style={{margin:0, color:"red"}}>Hola</h3>}
					image={props.images.rec200}
					debug={debug}
					textAlign="center" //center
					padding={0} //5
				/>
			</div>
			<div className="testBox">
				<h4>ImagedWithText</h4>
				<ImagedWithText
					text={'Aliqua esse esse sit dolor ea consectetur elit elit reprehenderit laborum irure., Aliqua esse esse sit dolor ea consectetur elit elit reprehenderit laborum irure.'}
					image={props.images.rec200}
					debug={debug}
					textAlign="center" //center
					padding={0} //5
				/>
			</div>
		</div>
	)
}

function But(props){
	return(
		<div 
			style={{margin:2,backgroundColor: "blue", color:"white", cursor: "pointer", width:100, padding: 10, textAlign:"center", display:"inline-block"}}
			onClick={()=>{props.listener(props.text)}}>
			{props.text === true ? "OFF" : props.text === false ? "ON" : props.text}
		</div>
	)
}