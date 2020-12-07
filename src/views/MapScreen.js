import React, { useState, useEffect } from 'react'
import Mapa from "../images/general/mapa.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import Absolute from "../shared/Containers/Absolute"
import TableGame from "./layout/TableGame"
import logomapa from "../images/logos/logoaniosmapa.png"
import logoacreditacion from "../images/logos/logoacreditacionmapa.png"
import portalBogota from "../images/Iconos/inportalbgtamapa.png"
import portalMedellin from "../images/Iconos/inportalmedellinmapa.png"
import portalTunja from "../images/Iconos/inportaltunjamapa.png"
import portalVillavicencio from "../images/Iconos/inportalvillamapa.png"
import portalBucaramanga from "../images/Iconos/inportalvillamapa.png"
import escudoBogota from "../images/Iconos/inescudobgta.png"
import escudoBucaramanga from "../images/Iconos/inescudobuca.png"
import escudoMedellin from "../images/Iconos/inescudomedellin.png"
import escudoTunja from "../images/Iconos/inescudotunja.png"
import escudoVillavicencio from "../images/Iconos/inescudovilla.png"
import contatiempoactivo from "../images/buttons/contatiempoactivo.png"
import sedeBogota from "../images/Graficos/sedeprincipalbogota.png"
import sedeMedellin from "../images/Graficos/sedemedellin.png"
import sedeBucaramanga from "../images/Graficos/sedebucaramanga.png"
import sedeVillavicencio from "../images/Graficos/sedeprincipalbogota.png"
import sedeTunja from "../images/Graficos/sedeprincipalbogota.png"
import sedeDistancia from "../images/Graficos/sededistancia.png"
import MaskedAvatar from '../shared/Hubs/MaskedAvatar'
import btnsedesmarcomapa from "../images/buttons/btnsedesmarcomapa.png"
import ButtonImage from "../shared/Buttons/ButtonImage";
import btnatras from "../images/buttons/btnatras.png";
import Timer from "../shared/TimerV2"
import Flex from '../shared/Containers/Flex'
import {Teams} from "../shared/Utils/engine"
//import sedes from '../models/Sedes'

const imagesSedes={
    "Bogota":sedeBogota,
    'Bucaramanga':sedeBucaramanga,
    'Tunja':sedeTunja,
    'Medellin':sedeMedellin,
    'Villavicencio':sedeVillavicencio,
    'Distancia':sedeDistancia,
}
const escudos={
    "Bogota":escudoBogota,
    'Bucaramanga':escudoBucaramanga,
    'Tunja':escudoTunja,
    'Medellin':escudoMedellin,
    'Villavicencio':escudoVillavicencio,
    'Distancia':escudoBogota,
}

const portales={
    "Bogota":portalBogota,
    'Bucaramanga':portalBucaramanga,
    'Tunja':portalTunja,
    'Medellin':portalMedellin,
    'Villavicencio':portalVillavicencio,
    'Distancia':portalBogota,
}

function MapScreen(props) {
    const [screen] = useState(window.screen.width)
    const [portalInferior, setPortalInferior] = useState(false)
    const [sedesApi, setSedesApi] = useState([])
    const [tableGame, setTableGame] = useState(null)
    

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
            if(sedesAux.length >= 1){
                setTableGame(sedesAux[0])
            }
        })
    }, [])

    const handlePortal = (e) => {
        let sede;
        if(screen < 800 && e['target']){
            let vector = e.target.id.split("_")
            sede = vector[0]
        }
        else{
            sede = e
        }
        if(sede === undefined){
            sede="Bogota"
        }
        let tableSede;
        props.changeSede(sede)
        sedesApi.map((e)=>{
            if(e.basic.name===sede){
                tableSede = e
            }
            return null
        })     
        setTableGame(tableSede)
        if (portalInferior === false) {
            setPortalInferior(true)
        }
        else {
            setPortalInferior(false)
        }
    }

    let closePortal =()=>{
        setPortalInferior(false)
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onClick={screen < 800 ? handlePortal : ""}>
                {screen > 800 &&
                    <React.Fragment>
                        <Absolute
                            id="satotomasl"
                            style={{ width: "40px", height: "40px", top: "5%", left: "83%" }}
                            children={<img alt="mapalogo" src={logomapa}></img>}
                        ></Absolute>
                        <Absolute
                            id="satotomasl2"
                            style={{ width: "40px", height: "40px", top: "5%", left: "90%" }}
                            children={<img alt="acreditacion" src={logoacreditacion}></img>}
                        ></Absolute>
                    </React.Fragment>
                }
                <ImagePanel
                    style={screen < 800 && { marginTop: "15%" }}
                    image={Mapa}
                    padding="0%"
                    children={<div style={{ width: "100%", height: "100%" }}
                    >
                        {screen < 800 &&
                            <React.Fragment>
                                <Absolute
                                    id="satotomasl"
                                    style={{ width: "48px", height: "48px", top: "20%", left: "75%" }}
                                    children={<img alt="logomapa2" src={logomapa}></img>}
                                ></Absolute>
                                <Absolute
                                    id="satotomasl2"
                                    style={{ width: "48px", height: "48px", top: "40%", left: "80%" }}
                                    children={<img alt="acreditacion2" src={logoacreditacion}></img>}
                                ></Absolute>
                            </React.Fragment>
                        }
                        {
                        sedesApi.map((e)=>
                            <Portal {...props} id={e.basic.name} top={(e.agent.properties.y.value || "40") + "%"} left={(e.agent.properties.x.value || "50")+ "%"} imageSede={imagesSedes[e.basic.name]} sede={e} listener={handlePortal} portal={portales[e.basic.name]} escudo={escudos[e.basic.name]}></Portal>
                        )
                        }
                        {/* <Portal top="50%" left="50%" imageSede={sedeBogota} listener={handlePortal} portal={inportalvillamapa} escudo={escudoBogota}></Portal>
                        <Portal top="20%" left="40%" listener={handlePortal} portal={inportalvillamapa} escudo={escudoVilla}></Portal> */}
                    </div>}
                >
                </ImagePanel>
                {(screen > 800 && tableGame)&&
                    <div>
                        <TableGame {...props} schedules={props.schedules} listener={props.listener} data={tableGame}  sedes={imagesSedes} escudos={escudos} portales={portales}></TableGame>
                    </div>
                }
                {(screen < 800 && tableGame) &&
                    <Absolute style={{ top: "80%", right: "80%" }}>
                        <ButtonImage image={btnatras} listener={closePortal} styleImage={!portalInferior ? { transform: "rotate(90deg)" }: { transform: "rotate(270deg)" } }>

                        </ButtonImage>
                    </Absolute>
                }
            </div>
            { (screen < 800 && portalInferior === true && tableGame) &&
                <Absolute style={{ top: "30%", left: "0%" }}>
                    <TableGame  {...props} schedules={props.schedules} listener={props.listener} data={tableGame}  sedes={imagesSedes} escudos={escudos} portales={portales} ></TableGame>
                </Absolute>
            }
        </div>
    )
}


