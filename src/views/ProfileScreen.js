import React, {useState} from 'react'
import circ20 from "../shared/ExampleImages/Circ-20.png"
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
import inpapiro from "../images/Iconos/inpapiro@2x.png"
import SedesTable from "./layout/SedesTable"
import CofradiaTable from "./layout/CofradiaTable"

function ProfileScreen(props) {
    const [regional, setRegional] = useState(false)
    const [cofradia, setCofradia] = useState(false)
    const [perfil, setPerfil] = useState(true)

    const listenerRegional = () =>{
        if(regional){
            setRegional(false)
            setCofradia(false)
            setPerfil(true)
        }else{
            setRegional(true)
            setCofradia(false)
            setPerfil(false)
        }
    }
    const listenerCofradia = () =>{
        if(cofradia){
            setRegional(false)
            setCofradia(false)
            setPerfil(true)
        }else{
            setRegional(false)
            setCofradia(true)
            setPerfil(false)
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", position: "relative", top: "10%", marginTop: "1%", alignItems: "center", width:'100%' }}>
            <Flex style={{ width: '70%' }}>
                <ChipController
                    imageChip={button}
                    imageChipDeactivate={buttonDeactivate}
                    chips={[{ id: "Perfil",  label: <label className="label1" id="Perfil" style={{zIndex: "999"}}>Perfil</label> }, { id: "Regional",listener:listenerRegional,label: <label className="label1" id="Regional" style={{zIndex: "999"}}>Regional</label> }, { id: "Cofradia",listener:listenerCofradia,label: <label className="label1" id={"Cofradia"} style={{zIndex: "999"}}>Cofradia</label> }]}
                    styleChips={{ fontFamily: 'Source Serif Pro' }}
                    styleActivate={{ color: "#EAAB1C" }}
                    chipControllerStyle={{ width: '100%' }}
                >
                </ChipController>
            </Flex>
            <Flex id="contprofile" direction="column">
                {perfil &&
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
                            id="infoprofile"
                        >   
                            <MaskedAvatar
                                id="colaborador1"
                                avatar={CaraInnos}
                                containerImage={contaavatar}
                                padding={12}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={100}
                            />
                            <Flex  direction="column" align="center">
                                <h2 className="sourceSerif" >Javier Velazques</h2>
                                <CurrencyHorizontal
                                    className="sourceSerif"
                                    quantity={200}
                                    image={circ20}
                                    // displayX={true}
                                    styleBox={{fontSize:"20px"}}
                                    id="counterbar1"
                                    justify="end"
                                ></CurrencyHorizontal>
                            </Flex>
                        </Flex>
                        <Flex 
                            id="contOptions"
                            direction="column"
                            align="center"
                            justify="space-around"
                        >
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%"}}>
                                <Flex style={{width:"30%"}}>
                                    <MaskedAvatar
                                        id="colaborador1"
                                        avatar={sedeprincipalbogota}
                                        styleImage={{borderRadius:"50%"}}
                                        containerImage={btnsedesmarcomapa}
                                        padding={12}
                                        listener={() => console.log('Clicked MarkedAvatar')}
                                        maskBorder={100}
                                    />
                                </Flex>
                                <h3 className="sourceSerif">Lorem Ipsum</h3>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%" }}>
                                <Flex style={{width:"30%"}}>
                                    <MaskedAvatar
                                            id="inmas"
                                            avatar={inmas}
                                            containerImage={btnsedesmarcomapa}
                                            padding={12}
                                            listener={() => console.log('Clicked MarkedAvatar')}
                                            maskBorder={100}
                                    />
                                </Flex>
                                <h3 className="sourceSerif">Lorem Ipsum</h3>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "100%", height: "33%" }}>
                                <Flex style={{width:"30%"}}>
                                    <MaskedAvatar
                                            id="papiro"
                                            avatar={inpapiro}
                                            containerImage={btnsedesmarcomapa}
                                            padding={12}
                                            listener={() => props.listener(4)}
                                            maskBorder={100}
                                    />
                                </Flex>
                                <h3 className="sourceSerif">Lorem Ipsum</h3>
                            </Flex>
                        </Flex>
                    </Flex>
                </ImagePanel>}
                {regional &&
                <SedesTable
                    sedes={[{name:"Bogota",points:100,image:sedeprincipalbogota}]}
                ></SedesTable>
                }
                {cofradia &&
                <CofradiaTable
                    cofradias={[{sede:"Bogota",points:100,image:sedeprincipalbogota,name:"Lorem ipsum"}]}>
                </CofradiaTable>
                }
            </Flex>

        </div>
    )
}


export default ProfileScreen;