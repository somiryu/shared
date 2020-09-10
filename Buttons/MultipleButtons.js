//id, state, images, styles, children (FROM BUTTONMULTISTATE)
//direction: "vertical" (def: row)
//buttons = [{listerners={state:func} images: {state:''}, id, stylesNumber={sate:''}, state:'state', text:''}]
//shuffle => shuffles button order
//alignVertical = "space-evenly"

import React from 'react'
import ButtonMultiStateWithText from './ButtonMultiStateWithText';
import {shuffle} from "../Utils/libs"

export default function MultipleButtons(props) {
    let buttons = props.buttons || [];
    let direction= props.direction === 'vertical' ? 'column' : 'row'; 
    if(props.shuffle){buttons = shuffle(buttons)}
    return (
        <div className={props.debug ? 'MultipleButtons testBox' : 'MultipleButtons'} style={{display:'flex', flexDirection:direction, justifyContent:props.alignVertical || 'space-evenly', alignItems:'center', height:'100%' }}>
            {
                buttons.map(
                    (button) => (
                        <ButtonMultiStateWithText
                            className={button.className}
                            key={button.id}    
                            images={button.images}
                            id={button.id}
                            listeners={button.listeners}
                            stylesText={button.stylesText}
                            state={button.state}
                            number={button.text}
                            styles={{}}
                            idButton={props.idButton}
                        >
                        </ButtonMultiStateWithText>
                    )
                )
            }
        </div>
    )
}
