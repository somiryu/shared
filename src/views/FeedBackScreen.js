import React from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImageWithLabel from "../shared/Buttons/ButtonImageWithLabel"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ContentSede from "../images/general/contasedejuego.png"
import key from "../images/header/llaveheader.png"
import ButtonImage from "../images/buttons/btnprincipal.png"



function ProfileScreen(props) {
    return (
        <Flex align="center" direction="column" style={{marginTop:"0%",marginLeft:"10%",marginRight:"10%"}}>
            <Flex style={{width:"50%"}} align={"center"} direction={"column"}>
                <ImagePanel
                    image={ContentSede}
                    padding={"6% 20%"}
                    style={{width:"400px",}}
                >
                    <Flex style={{}} align={"center"} direction={"column"}>
                        <h2>{props.title || "Titulo"}</h2>
                        <p style={{ height:"100px",overflowX:"auto",color:"#F2C75C",paddingTop:"10px"}}>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                        <div>
                            <CurrencyHorizontal
                                quantity={30}
                                image={key}
                                displayX={true}
                                styleX={{padding: "5px",fontSize:"30px"}}
                                styleImage={{transform: "rotate(330deg)"}}
                                id="counterfeed"
                            ></CurrencyHorizontal>
                        </div>
                        <div style={{display:"flex",justifyContent:"center", margin:"0 auto",width:props.widthButton || "100%"}}>
                            <ButtonImageWithLabel
                                id={props.buttonId || "firstbutton"}
                                image={props.buttonImage || ButtonImage}
                                label={props.buttonLabel || <label style={{fontWeight:"700",fontSize:"17px",height:"30px"}}>VOLVER</label>}
                                listener={props.listener || console.log("hola soy un boton sin listener")}
                            >
                            </ButtonImageWithLabel>
                        </div>
                    </Flex>
                </ImagePanel>
            </Flex>
        </Flex>
    )
}



export default ProfileScreen;