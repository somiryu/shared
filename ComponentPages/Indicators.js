import React, { useState } from "react";
import OpacityIndicator from "../Indicators/OpacityIndicator";
import GrayscaleIndicator from "../Indicators/GrayscaleIndicator";
import CurrencyHorizontal from "../Indicators/CurrencyHorizontal";
import ProgressBar from "../Indicators/ProgressBar";
import ProgressBarVertical from "../Indicators/ProgressBarVertical";
import Bar from "../ExampleImages/Indicators/barraTiempo.png";
import BarVertical from "../ExampleImages/Indicators/barraTiempoVertical.png";

export default (props) => {
	const [indicator, setIndicator] = useState(false)
	const [qty, setQty] = useState(30)
	const [porcentaje, setPorcentaje] = useState(100)
	return (
		<div className="Indicators">
			<But text={indicator ? false : true} listener={setIndicator} />
			<input type="text" value={qty} onChange={(e) => { setQty(e.target.value) }} />
			<input
				type="number"
				value={porcentaje}
				onChange={(e) => { setPorcentaje(e.target.value)}}
				min="0"
				max="100"
			/>
			<div className="testBox">
				<h4>OpactityIndicator</h4>
				<OpacityIndicator
					id="starGray"
					image={props.images.sq40}
					on={indicator} // false
					offOpacity={0.3} //0.5
					duration={500} //800
					style={{ margin: "10px" }} //{}
				/>
			</div>
			<div className="testBox">
				<h4>GrayscaleIndicator</h4>
				<GrayscaleIndicator
					id="level"
					on={indicator}
					image={props.images.circ40}
					offGrayscale={80} //100
					duration={500} //500
					style={{ margin: "10px" }} //{}
				/>
			</div>
			<div className="testBox" style={{ width: "100px" }}>
				<h4 style={{marginBottom: '20px'}}>CurrencyHorizontal</h4>
				<CurrencyHorizontal
					id="test"
					quantity={qty}
					image={props.images.sq40}
					duration={1000} //2000
					fontSize="1.3em" //1.1em
					fontFamily="Arial" //inherit
					childStyle={{ color: "var(--red)" }} //{}
					debug={true}
					position='right'
				/>
			</div>
			<div className="testBox" style={{width:'40%', height:'100px'}}>
				<h4>ProgressBar</h4>
				<ProgressBar
					percentage={porcentaje}
					image={Bar}
					padding={'3%'}
				/>
			</div>
			<div className="testBox">
				<h4>ProgressBarVertical</h4>
				<ProgressBarVertical
					percentage={porcentaje}
					image={BarVertical}
					padding={'3% 22% 3% 28%'}
				/>
			</div>
		</div>
	)
}

function But(props) {
	return (
		<div
			style={{ margin: 2, backgroundColor: "blue", color: "white", cursor: "pointer", width: 100, padding: 10, textAlign: "center", display: "inline-block" }}
			onClick={() => { props.listener(props.text) }}>
			{props.text === true ? "OFF" : props.text === false ? "ON" : props.text}
		</div>
	)
}