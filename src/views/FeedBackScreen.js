import React from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImageWithLabel from "../shared/Buttons/ButtonImageWithLabel"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ContentSede from "../images/general/contasedejuego.png"
import key from "../images/header/llaveheader.png"
import ButtonImage from "../images/buttons/btnprincipal.png"



function FeedbackScreen(props) {
    return (
        <Flex id='FeedbackScreen' align="center" direction="column" style={{ marginTop: "0%", marginLeft: "10%", marginRight: "10%", height: '80vh' }}>
            <Flex id='FeedbackScreenContainer' style={{ width: "80%" , height:'100%'}} align={"center"} direction={"column"}>
                <ImagePanel
                    image={ContentSede}
                    padding={"2% 10%"}
                    style={{ width: "90%", }}
                >
                    <Flex style={{height:'90%', width:'100%'}} align={"center"} direction={"column"}>
                        <Flex align='center' justify='center' style={{height:'18%', width:'100%'}}>
                            <h2>{props.title || "Titulo"}</h2>
                        </Flex>
                        <Flex align='flex-start' justify='center' style={{marginTop:'10%',height:'30%', width:'100%', overflowX: "auto"}}>
                            <p style={{ color: "#F2C75C", paddingTop: "10px" }}>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                        </Flex>

                        <Flex align='center' justify='center' style={{height:'20%', width:'100%'}}>
                            <CurrencyHorizontal
                                quantity={30}
                                image={key}
                                displayX={true}
                                styleX={{ padding: "5px", fontSize: "30px" }}
                                styleImage={{ transform: "rotate(330deg)" }}
                                id="counterfeed"
                            ></CurrencyHorizontal>
                        </Flex>
                        <Flex align='flex-start' justify='center' style={{ height:'25%', margin: "0 auto", width: props.widthButton || "80%" }}>
                            <ButtonImageWithLabel
                                id={props.buttonId || "firstbutton"}
                                image={props.buttonImage || ButtonImage}
                                label={props.buttonLabel || <label style={{ fontWeight: "700", fontSize: "17px", height: "30px" }}>VOLVER</label>}
                                listener={() => {
                                    props.listener(0)
                                }}
                            >
                            </ButtonImageWithLabel>
                        </Flex>
                    </Flex>
                </ImagePanel>
            </Flex>
        </Flex>
    )
}



export default FeedbackScreen;