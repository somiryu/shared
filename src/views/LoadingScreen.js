import React, {useState,useEffect} from 'react'
import Flex from "../shared/Containers/Flex"
import tuerca from "../images/Iconos/tuercaloading.png"
import tubo from "../images/general/lineatubocontenedor.png"
import loading from "../images/Graficos/loading@2x.png"
let flagFun = 'add'
function LoadinScreen(props) {
    
    return (
        <Flex id="LoadingScreen" align="center" direction="column" style={{ marginTop: "0%", marginLeft: "5%", marginRight: "5%", height: '80vh' }}>
           <Tubo></Tubo>
        </Flex>
    )
}

function Tubo(props) {
    const [percentage, setPercentage] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            if (flagFun === 'add') {
                setPercentage(percentage + 1)
                if (percentage === 80) {
                    flagFun = 'rest'
                }
            } else if (flagFun === 'rest') {
                setPercentage(percentage - 1)
                if (percentage === 0) {
                    flagFun = 'add'
                }
            }
            if(props.listener){
                props.listener(percentage)
            }
        }, 10);
    }, [percentage])
    return (
        <Flex id="FlexLoading" direction="column" justify={"center"} align="center" style={{ width: '80%' }}>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
            <Flex direction='column' justify='center' align='center' style={{
                width: "100%",
                padding: "2%", textAlign: "center", 
                background: "radial-gradient(ellipse at center, rgba(44,44,68,0.6) 0%, rgba(28,19,35,0.6) 100%)",
            }}>
                <Flex style={{width: "100%"}}>
                    <img alt="loading" src={loading} style={{ width: '50%'}}>
                    </img>
                </Flex>
                <Flex style={{width:"100%"}} justify="start">
                    <div style={{position:"relative",height:"100%",left:percentage+"%",zIndex:"2"}}>
                        <img alt="tuerca1"src={tuerca}>
                        </img>
                    </div>
                </Flex>
            </Flex>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo2" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
        </Flex>
    )
}

export default LoadinScreen;