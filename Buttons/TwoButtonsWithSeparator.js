
//separator = image
//currencyLeft = {id, quantity, duration(2000), image, fontSize(1.1em), fontFamily(inherit), childStyle, styleX, displayX, imageWidth, position = default(right) || center }
//currencyRight = {id, quantity, duration(2000), image, fontSize(1.1em), fontFamily(inherit), childStyle, styleX, displayX, imageWidth, position = default(right) || center }
import React from 'react'
import CurrencyHorizontal from '../Indicators/CurrencyHorizontal'

export default function TwoButtonsWithSeparator(props) {
    return (
        <div className={props.debug ? 'testBox' : ''} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div className={props.debug ? 'testBox' : ''} style={{ width: '40%' }}>
                <CurrencyHorizontal
                    {...props.currencyLeft}
                >
                </CurrencyHorizontal>
            </div>
            <div className={props.debug ? 'testBox' : ''} style={{ width: '20%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={props.separator} alt={'Separator'} style={{ width: '80%' }}></img>
            </div>
            <div className={props.debug ? 'testBox' : ''} style={{ width: '40%' }}>
                <CurrencyHorizontal
                    {...props.currencyRight}
                >
                </CurrencyHorizontal>
            </div>
        </div>
    )
}
