import React from 'react'
import logosantoto from "../images/general/logosantoto.png";
import Flex from '../shared/Containers/Flex';
import tubo from "../images/general/lineatubocontenedor.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ButtonImage from "../images/buttons/btnprincipal.png"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import contaavatar from "../images/general/contaavatar@2x.png"
import masculino from '../images/Graficos/estudiante.png'
import femenino from '../images/Graficos/secretaria.png'


function ChooseScreen(props) {
    return (
        <Flex id="chooseScreen" align='center' justify='center' style={{ height: "100vh" }}>
            <Flex align='center' justify='center' direction='column' style={{ margin: "auto", maxWidth: "800px", ...props.styles }}>
                <Flex style={{ padding: "10px" }}>
                    <img alt={"logo"} src={logosantoto} style={{ width: "100%", padding: "5px" }}></img>
                </Flex >
                <TuboContainer>
                    <Flex style={{ width: '100%' }} align='center' justify='center' direction='column'>
                        <Flex style={{ width: '100%' }}>
                            <ImagePanel
                                // style={screen<800 && {marginTop:"15%"}}
                                image={ButtonImage}
                                padding="2% 0% 8%"
                                style={{ width: '50%' }}
                            >
                                <Flex align="center" justify='center' style={{ height: '100%', width: '60%', margin: '0 auto' }}>
                                    <p style={{ color: 'var(--dark-yellow)' }}>ELIGE UN AVENTURERO</p>
                                </Flex>
                            </ImagePanel>
                        </Flex>
                        <Flex style={{ width: '80%' }}>
                            <Flex style={{width:'40%', margin:'0 auto'}}>
                                <MaskedAvatar
                                    id="colaborador1"
                                    avatar={masculino}
                                    containerImage={contaavatar}
                                    padding={11}
                                    listener={() => props.listener(3)}
                                    maskBorder={100}
                                    style={{ width: '100%' }}
                                />
                            </Flex>
                            <Flex  style={{width:'40%', margin:'0 auto'}}>
                                <MaskedAvatar
                                    id="colaborador1"
                                    avatar={femenino}
                                    containerImage={contaavatar}
                                    padding={11}
                                    listener={() => console.log('Clicked MarkedAvatar')}
                                    style={{ width: '100%' }}
                                    maskBorder={100}
                                />
                            </Flex>

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
            <Flex direction='column' justify='center' align='center' style={{ width: '100%', height: '40vh', textAlign: "center", background: "linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)" }}>
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