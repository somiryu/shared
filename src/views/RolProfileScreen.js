import React, {useState,useEffect} from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImageWithLabel from "../shared/Buttons/ButtonImageWithLabel"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle"
import contapersonajes from "../images/general/contapersonajes.png"
import contajuego from "../images/general/contajuego.png"
import ImageTest from "../images/buttons/btnprincipal.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import imagedefault from "../images/general/imagedefault.png"
import imageArrow from "../images/buttons/btnsiguienteflechas.png"
import profesora from '../images/Graficos/profesora-temp.png'
import secretaria from '../images/Graficos/secretari-temp.png'
import Absolute from '../shared/Containers/Absolute';
import estudiante from '../images/Graficos/estudiante-temp.png'
import Fraile from "../images/Graficos/fraile-temp.png"

const Roles = [
    {
        id:1,
        text: 'Profesora',
        image: profesora,
        schedule1: '7-9',
        schedule2: '12-21'
    },
    {
        id:2,
        text: 'Secretaria',
        image: secretaria,
        schedule1: '7-9',
        schedule2: '12-21'
    },
    {
        id:3,
        text: 'Fraile',
        image: Fraile,
        schedule1: '7-9',
        schedule2: '12-21'
    },
    {
        id:4,
        text: 'Estudiante',
        image: estudiante,
        schedule1: '7-9',
        schedule2: '12-21'
    }
]

function ProfileScreen(props) {
    const [rol] = useState(props.character || 'Estudiante')
    const [currentRol,setCurrentRol] = useState(false)
    useEffect(() => {
        Roles.map((e)=>{
            if(e.text === rol){
                setCurrentRol(e)
            }
            return null
        })
    }, [rol])
    
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
                                        props.listener(7)
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
                        <Flex style={{ position: 'relative' }}>
                            <Absolute className='background-container-profiles ' style={{
                                width: '80%',
                                height: '74%',
                                margin: '15% auto 34%'
                            }}>

                            </Absolute>
                            <MaskedAvatarWithTitle
                                id="colaborador2"
                                avatar={currentRol?currentRol.image:estudiante}
                                containerImage={contapersonajes}
                                padding={'20% 20% 38% 21%'}
                                paddingLabel='5'
                                maskBorder={0}
                                textAlign={"center"}
                                // imageLabel={TituloColaborador}
                                label={<label  style={{ color: "var(--yellow-ligth)" }}>{currentRol?currentRol.text:'ESTUDIANTE'}</label>}
                                pointer={true}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                topLabel={"72%"}
                            >
                            </MaskedAvatarWithTitle>
                        </Flex>
                    </Flex>
                    <Flex
                        direction="column"
                        align="center"
                        style={{ width: "90%" }}
                    >
                        <Flex id='DescriptionRoles' style={{width:'90%'}}>
                            <p>{props.descriptionRol || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}</p>
                        </Flex>
                        <Flex style={{ width: "100%", textAlign: "right" }} justify={"flex-end"}>
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