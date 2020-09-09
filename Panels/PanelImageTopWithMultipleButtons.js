//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//imageTop, positionTopImage(-10%), heightImage(-20%) (FROM PANELWITHIMAGETOP)
//buttons = [{images: {on:'', off:''}, id, stylesNumber={on:'', off:''}, state:'on', text:''}]
//directionButtons = horizontal | vertical
import React from 'react'
import PanelWithImageTop from './PanelWithImageTop'
import MultipleButtons from '../Buttons/MultipleButtons';

export default function PanelImageTopWithMultipleButtons(props) {
    let direction = props.direction === 'vertical' ? 'column' : 'row';
    return (
        <PanelWithImageTop
            {...props}
        >
            <div className={props.debug ? 'testBox' : ''} style={{display:"flex", flexDirection: direction, justifyContent:'center', alignItems:'center'}}>
                <div style={{width:'10%'}}>
                    <MultipleButtons
                        {...props}
                        direction={props.directionButtons}
                    />
                </div>
            </div>
        </PanelWithImageTop>
    )
}
