//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//listenerLeft, imageLeft, styleLeft({margin:5})
//listenerRight, imageRight, styleRight({margin:5})
//verticalAlign: "flex-start", "flex-end" ("center")
//direction: "column" ("row")
//imageLabel
//labelTog: tag HTML
//labelBottom: tag HTML
//text
//paddingText

import React from "react";
import ImagedPanel from "./ImagedPanel"
import ButtonImageWithLabel from "../Buttons/ButtonImageWithLabel";

export default (props) => {
    let paddingText = props.paddingText || '5%';
    return (
        <div id={props.id + "_panel"} className="PanelWithTwoImagedLabel">
            <ImagedPanel {...props}>
                <div style={{ display: "flex", flexDirection: 'column', height: '100%', justifyContent:'space-evenly' }}>
                    <div style={{ display: "flex", flexDirection: props.direction, justifyContent: props.verticalAlign || "center", height: "20%", padding: paddingText, overflowY: 'auto' }}>
                        <p style={{ textAlign: 'center', color: "black" }}>
                            {props.text || 'Velit dolore culpa cupidatat nulla nulla commodo ullamco do dolor enim sunt occaecat Lorem.'}
                        </p>
                    </div>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <ButtonImageWithLabel
                            id={props.idTop}
                            label={props.labelTop}
                            image={props.imageLabel}
                            debug={props.debug}
                            textAlign="center" //center
                            padding={0} //5
                            listener={props.listenerTop}
                        />
                    </div>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <ButtonImageWithLabel
                            id={props.idBottom}
                            label={props.labelBottom}
                            image={props.imageLabel}
                            debug={props.debug}
                            textAlign="center" //center
                            padding={0} //5
                            listener={props.listenerBottom}
                        />
                    </div>
                    {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: props.verticalAlign || "center", height: "80%" }}>
                        {props.children}
                        <div className={props.debug ? "testBox" : ""} style={{
                            flex: "1",
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexDirection: position,
                            width: '85%',
                            margin: '0 auto'
                        }}>
                           
                        </div>
                    </div> */}
                </div>
            </ImagedPanel>
        </div>
    )
}