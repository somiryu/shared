// padding = 'padTop padRight padBottom padLeft' || "12px 18px 10px 12px" 
// percentage = number(1,100) || default(100)
// borderRadius = 0 default(5px)
// barColor = default(#327B79)
// backgroundColor = default(#fff)
// styleContainer = {}

import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar'
import Flex from '../Containers/Flex'
let flagFun = 'add'
export default function ProgressBarWithImage(props) {
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (flagFun === 'add') {
                setPercentage(percentage + 1)
                if (percentage === 100) {
                    flagFun = 'rest'
                }
            } else if (flagFun === 'rest') {
                setPercentage(percentage - 1)
                if (percentage === 0) {
                    flagFun = 'add'
                }
            }
        }, 10);
    }, [percentage])
    return (
        <Flex>
            <div style={{position:"relative",height:"100%",left:percentage+"%",zIndex:"2"}}>
                <img alt=""
                    src={props.imageRelative ? props.imageRelative : ''}
                >
                </img>
            </div>
            <ProgressBar {...props} percentage={percentage}></ProgressBar> 
        </Flex>
    )
}

