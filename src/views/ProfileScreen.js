import React, {useState} from 'react'
import ButtonMultiState from  '../shared/Buttons/ButtonMultiState'
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import circ80 from "../shared/ExampleImages/Circ-20.png"
import sq80 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ChipController from "../shared/Controllers/ChipContoller"
import CaraInnos from "../shared/ExampleImages/Generic/caraInnos.png"
import button from "../images/buttons/btnprincipal.png"
import buttonDeactivate from "../images/buttons/btnprincipalactivo.png"
import contaavatar from "../images/general/contaavatar.png"
import contaperfil from "../images/general/contaperfil.png"
import ImagePanel from "../shared/Panels/ImagedPanel"

function ProfileScreen(props) {
    const [state1, setState1] = useState("off");
    return (
        <div style={{display:"flex", flexDirection:"column", position:"relative", top:"10%", marginTop:"1%",alignItems:"center"}}>
            <ChipController
                imageChip={button}
                imageChipDeactivate ={buttonDeactivate}
                chips={[{id:"Perfil",label:"Perfil"},{id:"Regional",label:"Regional"},{id:"Cofradia",label:"Cofradia"}]}
            ></ChipController>
            <ImagePanel
                image={contaperfil}
                padding={"0%"}
                style={{width:"400px"}}
            >
                <Flex
                    direction="column"
                    align="center"
                >
                    <Flex 
                        style={{margin:"30px",height:""}}  
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
                    <Flex align="center" justify="space-evenly">
                        <ButtonMultiState
                            id="btn3"
                            state={state1}
                            scale={1.2} //1.1
                            images={{ off:sq80, on:circ80, nata:circ40 }}
                            listeners={{
                                off: () => { setState1("on") },
                                on: () => { setState1("nata") },
                            }}
                            styles={{ off: { filter: "grayscale(100%)" } }}
                        >
                        </ButtonMultiState>
                        <h3>Lorem Ipsum</h3>
                    </Flex>
                    <Flex align="center" justify="space-evenly">
                        <ButtonMultiState
                            id="btn4"
                            state={state1}
                            scale={1.2} //1.1
                            images={{ off:sq80, on:circ80, nata:circ40 }}
                            listeners={{
                                off: () => { setState1("on") },
                                on: () => { setState1("nata") },
                            }}
                            styles={{ off: { filter: "grayscale(100%)" } }}
                        >
                        </ButtonMultiState>
                        <h3>Lorem Ipsum</h3>
                    </Flex>
                    <Flex align="center" justify="space-evenly">
                        <ButtonMultiState
                            id="btn4"
                            state={state1}
                            scale={1.2} //1.1
                            images={{ off:sq80, on:circ80, nata:circ40 }}
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
            </ImagePanel>
        </div>
    )
}


export default ProfileScreen;