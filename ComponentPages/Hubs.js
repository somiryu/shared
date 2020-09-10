import React, { useState } from "react";

//Hubs
import GrayscaleWithTwoOpacities from "../Hubs/GrayscaleWithTwoOpacities"
import MaskedAvatar from "../Hubs/MaskedAvatar"
import CurrencyList from "../Hubs/CurrencyList";
import MaskedAvatarWithTitle from "../Hubs/MaskedAvatarWithTitle";
import ControllerCheckboxes from "../Controllers/CheckboxesController";
import ControllerList from "../Controllers/ListController";
import BarProgressController from "../Hubs/BarProgressController";
import TituloColaborador from "../ExampleImages/Hubs/tituloColaborador.png"

export default (props) => {
	const [state1, setState1] = useState(false)
	const [state2, setState2] = useState(false)
	const [state3, setState3] = useState(false)
	const [choose, setChoose] = useState('')

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
					imageLabel={TituloColaborador}
					debug={true}
					label={<label style={{color:'#fff'}}>Text dummy</label>}
					pointer={true}
					listener={() => console.log('Clicked MarkedAvatar')}
				>
				</MaskedAvatarWithTitle>
			</div>
			<div className="testBox" style={{ width:'30%', height: '250px' }}>
				<h4>ControllerCheckboxes - Choose: {choose || 'no one'}</h4>
				<ControllerCheckboxes
					options={[
						{ id: 'opt1', description: <p>123</p>, images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' },
						{ id: 'opt2', description: <p>456</p>, images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' },
						{ id: 'opt3', description: <p>567</p>, images: { check: props.images.circ40, uncheck: props.images.rec40 }, state: 'uncheck' }
					]}
					listener={(d) => {setChoose(JSON.stringify(d)) }}
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