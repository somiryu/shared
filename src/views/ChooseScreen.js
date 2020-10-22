import React from 'react'
import logosantoto from "../images/general/logosantoto.png";
import Flex from '../shared/Containers/Flex';
import tubo from "../images/general/lineatubocontenedor.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ButtonImage from "../images/buttons/btnprincipal.png"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import contaavatar from "../images/general/contaavatar.png"
import masculino from '../images/Graficos/estudiante.png'
import femenino from '../images/Graficos/secretaria.png'


function ChooseScreen(props) {
    return (
        <Flex id="chooseScreen" align='center' justify='center' style={{height: "100vh"}}>
            <Flex align='center' justify='center' direction='column' style={{margin: "auto", maxWidth: "800px",...props.styles}}>
                <Flex style={{padding:"10px"}}>
                    <img alt={"logo"} src={logosantoto} style={{width:"100%",padding:"5px"}}></img>
                </Flex >
                <TuboContainer>
                    <Flex align='center' justify='center' direction='column'>
                        <Flex>
                        <ImagePanel
                        // style={screen<800 && {marginTop:"15%"}}
                        image={ButtonImage}
                        padding="0%"
                        >
                            <Flex align="center">
                                <h2>ELIGE UN AVENTURERO</h2>
                            </Flex>
                        </ImagePanel>
                        </Flex>
                        <Flex>
                            <MaskedAvatar
                                id="colaborador1"
                                avatar={masculino}
                                containerImage={contaavatar}
                                padding={11}
                                listener={() => props.listener(3)}
                                maskBorder={100}
                            />
                            <MaskedAvatar
                                id="colaborador1"
                                avatar={femenino}
                                containerImage={contaavatar}
                                padding={11}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={100}
                            />
                        </Flex>
                    </Flex>
                </TuboContainer>
            </Flex> 
        </Flex>
    )
}

function TuboContainer(props) {
    return (
        <Flex direction="column" justify={"center"} align="center" style={{ width: '90%' }}>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
            <Flex direction='column' justify='center' align='center' style={{ textAlign: "center", background: "linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)" }}>
                {props.children}
            </Flex>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo2" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
        </Flex>
    )
}

export default ChooseScreen;