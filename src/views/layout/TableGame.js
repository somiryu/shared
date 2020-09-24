import React,{useState} from "react";
import ImageTest from "../../shared/ExampleImages/Buttons/boton.png";
import circ80 from "../../shared/ExampleImages/Circ-80.png"
import circ40 from "../../shared/ExampleImages/Circ-40.png"
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import sq80 from "../../shared/ExampleImages/Circ-20.png"
import Absolute from "../../shared/Containers/Absolute"
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ButtonMultiState from  '../../shared/Buttons/ButtonMultiState'
import ImagePanel from "../../shared/Panels/ImagedPanel"
import gameZone from "../../images/general/contajuego.png"
import copa from "../../images/Iconos/incopa.png"
import villavicencio from "../../images/Iconos/inescudovilla.png"


function TableGame(props){
    const [state1, setState1] = useState("off");
	return(
        <ImagePanel
            image={gameZone}
            padding="0%">
            <Flex direction="column" align="center" style={{backgroundColor:"rgba(5,5,5,0.3)",borderRadius:"20px",width:"100%",padding: "10px",height:"100%"}}>
                <Flex align={"center"}>
                    <Flex align="center" style={{}}>
                        <img src={villavicencio} ></img>
                    </Flex>
                    <Flex style={{margin:"10px 10px"}}align="center">
                        <h5>{props.title || "NOMBRE SEDE"} - {props.city || "CIUDAD"}</h5>
                    </Flex>
                </Flex>
                <Flex style={{justifyContent:"space-around",width:"100%"}} align="center">
                    <Flex direction={"column"} align={"center"}>
                        <Flex>
                            <img src={villavicencio} ></img>
                        </Flex>
                        <Flex>
                            <h5>{props.city || "Ciudad"}</h5>
                        </Flex>
                    </Flex>
                    <Flex direction={"column"} align={"center"}>
                        <Flex>
                            <img src={circ20} ></img>
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
                            image={circ20}
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
                                images={{ off:sq80, on:circ80, nata:circ40 }}
                                listeners={{
                                    off: () => { setState1("on") },
                                    on: () => { setState1("nata") },
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
                            image={circ20}
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