import React, { useState } from "react";
import ImageTest from "../../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../../shared/ExampleImages/Circ-40.png"
import circ20 from "../../shared/ExampleImages/Circ-20.png"
import Absolute from "../../shared/Containers/Absolute"
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ImagedPanel from "../../shared/Panels/ImagedPanel";
import rec600 from "../../shared/ExampleImages/rec-600.png"

function Header(props) {
    const [visible, setVisible] = useState(props.visible || true)
    return (
        <div style={!visible ? { display: "none" } : {}}>
            <Absolute style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", zIndex: "999" }}>
                <ImagedPanel
                    id="tiP1"
                    image={rec600}
                    debug={true} //testBox appears
                    padding="5%" //5%
                >
                    <Flex
                        style={{ width: '100%' }}
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
                            <h3 style={{ textAlign:'center', padding:'5px 0px' }}>Titulo titulo</h3>
                            <ProgressBar
                                percentage="30"
                                // image={Bar}
                                padding={'3%'}
                                styleContainer={{ width: "100px", border: "1px solid black", borderRadius: "10px", height: "10px" }}
                            >
                            </ProgressBar>
                            <CurrencyHorizontal
                                quantity={30}
                                image={circ20}
                                displayX={true}
                                id="counterbar"
                            ></CurrencyHorizontal>
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
                            style={{ width: "20%", width: "auto" }}
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
            </Absolute>
        </div>
    )
}

export default Header;