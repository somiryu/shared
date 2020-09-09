//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//title, subtitle, styleTitle, styleSubtitle, showSubtitle (FROM PANELCLOSE WITH TITLE)
//options = [ {id: id, descripcion: descripcion, images : { uncheck: '', check: '}} ]
import React from "react";
import PanelCloseTitleAndSubtitle from "./PanelCloseTitleAndSubtitle"
import Checkbox from "../Checkbox";

export default (props) => {
    return (
        <div id={props.id + "_panel"} className="PanelWithOptions" >
            <PanelCloseTitleAndSubtitle
                {...props}
            >
                <div className={props.debug ? 'testBox' : ''}
                    style={{ width: '80%', margin: '0 auto' }}>
                    <div className={props.debug ? 'testBox' : ''}
                        style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: '10px', height: '80%', margin: '0 auto', overflowY: 'auto', }}>
                        {
                            props.options.map((option) => {
                                return (
                                    <div key={option.id}
                                        className={props.debug ? 'testBox' : ''}
                                        style={{ color: "var(--wine)", height: `calc( 100% / ${props.options.length})` }}>
                                        <Checkbox
                                            images={option.images}
                                            paragraph={option.description}
                                            id={option.id}
                                            state="uncheck"
                                            listener={() => props.listener ? props.listener() : console.log("No listener")}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </PanelCloseTitleAndSubtitle>
        </div>
    )
}