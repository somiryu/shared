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

function TableGame(props){
    const [state1, setState1] = useState("off");
	return(
        <Flex direction="column" align="center" style={{backgroundColor:"rgba(5,5,5,0.3)",borderRadius:"20px",minWidth:"270px"}}>
            <Flex style={{margin:"0px 10px"}}align="center">{props.title || "NOMBRE SEDE"} - {props.city || "CIUDAD"}</Flex>
            <Flex align="center"><img src={circ20} ></img></Flex>
            <Flex style={{justifyContent:"space-around",width:"100%"}} align="center">
                <div ><img src={circ20} ></img>{props.city || "Ciudad"}</div>
                <div><img src={circ20} ></img>20 x 1.2</div>
                <div >
                    <CurrencyHorizontal
                        quantity={30}
                        image={circ20}
                        //displayX={true}
                        id="counterCup"
                    ></CurrencyHorizontal>
                </div>
            </Flex>
            <Flex  style={{justifyContent:"space-around",width:"100%"}} align="center">
                <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}>
                    <div>
                        <CurrencyHorizontal
                            quantity={30}
                            image={circ20}
                            //displayX={true}
                            id="counterNumber"
                        >
                        </CurrencyHorizontal>
                    </div>
                    <div >
                        {"/"+(props.total || "200")}
                    </div>
                </div>
                <div >
                    <CurrencyHorizontal
                        quantity={30}
                        image={circ20}
                        //displayX={true}
                        id="counterArrows"
                    ></CurrencyHorizontal>
                </div>
            </Flex>
            <Flex align="center" style={{justifyContent:"space-evenly", width:"100%"}} >
                <div>
                    <h5>{props.count||"00:00:00"}</h5>
                </div>
                <div>
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
                </div>
            </Flex>
        </Flex>
	)
}

export default TableGame;