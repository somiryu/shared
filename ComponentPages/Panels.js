import React, { useState } from "react";
import PanelWithButtonCenter from "../Panels/PanelWithButtonCenter";
import PanelWithButtonCenterImaged from "../Panels/PanelWithButtonCenterImaged";
import PanelWithTwoButtonsImaged from "../Panels/PanelWithTwoButtonsImaged";
import ImagedPanel from "../Panels/ImagedPanel";
import PanelWithTwoImagedLabel from '../Panels/PanelWithTwoImagedLabel';
import ButtonGeneral from '../ExampleImages/Buttons/botonGeneral.png';
import Hoja from '../ExampleImages/Containers/hoja.png';
import PanelWithButtonClose from '../Panels/PanelWithButtonClose';
import ButtonCerrar from '../ExampleImages/Buttons/cerrarVentana.png';
import PanelWithOptions from "../Panels/PanelwithOptions";
import PanelImageWithText from "../Panels/PanelImageWithText";
import PanelCloseWithButtons from '../Panels/PanelCloseWithButtons';
import PanelCloseTitleAndSubtitle from '../Panels/PanelCloseTitleAndSubtitle';
import PanelImageTopWithButton from "../Panels/PanelImageTopWithButton";
import PanelWithCurrencyHorizontal from "../Panels/PanelWithCurrencyHorizontal";
import PanelWithButtonsText from "../Panels/PanelWithButtonsText";
import mpl from "../ExampleImages/Containers/mpl.png";
import PanelImageTopWithMultipleButtons from "../Panels/PanelImageTopWithMultipleButtons";
import PanelWithDecorations from "../Panels/PanelWithDecorations";

