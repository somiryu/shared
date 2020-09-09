// id, containerImage, padding, maskBorder, maskBorder, avatar, children, listener (FROM MASKEDAVATAR)
// textAlign, imageLabel, debug, paddingLabel, label (FROM IMAGEDLABEL)
// labelWidth, labelStyle
// topLabel: ej: "80%"
// leftLabel: ej: "0%"
// idImageLabel
import React from "react";
import MaskedAvatar from "./MaskedAvatar";
import ImageLabel from "../Labels/ImagedLabel";

export default (props) => {
    return (
        <div className={props.debug ? 'MaskedAvatarWithTitle testBox': 'MaskedAvatarWithTitle'} style={{ maxWidth: "100%",display:"inline-block"}}>
            <MaskedAvatar
                {...props}
            >
                <div style={{position: 'absolute', top: props.topLabel || '80%', left: props.leftLabel || '0%', width:props.labelWidth || '100%', ...props.labelStyle }}>
                    <ImageLabel
                        {...props}
                        image={props.imageLabel}
                        padding={props.paddingLabel}
                        label={props.label}
                        id={props.idImageLabel}
                    >
                    </ImageLabel>
                </div>
                {props.children}
            </MaskedAvatar>
        </div>
    )
}