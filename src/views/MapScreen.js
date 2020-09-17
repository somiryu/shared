import React, {useState, useEffect} from 'react'
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import Bar from "../shared/ExampleImages/Indicators/barraTiempo.png";
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import Map from "../shared/ExampleImages/map.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import Absolute from "../shared/Containers/Absolute"
import Flex from "../shared/Containers/Flex"
import ProgressBar from "../shared/Indicators/ProgressBar";
import ButtonImage from "../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"

function MapScreen(props) {
    return (
        <div>
            <ImagePanel
                image={Map}
                padding="0%"
                children={<div style={{width:"100%",height:"100%"}}>
                    <Header></Header>
                    <Absolute 
                        id="satotomasl"
                        style={{width:"40px",height:"40px",top:"20%",left:"80%"}}
                        children={<img src={circ40}></img>}
                    ></Absolute>
                    <Absolute 
                        id="satotomasl2"
                        style={{width:"40px",height:"40px",top:"40%",left:"80%"}}
                        children={<img src={circ40}></img>}
                    ></Absolute>   
                    <Portal top="50%" left="50%"></Portal>
                    <Portal top="20%" left="40%"></Portal>
                </div>}
            >
            </ImagePanel>
        </div>
    )
}


function Portal(props){
    const [hoursf, setHoursF] = useState(1)
    const [minutesf, setMinutesF] = useState(30)
    const [secondsf, setSecondsF] = useState(45)
    
    let stylePortal = {
        position: 'relative',
        height: "60px",
        width: "50px",
        top: props.top || 0,
        left: props.left || 0,
        right: props.right || 0
    }
	return(
        <div style={{...stylePortal}}>
            <Absolute style={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"pink",top:"10px"}}>
            </Absolute>
            <Absolute style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"blue", left:"65%",top: "2px"}}>
            </Absolute>
            <Absolute style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"green"}}>
            </Absolute>
            <Absolute style={{top:"90%",borderRadius:"10px",border:"1px solid",textAlign:"center",color: "black"}}>
                <h6 style={{margin:"0px"}}>{"00:00:00"}</h6> 
            </Absolute>  
        </div>
	)
}

function Header(props){
	return(
        <Absolute style={{width:"100%",height:"auto",backgroundColor:"rgba(5,5,5,0.3)"}}>
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
        </Absolute>
	)
}

export default MapScreen;