import React, {useState} from 'react'
import Mapa from "../images/general/mapa.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import Absolute from "../shared/Containers/Absolute"
import TableGame from "./layout/TableGame"
import logomapa from "../images/logos/logoaniosmapa.png"
import logoacreditacion from "../images/logos/logoacreditacionmapa.png"
import inportalvillamapa from "../images/Iconos/inportalvillamapa.png"
import inescudovilla from "../images/Iconos/inescudovilla.png"
import contatiempoactivo from "../images/buttons/contatiempoactivo.png"
import sedeprincipalbogota from "../images/Graficos/sedeprincipalbogota.png"
import MaskedAvatar from '../shared/Hubs/MaskedAvatar'
import btnsedesmarcomapa from "../images/buttons/btnsedesmarcomapa.png"

function MapScreen(props) {
    const [screen] = useState(window.screen.width)
    const [portalInferior, setPortalInferior] = useState(false)
    console.log(screen)
    const handlePortal = () => {
        if(portalInferior===false){
            setPortalInferior(true)
        }
        else{
            setPortalInferior(false)
        }
    }

    return (
        <div>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                { screen>800 &&
                    <React.Fragment>
                        <Absolute 
                            id="satotomasl"
                            style={{width:"40px",height:"40px",top:"5%",left:"83%"}}
                            children={<img alt="mapalogo"  src={logomapa}></img>}
                        ></Absolute>
                        <Absolute 
                            id="satotomasl2"
                            style={{width:"40px",height:"40px",top:"5%",left:"90%"}}
                            children={<img alt="acreditacion"  src={logoacreditacion}></img>}
                        ></Absolute>
                    </React.Fragment>
                }
                <ImagePanel
                    style={screen<800 && {marginTop:"15%"}}
                    image={Mapa}
                    padding="0%"
                    children={<div style={{width:"100%",height:"100%"}}>
                        { screen<800 &&
                            <React.Fragment>
                                <Absolute 
                                    id="satotomasl"
                                    style={{width:"48px",height:"48px",top:"20%",left:"75%"}}
                                    children={<img alt="logomapa2"  src={logomapa}></img>}
                                ></Absolute>
                                <Absolute 
                                    id="satotomasl2"
                                    style={{width:"48px",height:"48px",top:"40%",left:"80%"}}
                                    children={<img alt="acreditacion2" src={logoacreditacion}></img>}
                                ></Absolute>
                            </React.Fragment>
                        }
                        <Portal top="50%" left="50%" imageSede={sedeprincipalbogota} listener={handlePortal} portal={inportalvillamapa} escudo={inescudovilla}></Portal>
                        <Portal top="20%" left="40%" listener={handlePortal} portal={inportalvillamapa} escudo={inescudovilla}></Portal>
                    </div>}
                >
                </ImagePanel>
                { screen>800 &&
                    <div>
                        <TableGame listener={props.listener}></TableGame>
                    </div>
                }
            </div>
            { (screen<800 && portalInferior===true)&&
                <div>
                    <TableGame></TableGame>
                </div>
            }
            {/* <Timer seconds={59}/>  */}
        </div>        
    )
}


function Portal(props){
    
    let stylePortal = {
        position: 'relative',
        height: "60px",
        width: "50px",
        top: props.top || 0,
        left: props.left || 0,
        right: props.right || 0
    }
	return(
        <div style={{...stylePortal}} onClick={props.handlePortal}>
            <Absolute style={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"black",top:"10px"}}>
                <MaskedAvatar
                    id="colaborador1"
                    avatar={sedeprincipalbogota}
                    styleImage={{borderRadius:"50%"}}
                    containerImage={btnsedesmarcomapa}
                    padding={0}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    maskBorder={100}
                />
            </Absolute>
            <Absolute style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"", left: "60%",top: "60%"}}>
                <img alt="portal1" src={props.escudo} width="20px" height="20px"></img>
            </Absolute>
            <Absolute style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"",top: "60%",right:"80%", left:"auto"}}>
                <img alt="portal2" src={props.portal}></img>
            </Absolute>
            <Absolute style={{top:"90%",right: "15%",borderRadius:"10px",border:"1px solid",textAlign:"center",color: "black",backgroundImage:"url("+contatiempoactivo+")"}}>
                <h6 style={{margin:"0px"}}>{"00:00:00"}</h6> 
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