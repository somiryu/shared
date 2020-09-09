//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//Requires Animations/AnimatedScore
//id, quantity, duration(2000), imageCurrency, fontSize(1.1em), fontFamily(inherit), childStyle, styleX, displayX
import React from 'react'
import ImagedPanel from './ImagedPanel'
import CurrencyHorizontal from '../Indicators/CurrencyHorizontal'
export default function PanelWithCurrencyHorizontal(props) {
    return (
        <div>
            <ImagedPanel {...props}>
                <div className={props.debug ? 'testBox': ''} style={{ display: 'flex', height: '99%', width: '99%', flexDirection: 'column'}}>
                    <div className={props.debug ? 'testBox': ''}  style={{ width: '100%', height:'100%',display: 'flex', flexDirection: 'column', justifyContent: 'space-EVENLY', alignItems: 'center' }}>
                        {props.title}
                        <CurrencyHorizontal
                            {...props}
                            id={props.id+"_cur"}
                            image={props.imageCurrency}
                        >
                        </CurrencyHorizontal>
                    </div>
                </div>
            </ImagedPanel>
        </div>
    )
}
