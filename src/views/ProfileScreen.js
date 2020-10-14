import React, { useState } from 'react'
import ButtonMultiState from '../shared/Buttons/ButtonMultiState'
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import circ80 from "../shared/ExampleImages/Circ-20.png"
import sq80 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ChipController from "../shared/Controllers/ChipContoller"
import CaraInnos from "../shared/ExampleImages/Generic/caraInnos.png"
import buttonDeactivate from "../images/buttons/btnprincipal.png"
import button from "../images/buttons/btnprincipalactivo.png"
import contaavatar from "../images/general/contaavatar.png"
import contaperfil from "../images/general/contaperfil.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import btnsedesmarcomapa from "../images/buttons/btnsedesmarcomapa@2x.png"
import sedeprincipalbogota from "../images/Graficos/sedeprincipalbogota@2x.png"
import inmas from "../images/Iconos/inmas@2x.png"

function ProfileScreen(props) {
    const [state1, setState1] = useState("off");
    return (
        <div style={{ display: "flex", flexDirection: "column", position: "relative", top: "10%", marginTop: "1%", alignItems: "center", width:'100%' }}>
            <Flex style={{ width: '70%' }}>
                <ChipController
                    imageChip={button}
                    imageChipDeactivate={buttonDeactivate}
                    chips={[{ id: "Perfil", label: <label id="Perfil" style={{zIndex: "999"}}>Perfil</label> }, { id: "Regional", label: <label id="Regional" style={{zIndex: "999"}}>Regional</label> }, { id: "Cofradia", label: <label id={"Cofradia"} style={{zIndex: "999"}}>Cofradia</label> }]}
                    styleChips={{ fontFamily: 'Source Serif Pro' }}
                    styleActivate={{ color: "#EAAB1C" }}
                    chipControllerStyle={{ width: '100%' }}
                >
                </ChipController>
            </Flex>
            <Flex style={{width:'50%', height: "100%"}}>
                <ImagePanel
                    image={contaperfil}
                    padding={"0%"}
                    style={{ width: "100%" }}
                >
                    <Flex
                        direction="column"
                        align="center"
                        style={{ padding: "30px", height: "100%" }}
                    >
                        <Flex
                            style={{ margin: "5%", height: "10%" }}
                        >
                            <MaskedAvatar
                                id="colaborador1"
                                avatar={CaraInnos}
                                containerImage={contaavatar}
                                padding={12}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={100}
                            />
                            <Flex direction="column" align="center">
                                <h2>Javier Velazques</h2>
                                <CurrencyHorizontal
                                    quantity={30}
                                    image={circ20}
                                    // displayX={true}
                                    id="counterbar1"
                                    justify="end"
                                ></CurrencyHorizontal>
                            </Flex>

                        </Flex>
                        <Flex direction="column"
                            style={{width:"100%",height: "90%"}}
                            align="center"
                            justify="space-around"
                        >
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%"}}>
                                <MaskedAvatar
                                    id="colaborador1"
                                    avatar={sedeprincipalbogota}
                                    containerImage={btnsedesmarcomapa}
                                    padding={12}
                                    listener={() => console.log('Clicked MarkedAvatar')}
                                    maskBorder={100}
                                />
                                <h3>Lorem Ipsum</h3>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%" }}>
                                <MaskedAvatar
                                        id="colaborador1"
                                        avatar={inmas}
                                        containerImage={btnsedesmarcomapa}
                                        padding={12}
                                        listener={() => console.log('Clicked MarkedAvatar')}
                                        maskBorder={100}
                                />
                                <h3>Lorem Ipsum</h3>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%" }}>
                                <ButtonMultiState
                                    id="btn4"
                                    state={state1}
                                    scale={1.2} //1.1
                                    images={{ off: sq80, on: circ80, nata: circ40 }}
                                    listeners={{
                                        off: () => { setState1("on") },
                                        on: () => { setState1("nata") },
                                    }}
                                    styles={{ off: { filter: "grayscale(100%)" } }}
                                >
                                </ButtonMultiState>
                                <h3>Lorem Ipsum</h3>
                            </Flex>
                        </Flex>
                    </Flex>
                </ImagePanel>
            </Flex>

        </div>
    )
}


export default ProfileScreen;