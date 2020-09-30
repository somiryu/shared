import React,{useState} from "react";
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import Flex from "../../shared/Containers/Flex"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ButtonMultiState from  '../../shared/Buttons/ButtonMultiState'
import ImagePanel from "../../shared/Panels/ImagedPanel"
import gameZone from "../../images/general/contajuego.png"
import copa from "../../images/Iconos/incopa.png"
import villavicencio from "../../images/Iconos/inescudovilla.png"
import incerebrodificil from "../../images/Iconos/incerebrodificil.png" 
import key from "../../images/header/llaveheader.png" 
import timer from "../../images/Iconos/inretry.png" 
import door from "../../images/Iconos/inpuerta.png" 


function TableGame(props){
    const [state1, setState1] = useState("off");
	return(
        <ImagePanel
            image={gameZone}
            padding="0%">
            <Flex direction="column" align="center" style={{backgroundColor:"rgba(5,5,5,0.3)",borderRadius:"20px",width:"100%",padding: "10px",height:"100%"}}>
                <Flex align={"center"}>
                    <Flex align="center" style={{}}>
                        <img alt="cerebro"src={incerebrodificil} ></img>
                    </Flex>
                    <Flex style={{margin:"10px 10px"}}align="center">
                        <h5>{props.title || "NOMBRE SEDE"} - {props.city || "CIUDAD"}</h5>
                    </Flex>
                </Flex>
                <Flex style={{justifyContent:"space-around",width:"100%"}} align="center">
                    <Flex direction={"column"} align={"center"}>
                        <Flex>
                            <img alt="shell" src={villavicencio} ></img>
                        </Flex>
                        <Flex>
                            <h5>{props.city || "Ciudad"}</h5>
                        </Flex>
                    </Flex>
                    <Flex direction={"column"} align={"center"}>
                        <Flex>
                            <img alt="placelogo" src={circ20} ></img>
                        </Flex>
                        <Flex>
                            <h5>20 x 1.2</h5>
                        </Flex>
                    </Flex>
                    <Flex>
                        <CurrencyHorizontal
                            quantity={30}
                            image={copa}
                            //displayX={true}
                            id="counterCup"
                            direction ="column"
                            fontSize = "1em"
                        ></CurrencyHorizontal>
                    </Flex>
                </Flex>
                <Flex  style={{justifyContent:"space-around",width:"100%"}} align="center">
                    <Flex>
                        <CurrencyHorizontal
                            quantity={30}
                            image={key}
                            displayX={true}
                            id="counterNumber"
                            direction ="column"
                            fontSize = "1em"
                        >
                        </CurrencyHorizontal>
                    </Flex>
                    <Flex direction={"column"} align={"center"} >
                        <Flex>
                            <ButtonMultiState
                                id="btn2"
                                state={state1}
                                scale={1.2} //1.1
                                images={{ off:door, on:door }}
                                listeners={{
                                    off: () => { setState1("on") },
                                    on: () => { setState1("off") },
                                }}
                                styles={{ off: { filter: "grayscale(100%)" } }}
                            >
                            </ButtonMultiState>
                        </Flex>
                        <div>
                            <h5>{props.count||"00:00:00"}</h5>
                        </div>
                    </Flex>
                    <div >
                        <CurrencyHorizontal
                            quantity={30}
                            image={timer}
                            //displayX={true}
                            id="counterArrows"
                            direction ="column"
                            fontSize = "1em"
                        ></CurrencyHorizontal>
                    </div>
                </Flex>
                
            </Flex>
        </ImagePanel>
	)
}

export default TableGame;