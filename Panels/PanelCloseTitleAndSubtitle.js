//id, image, padding(5%), debug, children(opt), imageClose, 
//listenerClose (FROM PANELWITHBUTTONCLOSE)
//children || Optional
//title
//subtitle
//Closebutton onlu if props.imageClose


import React from "react";
import ButtonCerrar from '../ExampleImages/Buttons/cerrarVentana.png'
import PanelWithButtonClose from './PanelWithButtonClose'

export default (props) => {
    let height = props.subtitle ? '60%' : '100%';
    let heightTitle = props.subtitle ? '40%' : '100%';
    let displayTit = (props.title ? 'inline-block' : 'none');
    let displaySub = (props.subtitle ? 'inline-block' : 'none');
    return (
        <div id={props.id + "_panel"} className="PanelCloseTitleAndSubtitle">
            <PanelWithButtonClose
                id="pwbc4"
                image={props.image}
                debug={props.debug}
                imageClose={ButtonCerrar}
                {...props}
            >
                <div className={props.debug ? 'testBox': ''} style={{ display: 'flex', height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className={props.debug ? 'testBox': ''} style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: props.heightHeader || '40%', width: '100%' }}>
                        <div className={props.debug ? 'testBox': ''} style={{ display: displayTit, height: heightTitle, width: '100%' }}>
                            <div id="PanelTitle" style={{ display: 'flex',width:'100%', justifyContent: 'center', alignItems: 'center',}}>
                                {props.title}
                            </div>
                        </div>
                        <div className={props.debug ? 'testBox': ''} style={{display: displaySub, height: height, width: '90%', margin:'0 auto' }}>
                            <div id="PanelSubtitle" style={{ display: 'flex',height:'100%', width:'76%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start',}}>
                                {props.subtitle}
                            </div>
                        </div>
                    </div>
                    <div className={props.debug ? 'testBox': ''} style={{ height: 'auto', width: '100%',display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                        {props.children}
                    </div>
                </div>
            </PanelWithButtonClose>
        </div>
    )
}