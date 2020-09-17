import React, {useState} from 'react'
import ButtonMultiState from  '../shared/Buttons/ButtonMultiState'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import circ80 from "../shared/ExampleImages/Circ-20.png"
import sq80 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import ProgressBar from "../shared/Indicators/ProgressBar";
import ButtonImage from "../shared/Buttons/ButtonImage"
import MaskedAvatar from "../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ChipController from "./layout/ChipContoller"
import CaraInnos from "../shared/ExampleImages/Generic/caraInnos.png"
import Dios from "../shared/ExampleImages/Hubs/dios.png"

function ProfileScreen(props) {
    const [state1, setState1] = useState("off");
    return (
        <div style={{display:"flex", flexDirection:"column", position:"relative", top:"10%"}}>
            <Header></Header>
            <ChipController
                chips={[{id:"Perfil",label:"Perfil"},{id:"Regional",label:"Regional"},{id:"Cofradia",label:"Cofradia"}]}
            ></ChipController>
            <Flex
                direction="column"
                align="center"
            >
                <Flex 
                    style={{margin:"30px",height:"auto"}}  
                >
                    <MaskedAvatar
                        id="colaborador1"
                        avatar={CaraInnos}
                        containerImage={Dios}
                        padding={12}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        maskBorder={100}
                    />
                    <Flex direction="column" align="center">
                        <h2>Javier Velazques</h2>
                        <CurrencyHorizontal
                            quantity={30}
                            image={circ20}
                            displayX={true}
                            id="counterbar1"
                        ></CurrencyHorizontal>
                    </Flex>
                </Flex>
            </Flex>
            <Flex align="center">
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
                <h3 style={{marginLeft:"20%"}}>Lorem Ipsum</h3>
            </Flex>
            <Flex align="center">
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
                <h3 style={{marginLeft:"20%"}}>Lorem Ipsum</h3>
            </Flex>
            <Flex align="center">
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
                <h3 style={{marginLeft:"20%"}}>Lorem Ipsum</h3>
            </Flex>
        </div>
    )
}



function Header(props){
	return(
        <div style={{width:"100%",height:"auto",backgroundColor:"rgba(5,5,5,0.3)"}}>
            <Flex justify="space-around" align="center">
                <Flex 
                    direction="column" 
                    margin="5%"
                    style={{width:"auto",margin:"10px 30px"}}
                >
                    <h6 style={{margin:"0 auto"}}>Titulo titulo</h6>
                    <ProgressBar
                            percentage="30"
                            // image={Bar}
                            padding={'3%'}
                            styleContainer={{width:"100px",border:"1px solid black",borderRadius:"10px",height:"10px"}}
                    >
                    </ProgressBar>
                    <CurrencyHorizontal
                        quantity={30}
                        image={circ20}
                        displayX={true}
                        id="counterbar"
                    ></CurrencyHorizontal>
                </Flex>
                <img src={ImageTest} width="40px" height="40px"></img>
                <h3 style={{margin:"auto 0"}}>20 X 1.2</h3>
                <ButtonImage
					id="btn1"
					image={circ40}
					listener={(id) => { console.log("clicked", id) }}
					scale={1.1} //1.1
					style={{ margin: 10 }} // {}
				/>
            </Flex>
        </div>
	)
}

export default ProfileScreen;