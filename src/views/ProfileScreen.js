import React, {useState, useEffect} from 'react'
import circ20 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import Absolute from "../shared/Containers/Absolute"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ChipController from "../shared/Controllers/ChipContoller"
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
import estudiante from '../images/Graficos/estudiante.png'
import sedeBogota from "../images/Graficos/sedeprincipalbogota.png"
import sedeMedellin from "../images/Graficos/sedemedellin.png"
import sedeBucaramanga from "../images/Graficos/sedebucaramanga.png"
import sedeVillavicencio from "../images/Graficos/sedeprincipalbogota.png"
import sedeTunja from "../images/Graficos/sedeprincipalbogota.png"
import sedeDistancia from "../images/Graficos/sededistancia.png"
import {Players, Teams} from  '../shared/Utils/engine'

const imagesSedes={
    "Bogota":sedeBogota,
    'Bucaramanga':sedeBucaramanga,
    'Tunja':sedeTunja,
    'Medellin':sedeMedellin,
    'Villavicencio':sedeVillavicencio,
    'Distancia':sedeDistancia,
}

function ProfileScreen(props) {
    const [regional, setRegional] = useState(false)
    const [cofradia, setCofradia] = useState(false)
    const [perfil, setPerfil] = useState(true)
    const [lideres, setLideres] = useState()
    const [sedesApi, setSedesApi] = useState([props.player])

    useEffect(() => {
        // setLideres(Players.getAll(()=>{console.log("=========> JUGADORES")}))
    }, [])

    useEffect(() => {
        Teams.getAll((r)=>{
            let sedesAux =[]
            r.map((e)=>{
                if(props.sedes){
                    props.sedes.map((e2)=>{
                        if(e.basic.name === e2.name){
                            sedesAux.push(e)
                        }
                    })
                } 
            })
            setSedesApi(sedesAux)
        })
    }, [])

    console.log("===========PERFIL============",props.player)
    const listenerRegional = () =>{
        setRegional(true)
        setCofradia(false)
        setPerfil(false)
    }
    const listenerCofradia = () =>{
        setRegional(false)
        setCofradia(true)
        setPerfil(false)
    }

    const listenerPerfil = () =>{
        setRegional(false)
        setCofradia(false)
        setPerfil(true)
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", position: "relative", top: "10%", marginTop: "1%", alignItems: "center", width:'100%' }}>
            <Flex style={{ width: '70%' }}>
                <ChipController
                    imageChip={button}
                    imageChipDeactivate={buttonDeactivate}
                    chips={[{ id: "Perfil",listener:listenerPerfil,label: <label className="label-bg" id="Perfil" style={{zIndex: "999"}}>Perfil</label> }, { id: "Regional",listener:listenerRegional,label: <label className="label-bg" id="Regional" style={{zIndex: "999"}}>Regional</label> }, { id: "Cofradia",listener:listenerCofradia,label: <label className="label-bg" id={"Cofradia"} style={{zIndex: "999"}}>Cofradia</label> }]}
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
                        id="marginInfo"
                        direction="column"
                        align="center"
                    >
                        <Flex
                            id="infoprofile"
                            style={{ height: "20%", width:"70%", padding: "0% 0% 5% 0%"}}
                        >   
                            <Flex align="center" style={{width:"100%",height:"100%"}}>   
                                <MaskedAvatar
                                    id="colaborador1"
                                    avatar={estudiante}
                                    containerImage={contaavatar}
                                    padding={11}
                                    listener={() => console.log('Clicked MarkedAvatar')}
                                    maskBorder={100}
                                />
                            </Flex>
                            <Flex  direction="column" align="center" style={{width:"100%",height:"100%"}}>
                                <Flex style={{width:"100%",height:"70%",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}} justify={"flex-start"} align="center">
                                    <h2 className="sourceSerif" >{props.player.basic.name}</h2>
                                </Flex>
                                <Flex style={{width:"100%",height:"30%"}} justify={"flex-start"}>
                                    <CurrencyHorizontal
                                        className="sourceSerif"
                                        quantity={props.player.agent.levels.xp.quantity}
                                        image={circ20}
                                        // displayX={true}
                                        styleBox={{fontSize:"20px"}}
                                        id="counterbar1"
                                        justify="end"
                                    ></CurrencyHorizontal>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex 
                            id="contOptions"
                            direction="column"
                            align="center"
                            justify="space-around"
                            style={{ height: "75%" }}
                        >
                            <Flex align="center" justify="space-evenly" style={{  width: "80%", height: "30%"}}>
                                <Flex style={{width:"30%",height: "80%",position:"relative"}}>
                                    <Absolute  style={{
                                        backgroundColor: 'black',
                                        width: '70%',
                                        height: '88%',
                                        margin: '7% auto 34%',
                                        borderRadius: '50%',
                                        }}>

                                    </Absolute>
                                    <MaskedAvatar
                                        id="colaborador1"
                                        avatar={sedeprincipalbogota}
                                        styleImage={{width:"100%",height: "100%"}}
                                        containerImage={btnsedesmarcomapa}
                                        padding={"15px 6px"}
                                        listener={() => listenerRegional()}
                                        maskBorder={100}
                                    />
                                </Flex>
                                <Flex style={{width:"70%"}}>
                                    <h3 className="sourceSerif">Sede a la que pertenece</h3>
                                </Flex>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "80%", height: "30%" }}>
                                <Flex style={{width:"30%",height: "90%",position:"relative"}}>
                                    <Absolute  style={{
                                        backgroundColor: '#115b31',
                                        width: '70%',
                                        height: '80%',
                                        margin: '7% auto 34%',
                                        borderRadius: '50%',
                                        }}>

                                    </Absolute>
                                    <MaskedAvatar
                                            id="inmas"
                                            avatar={inmas}
                                            styleImage={{width:"100%",height: "100%"}}
                                            containerImage={btnsedesmarcomapa}
                                            padding={12}
                                            listener={() => listenerCofradia()}
                                            maskBorder={100}
                                    />
                                </Flex>
                                <Flex style={{width:"70%"}}>
                                    <h3 className="sourceSerif">Cofradia a la que pertenece</h3>
                                </Flex>
                            </Flex>
                            <Flex align="center" justify="space-evenly" style={{  width: "80%", height: "30%" }}>
                                <Flex style={{width:"30%",height: "auto", position:"relative"}}>
                                    <Absolute  style={{
                                        backgroundColor: 'black',
                                        width: '70%',
                                        height: '88%',
                                        margin: '7% auto 34%',
                                        borderRadius: '50%',
                                        }}>

                                    </Absolute>
                                    <MaskedAvatar
                                            id="papiro"
                                            avatar={inpapiro}
                                            styleImage={{width:"100%",height: "100%"}}
                                            containerImage={btnsedesmarcomapa}
                                            padding={12}
                                            listener={() => props.listener(5)}
                                            maskBorder={100}
                                    />
                                </Flex>
                                <Flex style={{width:"70%"}}>
                                    <h3 className="sourceSerif">Historial de informacion encontrada</h3>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </ImagePanel>}
                {regional &&
                <React.Fragment>
                    {sedesApi.map((e)=>
                        <SedesTable
                            sedes={[{name:e.basic.name,points:e.agent.currencies.vp.quantity,image:imagesSedes[e.basic.name]}]}
                            leaders = {lideres}
                        ></SedesTable>
                    )
                    }
                </React.Fragment>
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