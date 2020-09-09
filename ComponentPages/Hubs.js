import React, { useState } from "react";
//Hubs
import GrayscaleWithTwoOpacities from "../Hubs/GrayscaleWithTwoOpacities"
import MaskedAvatar from "../Hubs/MaskedAvatar"
import CurrencyList from "../Hubs/CurrencyList";
import MaskedAvatarWithTitle from "../Hubs/MaskedAvatarWithTitle";
import Objetive from "../Hubs/Objetive";
import Separator from "../ExampleImages/Generic/separador.png";
import MaskedAvatarTitleWithButtonMultiState from "../Hubs/MaskedAvatarTitleWithButtonMultiState";
import ControllerCheckboxes from "../Controllers/CheckboxesController";
import ControllerList from "../Controllers/ListController";
import BarProgressController from "../Hubs/BarProgressController";

export default (props) => {
	const [state1, setState1] = useState(false)
	const [state2, setState2] = useState(false)
	const [state3, setState3] = useState(false)

	return (
		<div className="Hubs">
			<But text={state1 ? false : true} listener={setState1} />
			<But text={state2 ? false : true} listener={setState2} />
			<But text={state3 ? false : true} listener={setState3} />
			<hr />
			<GrayscaleWithTwoOpacities
				id="hub1"
				mainOn={state1}
				indicator1={state2}
				indicator2={state3}
				top={-10}
				left={50}
				mainImage={props.images.rec400}
				indicator1Image={props.images.sq40}
				indicator2Image={props.images.circ40}
			/>
			<hr />
			<MaskedAvatar
				id="colaborador1"
				avatar={props.images.CaraInnos}
				containerImage={props.images.Dios}
				padding={12}
				listener={() => console.log('Clicked MarkedAvatar')}
				maskBorder={100}
			/>
			<div className="testBox" style={{ width: "100px" }}>
				<h4>CurrencyList</h4>
				<CurrencyList
					currencies={{ xp: { image: props.images.circ40, quantity: 20 }, score: { image: props.images.sq40, quantity: 25 } }}
					duration={1000} //2000
					fontSize="1.3em" //1.1em
					fontFamily="Arial" //inherit
					childStyle={{ color: "var(--red)" }} //{}
				/>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>MaskedAvatarWithTitle</h4>
				<MaskedAvatarWithTitle
					id="colaborador1"
					avatar={props.images.Avatar}
					containerImage={props.images.AvatarContainer}
					padding={12}
					paddingLabel={5}
					maskBorder={100}
					imageTitle={props.images.Colaborador}
					textAlign={"center"}
					imageLabel={props.images.rec200}
					debug={true}
					label="Compra de días"
					pointer={true}
					listener={() => console.log('Clicked MarkedAvatar')}
				>
				</MaskedAvatarWithTitle>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>MaskedAvatarTitleWithButtonMultiState</h4>
				<MaskedAvatarTitleWithButtonMultiState
					id="colaborador1"
					avatar={props.images.Avatar}
					containerImage={props.images.AvatarContainer}
					padding={12}
					paddingLabel={5}
					maskBorder={100}
					imageTitle={props.images.Colaborador}
					textAlign={"center"}
					imageLabel={props.images.rec200}
					debug={true}
					label="Compra de días"
					idBtn="btn2"
					state={'on'}
					scale={1.2} //1.1
					images={{ off: props.images.sq80, on: props.images.circ80, nata: props.images.circ40 }}
					listeners={{
						off: () => { setState1("on") },
						on: () => { setState1("off") },
					}}
					styles={{ off: { filter: "grayscale(100%)" } }}
					listener={() => console.log('Clicked MarkedAvatar')}
				>
				</MaskedAvatarTitleWithButtonMultiState>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>Objetive</h4>
				<Objetive
					id="btn2"
					state={'on'}
					scale={1.2} //1.1
					images={{ off: props.images.sq80, on: props.images.circ80, nata: props.images.circ40 }}
					listeners={{
						off: () => { setState1("on") },
						on: () => { setState1("off") },
					}}
					styles={{ off: { filter: "grayscale(100%)" } }}
					currencyLeft={
						{
							id: "curLeft",
							image: props.images.circ80,
							quantity: 3,
							position: 'center',
							duration: 1000,
							childStyle: { color: "var(--red)" }

						}
					}
					separator={Separator}
					currencyRight={
						{
							id: "curRight",
							image: props.images.circ80,
							quantity: 3,
							position: 'center',
							duration: 1000,
							childStyle: { color: "var(--red)" }
						}
					}
					image={props.images.sq40}
					label={'Hola'}
					imageLabel={props.images.rec200}
					debug={true}
					textAlign="center" //center
					padding={0}
				>
				</Objetive>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>ControllerCheckboxes</h4>
				<ControllerCheckboxes
					options={[
						{ id: 'opt1', description: '123', images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' },
						{ id: 'opt2', description: '456', images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' },
						{ id: 'opt3', description: '567', images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' }
					]}
					shuffle={true}
					debug={true}
				>
				</ControllerCheckboxes>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>ControllerList</h4>
				<ControllerList
					turnOn={3}
					numberItems={10}
					on={[...Array(10)].map((_, i) => props.images.circ80)}
					off={[...Array(10)].map((_, i) => props.images.sq80)}
					icons={{ 3: props.images.rec20 }}
					positionIcons={{ 3: { top: '-10%' } }}
					justify={'space-evenly'}
					styleItems={{ padding: '5px' }}
				>
				</ControllerList>
			</div>
			<div className="testBox" style={{ height: '250px' }}>
				<h4>BarProgressController</h4>
				<BarProgressController
					turnOn={6}
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