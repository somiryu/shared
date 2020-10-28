// padding = 'padTop padRight padBottom padLeft' || "12px 18px 10px 12px" 
// percentage = number(1,100) || default(100)
// borderRadius = 0 default(5px)
// barColor = default(#327B79)
// backgroundColor = default(#fff)
// styleContainer = {}

import React from 'react'
import ProgressBar from './ProgressBar'
import Flex from '../Containers/Flex'
export default function ProgressBarWhithImage(props) {
    return (
        <Flex>
            <div style={{position:"relative",height:"100%",left:props.percentage+"%",zIndex:"2"}}>
                <img alt=""
                    src={props.imageRelative ? props.imageRelative : ''}
                >
                </img>
            </div>
            <ProgressBar {...props} ></ProgressBar> 
        </Flex>
    )
}
