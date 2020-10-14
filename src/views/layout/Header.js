import React from "react";
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ImagedPanel from "../../shared/Panels/ImagedPanel";
import header629 from "../../images/header/contaheader.png"
import Bar from "../../images/header/barraheader.png"
import key from "../../images/header/llaveheader.png"
import btnlideres from "../../images/buttons/btnlideres.png"
import "./header.css"

function Header(props) {
    return (
        <Flex  className="header" style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", zIndex: "999"}}>
            <ImagedPanel
                id="tiP1"
                image={header629}
                debug={false} //testBox appears
                padding="5%" //5%
            >
                <Flex
                    style={{ width: '100%',height: '100%',marginTop: "2%" }}
                    align='center'
                    justify='center'  
                >
                    <Flex
                        className=""
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{ width: "40%",height: '100%' }}
                    >
                        <Flex className="source" style={{height:'33%'}}>
                            <h3 style={{ textAlign:'center', padding:'5px 0px' }}>{props.titleBar ? props.titleBar:"Nivel 1" }</h3>
                        </Flex>
                        <Flex style={{height:'33%'}}>
                            <ProgressBar
                                percentage="30"
                                image={Bar}
                                padding={'3%'}
                                styleContainer={{ width: "100%", height: "80%" }}
                            >
                            </ProgressBar>
                        </Flex>
                        <Flex style={{height:'33%', width:'50%'}}>
                            <CurrencyHorizontal
                                className="source"
                                quantity={30}
                                image={key}
                                displayX={true}
                                styleX={{fontSize: "30px", padding:"0 5px"}}
                                id="counterbar"
                                idX="xcounterbar"
                            ></CurrencyHorizontal>
                        </Flex>
                    </Flex>
                    <Flex
                        className=""
                        margin="5%"
                        justify='center'
                        align='center'
                        style={{ width: "30%",height: '100%' }}
                    >
                        <Flex>
                            <CurrencyHorizontal
                                className="source"
                                quantity={30}
                                image={circ20}
                                displayX={false}
                                id="middleContent"
                            ></CurrencyHorizontal>
                        </Flex>

                        <Flex
                            className="source"
                        >
                            <h3 style={{fontSize: "29px"}}>X{props.multiplicator ? props.multiplicator : "1.2"}</h3>
                        </Flex>
                    </Flex>
                    <Flex
                        className=""
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{  width: "30%",height: '100%' }}
                    >
                        <ButtonImage
                            id="btn1"
                            image={btnlideres}
                            listener={(id) => { console.log("clicked", id) }}
                            scale={1.1} //1.1
                            style={{ margin: 10 }} // {}
                        />
                    </Flex>
                </Flex>
            </ImagedPanel>
        </Flex>
    )
}

export default Header;