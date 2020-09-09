//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//imageTop
//positionTopImage(-10%)
//heightImage(-20%)
//widthImageTop = (default "100%")
import React from "react";
import ImagedPanel from './ImagedPanel'

export default (props) => {
    ///let displaySub = (props.subtitle ? 'inline-block' : 'none');
    let positionTopImage = props.positionTopImage || '-10%';
    let widthImageTop = props.widthImageTop || "100%"
    return (
        <div id={props.id + "_panel"} className="PanelImageTopWithButton" style={{...props.style}}>
            <ImagedPanel {...props}>
                <div className={props.debug ? 'testBox' : ''}
                    style={{ position: 'absolute', top: positionTopImage, left: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={props.imageTop} alt="Imagen" style={{width: widthImageTop}}></img>
                </div>
                {props.children}
            </ImagedPanel>
        </div>
    )
}