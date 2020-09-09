//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//imageTop, positionTopImage(-10%), heightImage(-20%) (FROM PANELWITHIMAGETOP)
//id, state, images, listeners, styles, children (FROM BUTTONMULTISTATE)
//stylesNumber = {key: {}, key2: {}}
//direction = vertical || horizontal (horizontal)
import React from 'react'
import PanelWithImageTop from './PanelWithImageTop';
import ButtonMultiStateWithNumber from '../Buttons/ButtonMultiStateWithNumber'

export default function PanelImageTopWithButtonsMultiState(props) {
    let buttons = props.buttons;
    let direction = props.direction === 'vertical' ? 'column' : 'row';
    return (
        <PanelWithImageTop
            {...props}
        >
            <div className={props.debug ? 'testBox' : ''} style={{display:"flex", flexDirection: direction, justifyContent:'center', alignItems:'center'}}>
                {
                    buttons.map(
                        (button) => (
                            <ButtonMultiStateWithNumber
                                {...props}
                            />
                        )
                    )
                }
            </div>
        </PanelWithImageTop>
    )
}