export default (props) => {
	const [debug, setDebug] = useState(true);
	let objectButtons = [
		{ id: 'btn1', image: mpl, text: 'Officia fugiat proident nisi Lorem enim nisi esse nisi. Reprehenderit mollit reprehenderit velit occaecat fugiat reprehenderit quis id dolor qui eiusmod fugiat cupidatat commodo. Pariatur ad proident ad est sint ullamco eiusmod adipisicing laborum deserunt enim mollit occaecat.', scale:"0.5" },
		{ id: 'btn2', image: mpl, text: 'Officia fugiat proident nisi Lorem enim nisi esse nisi. Reprehenderit mollit reprehenderit velit occaecat fugiat reprehenderit quis id dolor qui eiusmod fugiat cupidatat commodo. Pariatur ad proident ad est sint ullamco eiusmod adipisicing laborum deserunt enim mollit occaecat.' },
		{ id: 'btn3', image: mpl, text: 'Officia fugiat proident nisi Lorem enim nisi esse nisi. Reprehenderit mollit reprehenderit velit occaecat fugiat reprehenderit quis id dolor qui eiusmod fugiat cupidatat commodo. Pariatur ad proident ad est sint ullamco eiusmod adipisicing laborum deserunt enim mollit occaecat.' }
	]
	return (
		<div className="Panels">
			<span>Debug</span>
			<But text={debug ? false : true} listener={setDebug} />
			<hr />
			<div className="testBox">
				<h3>ImagedPanel</h3>
				<ImagedPanel
					id="tiP1"
					image={props.images.rec600}
					debug={debug} //testBox appears
					padding="10%" //5%
				>
					<div style={{ color: "white" }}> Children Optional Children Optional Children Optional Children Optional Children Optional Children Optional Children Optional Children Optional </div>
				</ImagedPanel>
			</div>
			<div className="testBox">
				<h3>PanelWithButtonCenter</h3>
				<PanelWithButtonCenter id="pwbc2" debug={debug} listener={() => { }}>
					<h3>Has Children</h3>
				</PanelWithButtonCenter>
			</div>
			<div className="testBox">
				<h3>PanelWithButtonCenterImaged</h3>
				<PanelWithButtonCenterImaged
					id="pwbc2"
					image={props.images.rec600}
					listener={() => { }}
					bottom={10} //10
					debug={debug} //testBox appears
					buttonPadding={20} //10
					textWidth={70} //80
					textHeight={45} //70
					width="100%" //100% (maxWidth)
				>
					<h1 style={{ textAlign: "center", color: "white" }}>HOLA!</h1>
				</PanelWithButtonCenterImaged>
			</div>
			<div className="testBox">
				<h3>PanelWithTwoButtonsImaged</h3>
				<PanelWithTwoButtonsImaged
					id="pwbc3"
					image={props.images.rec200}
					imageLeft={props.images.circ40}
					imageRight={props.images.sq40}
					listenerLeft={() => { console.log("Click Left") }}
					listenerRight={() => { console.log("Click Right") }}
					direction="row" //"row"
					debug={debug}
				>
					<p style={{ textAlign: "center", color: "white" }}>Optional</p>
				</PanelWithTwoButtonsImaged>
				<PanelWithTwoButtonsImaged
					id="pwbc4"
					image={props.images.sq200}
					imageLeft={props.images.circ40}
					imageRight={props.images.sq40}
					listenerLeft={() => { console.log("Click Left") }}
					listenerRight={() => { console.log("Click Right") }}
					direction="column"
					debug={debug}
				>
				</PanelWithTwoButtonsImaged>
				<PanelWithTwoButtonsImaged
					id="pwbc5"
					image={props.images.sq200}
					imageLeft={props.images.circ40}
					imageRight={props.images.sq40}
					listenerLeft={() => { console.log("Click Left") }}
					listenerRight={() => { console.log("Click Right") }}
					direction="column"
					verticalAlign="flex-end"
					debug={debug}
				>
				</PanelWithTwoButtonsImaged>
			</div>
			<div>
				<h3>PanelWithTwoButtonsImaged Example</h3>
				<PanelWithTwoImagedLabel
					id="pwbc6"
					image={Hoja}
					direction="column"
					imageLabel={ButtonGeneral}
					debug={debug}
					labelTop={<h1>Hola</h1>}
					labelBottom={<h1>Chao</h1>}
					idTop={'btn_top'}
					idBottom={'btn_bottom'}
					listenerTop={() => console.log('Clicked Top')}
					listenerBottom={() => console.log('Clicked Bottom')}
				>
				</PanelWithTwoImagedLabel>
			</div>
			<div>
				<h3>PanelWithButtonClose</h3>
				<PanelWithButtonClose
					id="pwbc7"
					image={props.images.rec600}
					debug={true}
					imageClose={ButtonCerrar}
					listenerClose={() => console.log('Closed')}
				>
				</PanelWithButtonClose>
			</div>
			<div>
				<h3>PanelsWithOptions</h3>
				<PanelWithOptions
					id="pwbc8"
					title="Hola"
					subtitle="Como estas"
					showSubtitle={true}
					image={props.images.rec600}
					debug={true}
					imageClose={ButtonCerrar}
					listenerClose={() => console.log('Closed')}
					options={[{ id: 'opt1', description: '123', images: { check: props.images.circ40, uncheck:props.images.rec40 }, state:'check' }, { id: 'opt2', description: '456', images: { check: props.images.circ40, uncheck:props.images.rec40 }, state:'uncheck' }]}
				>
				</PanelWithOptions>
			</div>
			<div>
				<h3>PanelImageWithText</h3>
				<PanelImageWithText
					id="pwbc4"
					image={props.images.rec600}
					imageRight={props.images.circ200}
					imageClose={ButtonCerrar}
					listenerClose={() => console.log('Closed')}
					debug={true}
				>
				</PanelImageWithText>
			</div>
			<div>
				<h3>PanelClosedWithTwoButtons</h3>
				<PanelCloseWithButtons
					id="pwbc5"
					image={props.images.rec600}
					imageRight={props.images.circ200}
					imageClose={ButtonCerrar}
					buttons={[{ id: 'btn1', image: props.images.circ80, label: <h1>Hola</h1> }, { id: 'btn2', image: props.images.circ80, label: <h1>Hola2</h1> }, { id: 'btn3', image: props.images.circ80, label: <h1>Hola3</h1> }]}
					onClick={(id) => handleClick(id)}
					listenerClose={() => console.log('Closed')}
					debug={true}
				>
				</PanelCloseWithButtons>
			</div>
			<div>
				<h3>PanelCloseTitleAndSubtitle</h3>
				<PanelCloseTitleAndSubtitle
					id="pwbc6"
					image={props.images.rec600}
					imageRight={props.images.circ200}
					imageClose={ButtonCerrar}
					buttons={[{ id: 'btn1', image: props.images.circ80, label: <h1>Hola</h1> }, { id: 'btn2', image: props.images.circ80, label: <h1>Hola2</h1> }, { id: 'btn3', image: props.images.circ80, label: <h1>Hola3</h1> }]}
					onClick={(id) => handleClick(id)}
					showSubtitle={true}
					title={'Titulo'}
					subtitle={'Subtitulo'}
					debug={true}
					listenerClose={() => console.log('Closed')}
				>
				</PanelCloseTitleAndSubtitle>
			</div>
			<div>
				<h3>PanelImageTopWithButton</h3>
				<PanelImageTopWithButton
					id="tiP1"
					image={props.images.rec600}
					debug={debug} //testBox appears
					padding="5%" //5%
					imageTop={props.images.circ80}
					imageButton={props.images.rec80}
					paragraphs={[{ id: 'p1', text: 'Perdiste la partida' }, { id: 'p2', text: 'Vuelve a intentarlo' }]}
					heightImage="15%"
				>
				</PanelImageTopWithButton>
			</div>
			<div>
				<h3>PanelWithCurrencyHorizontal</h3>
				<PanelWithCurrencyHorizontal
					id="tiP1"
					image={props.images.rec600}
					debug={debug} //testBox appears
					padding="5%" //5%
					quantity={10}
					imageCurrency={props.images.sq40}
					duration={1000} //2000
					fontSize="2em" //1.1em
					fontFamily="Arial" //inherit
					childStyle={{ color: "var(--red)" }} //{}
				>
				</PanelWithCurrencyHorizontal>
			</div>
			<div>
				<h3>PanelWithButtonsText</h3>
				<PanelWithButtonsText
					id="tiP1"
					image={props.images.rec600}
					debug={debug} //testBox appears
					margin="8%"
					buttons={objectButtons}
				>
				</PanelWithButtonsText>
			</div>
			<div>
				<h3>PanelsWithOptions</h3>
				<PanelImageTopWithMultipleButtons
					id="tiP1"
					image={props.images.rec600}
					imageTop={props.images.rec80}
					positionTopImage={'-5%'}
					debug={debug} //testBox appears
					padding="5%" //5%
					buttons={[{id: 'btn1', images: { off: props.images.circ80, on: props.images.circ80 }, text:'F', stylesNumber:{ off: { color: '#763320' }, on: { color: '#393834' } }}, {id: 'btn2', images: { off: props.images.circ80, on: props.images.circ80 },text:'M', stylesNumber:{ off: { color: '#763320' }, on: { color: '#393834' } } }]}
					heightImage="15%"
					direction="vertical"
				>
				</PanelImageTopWithMultipleButtons>
			</div>
			<div>
				<h3>PanelWithDecorations</h3>
				<PanelWithDecorations
					id="PanelWithDecorations"
					bgColor="black"
					width="100px"
					height="100px"
					imageTop={props.images.rec600}
					imageBottom={props.images.rec600}
					TopHeight="20%"
					BottomHeight="20%"
					//padding || "5%"
					//overflow= default(true)
					//children(opt)
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
function handleClick(i) {
	console.log('Click ON =>', i);
}