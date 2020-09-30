import React from "react";
import circ40 from "../../shared/ExampleImages/Circ-40.png"
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ImagedPanel from "../../shared/Panels/ImagedPanel";
import header629 from "../../images/header/contaheader.png"
import Bar from "../../images/header/barraheader.png"
import key from "../../images/header/llaveheader.png"
import "./header.css"

function Header(props) {
    return (
        <Flex  style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", zIndex: "999",marginTop:"-30px"}}>
            <ImagedPanel
                id="tiP1"
                image={header629}
                debug={true} //testBox appears
                padding="5%" //5%
            >
                <Flex
                    style={{ width: '100%',marginTop: "2%" }}
                    align='center'
                    justify='center'  
                >
                    <Flex
                        className="de"
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{ width: "45%" }}
                    >
                        <div>
                            <h3 style={{ textAlign:'center', padding:'5px 0px' }}>Titulo titulo</h3>
                        </div>
                        <div>
                            <ProgressBar
                                percentage="30"
                                image={Bar}
                                padding={'3%'}
                                styleContainer={{ width: "100px", height: "15px" }}
                            >
                            </ProgressBar>
                        </div>
                        <div>
                            <CurrencyHorizontal
                                quantity={30}
                                image={key}
                                displayX={true}
                                styleX={{fontSize: "30px", padding:"5px"}}
                                id="counterbar"
                            ></CurrencyHorizontal>
                        </div>
                    </Flex>
                    <Flex
                        className="de"
                        margin="5%"
                        justify='center'
                        align='center'
                        style={{ width: "35%" }}
                    >
                        <Flex>
                            <CurrencyHorizontal
                                quantity={30}
                                image={circ20}
                                displayX={true}
                                id="middleContent"
                            ></CurrencyHorizontal>
                        </Flex>

                        <Flex>
                            <h3>x 1.2</h3>
                        </Flex>
                    </Flex>
                    <Flex
                        className="de"
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{  width: "auto" }}
                    >
                        <ButtonImage
                            id="btn1"
                            image={circ40}
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