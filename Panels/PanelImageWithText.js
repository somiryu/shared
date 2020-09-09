//id, image, padding(5%), debug, 
//imageClose;
//listenerClose;
//debug
//imageRight
//side || right - left (Default: right)
import React from "react";
import ButtonCerrar from '../ExampleImages/Buttons/cerrarVentana.png'
import PanelWithButtonClose from '../Panels/PanelWithButtonClose'

export default (props) => {
    let side = props.side === 'left' ? 'row-reverse' : 'row'
    return (
        <div id={props.id + "_panel"} className="PanelImageWithText">
            <PanelWithButtonClose

					id="pwbc4"
					image={props.image}
					debug={props.debug}
                    imageClose={ButtonCerrar}
                    listenerClose={props.listenerClose}
				>
                <div className={props.debug ? 'testBox' : ''} style={{display:'flex',flexDirection:side, height:'100%', width: '100%'}}>
                    <div className={props.debug ? 'testBox' : ''} style={{width:props.widthImage || '40%', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <div style={{width:'80%'}}>
                            <img style={{width:'100%'}} src={props.imageRight} alt="Imagen"></img>
                        </div>
                    </div>
                    <div className={props.debug ? 'testBox' : ''} style={{width:'70%', display:'flex', flexDirection:'column', padding:"10px", ...props.styleText}}>
                        <div className={props.debug ? 'testBox' : ''} style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <h1 style={{...props.styleTitle,}}>{props.title || '¡Haz Fallado!'}</h1>
                        </div>
                        <div  className={props.debug ? 'testBox' : ''} style={{display: props.parrafo ? 'flex' : 'none', marginTop:"8%", overflow:'auto'}}>
                            <p style={{...props.parrafoStyle}}>{props.parrafo || 'Perdiste una vida' }</p>
                        </div>
                    </div>
                </div>
			</PanelWithButtonClose>
        </div>
    )
}