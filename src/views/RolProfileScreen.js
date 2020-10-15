import React from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImageWithLabel from "../shared/Buttons/ButtonImageWithLabel"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle"
import contapersonajes from "../images/general/contapersonajes.png"
import contajuego from "../images/general/contajuego.png"
import ImageTest from "../images/buttons/btnprincipal.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import imagedefault from "../images/general/imagedefault.png"
import imageArrow from "../images/buttons/btnsiguienteflechas.png"
import estudiante from '../images/Graficos/estudiante.png'

function ProfileScreen(props) {
    return (
        <Flex align="center" direction="column" style={{marginTop: "0%", marginLeft: "10%", marginRight: "10%" }}>
            <Flex id='ProfileScreenContainer' align="center" style={{ flexWrap: "wrap-reverse", height:'70vh' }}>
                <Flex align="center" style={{ width:'50%', margin: "0px" }}>
                    <ImagePanel
                        image={contajuego}
                        padding={"0%"}
                        style={{ width: "400px" }}
                        contentPrincipal={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Flex align="center" justify="center" style={{width:'80%', margin:'0 auto'}}>
                            <Flex direction="column" style={{ width: "50%" }}>
                                <h2 style={{ fontWeight: "100", fontFamily: "Source Serif Pro", textAlign: "center" }}>Selección multiple</h2>
                                <ButtonImageWithLabel
                                    id={"inicio"}
                                    image={ImageTest}
                                    label={"Inicio"}
                                    listener={() => {
                                        props.listener(6)
                                    }}
                                >
                                </ButtonImageWithLabel>
                            </Flex>
                            <Flex align={"center"} justify={"center"} style={{ width: "50%" }}>
                                <img alt="default" src={imagedefault} width={"125px"} height={"125px"}></img>
                            </Flex>
                        </Flex>
                    </ImagePanel>
                </Flex>
                <Flex align="center" style={{width:'50%', margin: "0px" }} direction={"column"}>
                    <Flex
                        direction="column"
                        align="center"
                        style={{width:'100%'}}
                    >
                        <MaskedAvatarWithTitle
                            id="colaborador2"
                            avatar={estudiante}
                            containerImage={contapersonajes}
                            padding='20%'
                            paddingLabel='5'
                            maskBorder={100}
                            textAlign={"center"}
                            // imageLabel={TituloColaborador}
                            label={<label className='label1' style={{ color: "var(--yellow-ligth)" }}>SECRETARIA</label>}
                            pointer={true}
                            listener={() => console.log('Clicked MarkedAvatar')}
                            topLabel={"72%"}
                        >
                        </MaskedAvatarWithTitle>
                    </Flex>
                    <Flex
                        direction="column"
                        align="center"
                        style={{ width: "90%" }}
                    >
                        <Flex id='DescriptionRoles' style={{width:'90%'}}>
                            <p>{props.descriptionRol || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}</p>
                        </Flex>
                        <Flex style={{ width: "100%", textAlign: "right" }}>
                            <ButtonImageWithLabel
                                id={"siguiente"}
                                image={imageArrow}
                                label={<div style={{ position: "relative", left: "-50px", color: "#EAAB1C", fontFamily: "Source Serif Pro, cursive" }}>Siguiente</div>}
                                listener={() => {
                                    console.log("boton siguiente")
                                }}
                            >
                            </ButtonImageWithLabel>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}



export default ProfileScreen;