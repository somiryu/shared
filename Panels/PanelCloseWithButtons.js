//id, image, padding(5%), debug, children(opt) (FROM PANELWITHBUTTONCLOSE)
//imageClose;
//clickClose;
//children || Optional
//debug
//buttons = [{id: btn1, image: '', label: '<h1>hola</h1>'}]
import React from "react";
import ButtonCerrar from '../ExampleImages/Buttons/cerrarVentana.png'
import PanelWithButtonClose from './PanelWithButtonClose'

export default (props) => {
    let buttons = props.buttons;
    let style = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    }
    return (
        <div id={props.id + "_panel"} className="PanelCloseWithTwoButtons">
            <PanelWithButtonClose
                id="pwbc4"
                image={props.image}
                debug={props.debug}
                imageClose={ButtonCerrar}
                listenerClose={props.clickClose}
                sizeClose={props.sizeClose}
            >
                <div className={props.debug ? 'testBox PanelCloseWithButtons': 'PanelCloseWithButtons'} style={{ display: 'flex', height: '100%', width: '80%', margin:'0 auto', flexDirection: 'row', justifyContent:'space-around', alignItems:'center' }}>
                    {
                        buttons.map((button) => {
                            return (
                                <div key={button.id}
                                    className={props.debug ? 'testBox': ''}
                                    onClick={() => props.onClick(button.id)}
                                    style={{ cursor: "pointer", position: "relative", display: 'inline-block' }}
                                >
                                    <img alt="boton"
                                        src={button.image}
                                        style={{ width: '100%' }}
                                    />
                                    <div className={props.debug ? 'testBox': ''} style={style}>
                                        <div className={props.debug ? 'testBox': ''} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            {button.label}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </PanelWithButtonClose>
        </div>
    )
}