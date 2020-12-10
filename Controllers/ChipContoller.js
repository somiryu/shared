import React, { useState, useEffect } from 'react'
import ButtonMultiStateWithText from '../Buttons/ButtonMultiStateWithText';
function ChipController(props) {
    const [estado, setEstado] = useState({
        perfil: 'on',
        regional: 'off',
        cofradia: 'off'
    })
    useEffect(() => {
        if (props.statesChips) setEstado(props.statesChips)
    }, [props.statesChips])
    console.log('ESTADO ===>,', estado)
    console.log(estado)
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "2%", ...props.chipControllerStyle }}>
            {props.chips.map(e =>
                <ButtonMultiStateWithText
                    id={`btn${e.id}`}
                    state={estado[e.id]}
                    scale={1.2} //1.1
                    images={{ off: props.imageChipDeactivate, on: props.imageChip }}
                    listeners={{
                        off: () => { e.listener()  },
                        on: () => {  },
                    }}
                    stylesText={{ on: { fontFamily: 'Squada One, serif', color: 'var(--yellow-ligth)', marginBottom: '8.5%' }, off: { fontFamily: 'Squada One, serif', color: 'black', marginBottom: '5%' } }}
                    styles={e.style}
                    text={e.label}
                />
            )}
        </div>
    )
}

export default ChipController;