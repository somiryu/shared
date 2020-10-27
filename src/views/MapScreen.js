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
import sedes from './models'

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
}

const portales={
    "Bogota":portalBogota,
    'Bucaramanga':portalBucaramanga,
    'Tunja':portalTunja,
    'Medellin':portalMedellin,
    'Villavicencio':portalVillavicencio,
}

function MapScreen(props) {
    const [screen] = useState(window.screen.width)
    const [portalInferior, setPortalInferior] = useState(false)
    const [tableGame, setTableGame] = useState(sedes[0])
    console.log(screen)
    
    const handlePortal = (e) => {
        console.log("estoy entrando")
        let sede = (e.target.id).split("_")
        let tableSede;
        console.log(sede)
        sedes.map((e)=>{
            if(e.name===sede[0]){
                console.log('lo encontre')
                tableSede = e
            }
        })
        console.log(tableSede)
        setTableGame(tableSede)
        if (portalInferior === false) {
            setPortalInferior(true)
        }
        else {
            setPortalInferior(false)
        }
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
                        sedes.map((e)=>
                            <Portal id={e.name} top={e.y + "%"} left={e.x + "%"} imageSede={imagesSedes[e.name]} listener={handlePortal} portal={portales[e.name]} escudo={escudos[e.name]}></Portal>
                        )
                        }
                        {/* <Portal top="50%" left="50%" imageSede={sedeBogota} listener={handlePortal} portal={inportalvillamapa} escudo={escudoBogota}></Portal>
                        <Portal top="20%" left="40%" listener={handlePortal} portal={inportalvillamapa} escudo={escudoVilla}></Portal> */}
                    </div>}
                >
                </ImagePanel>
                {screen > 800 &&
                    <div>
                        <TableGame listener={props.listener} data={tableGame} city={tableGame.name} sedes={imagesSedes} escudos={escudos} portales={portales}></TableGame>
                    </div>
                }
                {screen < 800 &&
                    <Absolute style={{ top: "80%", right: "80%" }}>
                        <ButtonImage image={btnatras} listener={handlePortal} styleImage={!portalInferior ? { transform: "rotate(90deg)" }: { transform: "rotate(270deg)" } }>

                        </ButtonImage>
                    </Absolute>
                }
            </div>
            { (screen < 800 && portalInferior === true) &&
                <Absolute style={{ top: "30%", left: "0%" }}>
                    <TableGame listener={props.listener} data={tableGame} city={tableGame.name} sedes={imagesSedes} escudos={escudos} portales={portales}></TableGame>
                </Absolute>
            }
            {/* <Timer seconds={59}/>  */}
        </div>
    )
}


function Portal(props) {
    const [startTimer, setstartTimer] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setstartTimer(true)
        }, 100);
    }, [])
    let stylePortal = {
        position: 'relative',
        height: "50px",
        width: "50px",
        top: props.top || 0,
        left: props.left || 0,
        right: props.right || 0
    }
    return (
        <div id={props.id} style={{ ...stylePortal }} onClick={props.listener}>
            <Absolute style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "black", top: "10px" }}>
                <MaskedAvatar
                    id={props.id}
                    avatar={props.imageSede || sedeBogota}
                    styleImage={{ borderRadius: "50%" }}
                    containerImage={btnsedesmarcomapa}
                    padding={0}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    maskBorder={100}
                />
            </Absolute>
            <Absolute style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "", left: "60%", top: "60%" }}>
                <img alt="portal1" src={props.escudo} width="20px" height="20px"></img>
            </Absolute>
            <Absolute style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "", top: "60%", right: "80%", left: "auto" }}>
                <img alt="portal2" src={props.portal}></img>
            </Absolute>
            <Absolute style={{ top: "90%", right: "15%" , textAlign: "center", color: "black" }}>
                <Flex style={{ position: 'relative', width: '100%', height: '100%' }} >
                    <img alt="contetiempo" src={contatiempoactivo} style={{ width: '180%', height: '100%' }}></img>
                    <Absolute top='20%'>
                        <Timer
                            horas={0}
                            minutos={30}
                            segundos={30}
                            iniciar={startTimer}
                            detener={false}
                            reiniciar={false} //inicia o reanuda
                            styleTimer={{fontSize:'.6rem'}}
                        ></Timer>
                    </Absolute>
                </Flex>
                {/* <h6 style={{margin:"0px"}}>{"00:00:00"}</h6>  */}
            </Absolute>
        </div>
    )
}

// var time = {
//     segundos:0,
//     minutos:0,
//     horas:0
// }

// function Timer(props){
//     const [seconds, setSeconds] = useState(props.seconds || 0)
//     const [minutes, setMinutes] = useState(props.minutes || 0)
//     const [hours, setHours] = useState(props.hours || 0)
//     while(seconds > 0 ){
//         if(seconds !== 0){
//             console.log("entre al if")
//             let i = seconds;
//             while( i > 1){
//                 console.log(i);
//                 i=i-1;
//                 setTimeout(console.log("un segundo"),1000);
//             }      
//         }     
//     }

//     return(<h1>{seconds}</h1>)

// }




export default MapScreen;