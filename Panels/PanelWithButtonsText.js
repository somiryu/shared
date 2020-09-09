//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//buttons = {id: 'btn1', }
import React, {useState, useEffect} from 'react'
import ImagedPanel from "./ImagedPanel"
import ButtonWithText from '../Buttons/ButtonWithText';
import { shuffle } from '../Utils/libs';

export default function PanelWithButtonsText(props) {
    const [buttons, setbuttons] = useState([])
    useEffect(() => {
        props.shuffle && setbuttons(shuffle(props.buttons))
    }, [props.shuffle, props.buttons])
    return (
        <div className="PanelWithButtonsText">
            <ImagedPanel {...props}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'100%', width:'100%'}}>
                    {
                        buttons.map(
                            button => (
                                <ButtonWithText
                                    key={button.id}
                                    id={button.id}
                                    image={button.image}
                                    text={button.text}
                                    positionText={{ }}
                                    listener={button.listener}
                                >
                                </ButtonWithText>
                            )
                        )
                    }
                </div>
            </ImagedPanel>
        </div>
    )
}
