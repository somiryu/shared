//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//imageTop, positionTopImage (FROM PANELWITHIMAGETOP)
//marginTitle 
//title
//paragraphs = [{id: p1, text:'Perdiste la partida'},{id:p2, text:'Vuelve a intentarlo'}]
import React from "react";
import PanelWithImageTop from "./PanelWithImageTop";

export default (props) => {
    console.log(props);
    let displaySub = (props.subtitle ? 'inline-block' : 'none');
    console.log('displatSub', displaySub);
    let positionTopImage = props.positionTopImage || '-10%';
    let marginTitle = props.marginTitle || '5%';
    return (
        <PanelWithImageTop
            {...props}
        >
            <div className={props.debug ? 'testBox' : ''} style={{ marginTop: marginTitle, height: `calc(100% - ${marginTitle} + ${positionTopImage})`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height:'20%' }}>
                    <h1 className={props.debug ? 'testBox' : ''}>
                        {!props.title && 'Game Over'}
                    </h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height:'20%' }}>
                    {
                        props.paragraphs.map(
                            (paragraphs) => (<p style={{ margin: "1%", textAlign: "center" }} key={paragraphs.id} className={props.debug ? 'testBox' : ''}>
                                {paragraphs.text || 'Perdiste la partida Vuelve a intentarlo'}
                            </p>)
                        )
                    }
                </div>
                <div style={{ width: '35%', height:'20%' }}>{props.children}</div>
            </div>
        </PanelWithImageTop>
    )
}