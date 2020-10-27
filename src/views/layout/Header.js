import React from "react";
import Flex from "../../shared/Containers/Flex"
import ProgressBar from "../../shared/Indicators/ProgressBar";
import ButtonImage from "../../shared/Buttons/ButtonImage"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import ImagedPanel from "../../shared/Panels/ImagedPanel";
import header629 from "../../images/header/contaheader.png"
import Bar from "../../images/header/barraheader.png"
import key from "../../images/header/llaveheader.png"
import btnlideres from "../../images/buttons/btnlideres.png"
import sedeprincipalbogota from "../../images/Graficos/sedeprincipalbogota.png"
import contasedeheader from "../../images/buttons/contasedeheader.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"
import "./header.css"
import btnatras from "../../images/buttons/btnatras.png";


function Header(props){ 
    return (
        <Flex  className="header" style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", zIndex: "999"}}>
            <ImagedPanel
                id="tiP1"
                image={header629}
                debug={false} //testBox appears
                padding="5%" //5%
            >
               
                <Flex style={{ position: "absolute",left: "20px" }}>
                    <ButtonImage image={btnatras} listener={props.listener(3)} >

                    </ButtonImage>
                </Flex>
                
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
                        style={{ width: "40%",height: '80%' }}
                    >
                        <Flex className="source" style={{height:'33%'}}>
                            <h3 style={{ textAlign:'center', padding:'5px 0px', color:'var(--yellow-ligth)' }}>{props.titleBar ? props.titleBar:"Nivel 1" }</h3>
                        </Flex>
                        <Flex style={{height:'33%'}}>
                            <ProgressBar
                                percentage="30"
                                image={Bar}
                                padding='2% 10% 4%'
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
                                styleX={{padding:"0 5px", color:'var(--yellow-ligth)'}}
                                childStyle={{color:'var(--yellow-ligth)'}}
                                id="counterbar"
                                idX="xcounterbar"
                                styleBox={{display:"flex"}}
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
                                image={<MaskedAvatar
                                    id="sedeHeader"
                                    avatar={sedeprincipalbogota}
                                    styleImage={{borderRadius:"50%"}}
                                    containerImage={contasedeheader}
                                    padding={8}
                                    listener={() => console.log('Clicked MarkedAvatar')}
                                    maskBorder={100}
                                />}
                                imageHtml={true}
                                displayX={false}
                                id="middleContent"
                                childStyle={{ color:'var(--yellow-ligth)'}}
                                styleBox={{display:"flex"}}
                                idX="xmiddleContent"
                            ></CurrencyHorizontal>
                        </Flex>
                        <Flex
                            className="source"
                        >
                            <p style={{color:'var(--yellow-ligth)'}}> &nbsp; X &nbsp; {props.multiplicator ? props.multiplicator : "1.2"}</p>
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
                            listener={(id) => { props.listener(4) }}
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