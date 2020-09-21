import React,{useState} from "react";
import ImageTest from "../../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../../shared/ExampleImages/Circ-40.png"
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import Absolute from "../../shared/Containers/Absolute"
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"

function Header(props){
    const [visible, setVisible] = useState(props.visible || true )
	return(
        <div style={!visible?{display:"none"}:{}}>
            <Absolute style={{width:"100%",height:"auto",display:"flex", justifyContent:"center",zIndex:"999"}}>
                <Flex justify="space-around" align="center" style={{width:"500px",backgroundColor:"rgba(5,5,5,0.3)"}}>
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
        </div>
	)
}

export default Header;