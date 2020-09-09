// id, containerImage, padding, maskBorder, maskBorder, avatar, children, textAlign, imageLabel, debug, paddingLabel, label  (FROM MASKEDAVATARWITHTITLE)
// top:% bottom:% left:% right:%
// idBtn
// width = Size Button (20%)
import React from 'react'
import MaskedAvatarWithTitle from './MaskedAvatarWithTitle'
import ButtonMultiState from '../Buttons/ButtonMultiState'

export default function MaskedAvatarTitleWithButtonMultiState(props) {
    let width = props.width || '25%';
    let position = {
        top: props.top || '120%',
        bottom: props.bottom || '0',
        left: props.left || '80%',
        right: props.right || '0'
    }
    return (
        <div>
            <MaskedAvatarWithTitle
                {...props}
            >
                <div style={{ position: 'absolute', top:position.top, left: position.left, right: position.right, bottom: position.bottom, width:width }}>
                    <ButtonMultiState
                        {...props}
                        id={props.idBtn}
                    />
                </div>
            </MaskedAvatarWithTitle>
        </div>
    )
}
