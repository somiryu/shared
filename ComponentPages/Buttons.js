import React, { useState } from "react";
import ButtonImage from "../Buttons/ButtonImage";
import ButtonMultiState from "../Buttons/ButtonMultiState";
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";
import ButtonMultiStateWithText from "../Buttons/ButtonMultiStateWithText";
import ImageTest from "../ExampleImages/Buttons/boton.png";
import ButtonON from "../ExampleImages/Buttons/innos1BtnActive.png";
import ButtonOFF from "../ExampleImages/Buttons/innos1BtnLock.png";
import TwoButtonsWithAnimated from "../Buttons/TwoButtonsWithAnimated";
import ButtonWithText from "../Buttons/ButtonWithText";
import Flecha from "../ExampleImages/Buttons/flecha.png";
import TwoButtonsWithSeparator from "../Buttons/TwoButtonsWithSeparator";
import Separator from "../ExampleImages/Generic/separador.png";
export default (props) => {
	const [state1, setState1] = useState("off");

	return (
		<div className="Buttons">
			<But text="on" listener={() => setState1("on")} />
			<But text="off" listener={() => setState1("off")} />
			<But text="locked" listener={() => setState1("locked")} />
			<But text="disabled" listener={() => setState1("disabled")} />

			<hr />
			<div className="testBox">
				<h3>ButtonImageWithLabel</h3>
				<ButtonImageWithLabel
					id="btn3"
					image={ImageTest}
					label="Siguiente"
					keyLabel="Example__btn"
				>
				</ButtonImageWithLabel>
			</div>
			<div className="testBox">
				<h3>ButtonImage</h3>
				<ButtonImage
					id="btn1"
					image={props.images.circ40}
					listener={(id) => { console.log("clicked", id) }}
					scale={1.1} //1.1
					style={{ margin: 10 }} // {}
				/>
			</div>
			<div className="testBox">
				<h3>ButtonMultiState</h3>
				<ButtonMultiState
					id="btn2"
					state={state1}
					scale={1.2} //1.1
					images={{ off: props.images.sq80, on: props.images.circ80, nata: props.images.circ40 }}
					listeners={{
						off: () => { setState1("on") },
						on: () => { setState1("nata") },
					}}
					styles={{ off: { filter: "grayscale(100%)" } }}
				/>
			</div>
			<div className="testBox">
				<h3>ButtonMultiStateWithText</h3>
				<ButtonMultiStateWithText
					id="btn3"
					state={state1}
					scale={1.2} //1.1
					images={{ off: ButtonOFF, on: ButtonON }}
					listeners={{
						off: () => { setState1("on") },
						on: () => { setState1("off") },
					}}
					stylesText={{ off: { color: '#763320' }, on: { color: '#393834' } }}
					styles={{}}
					text={<h1>2</h1>}
				/>
			</div>
			<div style={{ width: '50px', height: '200px' }}>
				<h3>TwoButtonsWithAnimated</h3>
				<TwoButtonsWithAnimated
					id="btn6"
					id2="btn7s"
					image={Flecha}
					listener={() => { console.log("clicked Buttons Animated") }}
					scale={1.1} //1.1
					style={{}} // {}

				/>
			</div>
			<div>
				<h3>ButtonWithText</h3>
				<ButtonWithText
					id="btn1"
					image={props.images.rec200}
					listener={(id) => { console.log("clicked", id) }}
					scale={1.1} //1.1
					style={{ margin: 10 }} // {}
					text={<label style={{color:'#fff'}}>Amet sunt laboris ad labore proident </label>}
					positionText={{ }}
				/>
			</div>
			<div style={{ width: '260px', height: '200px' }}>
				<h3>TwoButtonsWithSeparator</h3>
				<TwoButtonsWithSeparator
					currencyLeft={
						{
							id: "curLeft",
							image: props.images.circ80,
							quantity: 1,
							position:'center',
							duration:1000,
							childStyle:{ color: "var(--red)" }

						}
					}
					separator={Separator}
					currencyRight={
						{
							id: "curRight",
							image: props.images.circ80,
							quantity: 7,
							position:'center',
							duration:1000,
							childStyle:{ color: "var(--red)" }
						}
					}
				>
				</TwoButtonsWithSeparator>
			</div>
		</div>
	)
}

export function But(props) {
	return (
		<div
			style={{ margin: 2, backgroundColor: "blue", color: "white", cursor: "pointer", width: 100, padding: 10, textAlign: "center", display: "inline-block" }}
			onClick={() => { props.listener(props.text) }}>
			{props.text === true ? "OFF" : props.text === false ? "ON" : props.text}
		</div>
	)
}