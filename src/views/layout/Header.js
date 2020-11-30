import React from "react";
import Flex from "../../shared/Containers/Flex"
import Absolute from "../../shared/Containers/Absolute"
import ProgressBar from "../../shared/Indicators/ProgressBar"
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ImagedPanel from "../../shared/Panels/ImagedPanel"
import header629 from "../../images/header/contaheader.png"
import Bar from "../../images/header/barraheader.png"
import key from "../../images/header/llaveheader.png"
import btnlideres from "../../images/buttons/btnlideres.png"
import sedeprincipalbogota from "../../images/Graficos/sedeprincipalbogota.png"
import contasedeheader from "../../images/buttons/contasedeheader.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"
import btnatras from "../../images/buttons/btnatras.png"
import ButtonMultiState from '../../shared/Buttons/ButtonMultiState'
import "./header.css"



function Header(props) {
    //const [percentage, setPorcentage] = useState(props.player.agent.levels.xp.percentage )

    return (
        <Flex className="header" style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", zIndex: "999" }}>
            <ImagedPanel
                id="tiP1"
                image={header629}
                debug={false} //testBox appears
                padding="5%" //5%
            >

                <Flex style={{ position: "absolute", left: "20px" }}>
                    <ButtonImage image={btnatras} listener={() => { props.listener(3) }} >

                    </ButtonImage>
                </Flex>

                <Flex
                    style={{ width: '100%', height: '100%', marginTop: "2%" }}
                    align='center'
                    justify='center'
                >
                    <Flex
                        className=""
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{ width: "40%", height: '80%' }}
                    >
                        <Flex className="source" style={{ height: '45%' }}>
                            <h3 style={{ textAlign: 'center', padding: '5px 0px', color: 'var(--yellow-ligth)' }}>{props.player.agent.levels.xp.level.name ? props.player.agent.levels.xp.level.name : "Nivel 0"}</h3>
                        </Flex>
                        <Flex style={{ height: '45%' }}>
                            <ProgressBar
                                percentage={props.player.agent.levels.xp.percentage || 0}
                                image={Bar}
                                padding='2% 10% 10%'
                                styleContainer={{ width: "100%", height: "80%" }}
                                background={"linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)"}
                                barColor={"var(--green)"}
                            >
                            </ProgressBar>
                        </Flex>
                    </Flex>
                    <Flex
                        className=""
                        margin="5%"
                        justify='center'
                        align='center'
                        style={{ width: "30%", height: '100%' }}
                    >
                        <Flex>
                            <MaskedAvatar
                                id="sedeHeader"
                                paddingTop={"25%"}
                                avatar={sedeprincipalbogota}
                                styleImage={{ borderRadius: "50%" }}
                                containerImage={contasedeheader}
                                padding={"15px 5px"}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={50}
                            />
                        </Flex>
                        <Flex
                            className="source"
                        >
                            <p className="mult-header" style={{ color: 'var(--yellow-ligth)' }}> &nbsp; X &nbsp; {props.multiplicator ? props.multiplicator : "2.0"}</p>
                        </Flex>
                    </Flex>
                    <Flex
                        className=""
                        direction="column"
                        margin="5%"
                        align='center'
                        justify='center'
                        style={{ width: "30%", height: '100%' }}
                    >
                        {/* <ButtonImage
                            id="btn1"
                            image={btnlideres}
                            listener={(id) => { props.listener(4) }}
                            scale={1.1} //1.1
                            style={{ margin: 10 }} // {}
                        /> */}
                        <ButtonMultiState
                            id="btnLideres"
                            state={props.layout === "Profile" ? "off" : "on"}
                            scale={1.1} //1.1
                            images={{ off: btnlideres, on: btnlideres }}
                            listeners={{
                                off: () => { },
                                on: () => { props.listener(4); },
                            }}
                            styles={{ off: { filter: "grayscale(100%)" } }}
                        >
                        </ButtonMultiState>
                    </Flex>
                </Flex>
            </ImagedPanel>
        </Flex>
    )
}

export default Header;