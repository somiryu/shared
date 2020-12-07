import React, {useEffect} from 'react'
import logosantoto from "../images/general/logosantoto.png";
import Flex from '../shared/Containers/Flex';
import tubo from "../images/general/lineatubocontenedor.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import titulosconta from "../images/general/titulosconta.png"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import contaavatar from "../images/general/contaavatar@2x.png"
import masculino from '../images/Graficos/personajehombre.png'
import femenino from '../images/Graficos/personajemujer.png'
import {Agents} from '../shared/Utils/engine'


function ChooseScreen(props) {
    console.log("=======>", props.player);
    var hombreObj = {};
    var mujerObj = {}
    if(props.player.agent.avatars.not_selected[1]){
        let hombre = props.player.agent.avatars.not_selected[1].agent_avatar_id;
        hombreObj[hombre] = "select";
        let mujer = props.player.agent.avatars.not_selected[0].agent_avatar_id;
        mujerObj[mujer] = "select";
    }else{
        props.listener(3)
    }
    const selectAvatarM = (e) => {
        Agents.update(props.player,{avatars:hombreObj},(e)=>{console.log("Avatr cambiado",e);props.listener(3,e)})
    }
    const selectAvatarF = (e) => {
        Agents.update(props.player,{avatars:mujerObj},(e)=>{console.log("Avatr cambiado",e);props.listener(3,e)})
    }

    // useEffect(() => {
    //     if (props.player) {
    //         Players.get(ID_IN_APP, (response) => {
    //             props.listenerPlayer(1, response);
    //         })
    //     }
    // }, [])

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
                                image={titulosconta}
                                padding="2% 0% 8%"
                                style={{ width: '50%' }}
                            >
                                <Flex align="center" justify='center' style={{ height: '100%', width: '60%', margin: '0 auto' }}>
                                    <p style={{ color: 'var(--yellow-ligth)' }}>ELIGE UN AVENTURERO</p>
                                </Flex>
                            </ImagePanel>
                        </Flex>
                        <Flex style={{ width: '80%' }}>
                            <Flex style={{width:'40%', margin:'0 auto'}}>
                                <MaskedAvatar
                                    id="1"
                                    avatar={masculino}
                                    containerImage={contaavatar}
                                    padding={"20px 25px"}
                                    listener={selectAvatarM}
                                    maskBorder={100}
                                    style={{ width: '100%' }}
                                />
                            </Flex>
                            <Flex  style={{width:'40%', margin:'0 auto'}}>
                                <MaskedAvatar
                                    id="2"
                                    avatar={femenino}
                                    containerImage={contaavatar}
                                    padding={"20px 25px"}
                                    listener={selectAvatarF}
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