function Portal(props) {
    const [startTimer, setstartTimer] = useState(false)
    const [stateSede, setStateSede] = useState(true)
    const [statePortal, setStatePortal] = useState(false)
    let horas = 0
    let minutos = 0
    let segundos = 0
    let hour = props.date.getHours()
    let minutes = props.date.getMinutes()
    let seconds = props.date.getSeconds()
    if(props.schedules[props.sede.basic.name]){
        let horarios=[]
        props.schedules[props.sede.basic.name].map((e)=>{
            horarios=e.split("-")
            let hi = parseInt(horarios[0])
            let hf = parseInt(horarios[1])
            if(hour>hi && hour<hf){
                horas = hf-hour
                minutos = 59-minutes
                segundos = 59-seconds
                //setStatePortal(true)
                // setstartTimer(true)
                return null  
            }
            return null  
        })
    }
    useEffect(() => {
        var date = new Date();
        let hour = date.getHours()
        if(props.sede){
            let horarios=[]
            props.schedules[props.sede.basic.name].map((e)=>{
                horarios=e.split("-")
                let hi = parseInt(horarios[0])
                let hf = parseInt(horarios[1])
                if(hour>hi && hour<hf){
                    setStateSede(false)
                    // setstartTimer(true)
                    return null  
                }
                return null  
            })
        }
        setTimeout(() => {        
            setstartTimer(true)
            if(props.currentKeys >=  props.sede.keysRequiredForOpen){
                setStatePortal(true)
            }
        }, 100);
    }, [props.sede])
    // useEffect(() => {
    //     setTimeout(() => {           
    //         setstartTimer(true)
    //     }, 100);
    // }, [])
    let styles = {
        height: "50px",
        width: "50px",
        top: props.top || 0,
        left: props.left || 0,
        right: props.right || 0,
        //filter:statePortal?"":"grayscale(1)"
    }
    let styleSede = {
        filter:stateSede?"":"grayscale(1)"
    }

    let styleAvatar = {
        filter:statePortal?"":"grayscale(1)"
    }

    return (
        <Absolute  style={{...styles}}>
            <Absolute id={props.id} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "black", top: "10px", ...styleSede}} listener={props.listener}>
                <MaskedAvatar
                    id={props.id}
                    avatar={props.imageSede || sedeBogota}
                    styleImage={{ borderRadius: "50%" }}
                    containerImage={btnsedesmarcomapa}
                    padding={"8px 4px"}
                    paddingTop={"20%"}
                    // listener={props.listener}
                    maskBorder={50}
                />
            </Absolute>
            <Absolute style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "", left: "60%", top: "60%" }}>
                <img alt="escudo" src={props.escudo || escudoBogota} width="20px" height="20px"></img>
            </Absolute>
            <Absolute style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "", top: "60%", right: "80%", left: "auto", ...styleAvatar}}>
                <img alt="portal"  src={props.portal ||  portalTunja}></img>
            </Absolute>
            <Absolute style={{ top: "90%", right: "15%" , textAlign: "center", color: "black" }}>
                <Flex style={{ position: 'relative', width: '100%', height: '100%' }} >
                    <img alt="contetiempo" src={contatiempoactivo} style={{ width: '180%', height: '100%' }}></img>
                    <Absolute top='20%'>
                        {(horas===0 && minutos===0 && segundos===0)?
                        <div>
                            <p style={{fontSize:'.6rem'}}>ABIERTO</p>
                        </div>
                        :
                        <Timer
                            horas={horas}
                            minutos={minutos}
                            segundos={segundos}
                            iniciar={startTimer}
                            detener={false}
                            reiniciar={false} //inicia o reanuda
                            styleTimer={{fontSize:'.6rem'}}
                        ></Timer>
                        }
                    </Absolute>
                </Flex>
                {/* <h6 style={{margin:"0px"}}>{"00:00:00"}</h6>  */}
            </Absolute>
        </Absolute>
    )
}

export default MapScreen;