import React from 'react'
import Flex from "../shared/Containers/Flex"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle";
import Fraile from "../images/Graficos/fraile-temp.png"
import Colaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"
import contatiempo from "../images/buttons/contatiempo.png"
import contatiempoactivo from "../images/buttons/contatiempoactivo.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ContentSede from "../images/general/contasedejuego.png"
import contapersonajes from "../images/general/contapersonajes.png"
import portalVillavicencio from "../images/Portales/inportalvilla.png"
import ButtonMultiStateWithText from '../shared/Buttons/ButtonMultiStateWithText';
import estudiante from '../images/Graficos/estudiante-temp.png'
import profesora from '../images/Graficos/profesora-temp.png'
import secretaria from '../images/Graficos/secretari-temp.png'
import Absolute from '../shared/Containers/Absolute';
const Roles = [
    {
        text: 'Profesora',
        image: profesora,
        schedule1: '7 - 9 pm',
        schedule2: '8 - 9 pm'
    },
    {
        text: 'Secretaria',
        image: secretaria,
        schedule1: '7 - 9 pm',
        schedule2: '8 - 9 pm'
    },
    {
        text: 'Fraile',
        image: Fraile,
        schedule1: '7 - 9 pm',
        schedule2: '8 - 9 pm'
    },
    {
        text: 'Estudiante',
        image: estudiante,
        schedule1: '7 - 9 pm',
        schedule2: '8 - 9 pm'
    }
]
function SedeScreen(props) {
    return (
        <Flex id="SedeScreenContainer" align="center" style={{ marginTop: "0%", marginLeft: "5%", marginRight: "5%", flexWrap: "wrap" }}>
            <Flex style={{ width: "50%" }} align="center" direction="column">
                <ImagePanel
                    image={ContentSede}
                    padding={"0"}
                    style={{ width: "400px", }}
                >
                    <Flex align="center" direction="column" style={{ width: '100%', height: '100%' }}>
                        <Flex align="center" style={{ width: '100%', height: '18%' }} >
                            <h2>{props.title || "Titulo"}</h2>
                        </Flex>
                        <Flex className='scrollbar' align="flex-start" style={{ margin: '5% 0', width: '60%', height: '30%', overflowY: 'auto' }} >
                            <p style={{ color: 'white' }}>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                        </Flex>
                        <Flex align="flex-start" style={{ height: '50%' }} >
                            <img alt="portal" src={portalVillavicencio} style={{ width: '80%' }}></img>
                        </Flex>
                    </Flex>
                </ImagePanel>
            </Flex>
            <Flex style={{ width: "50%", flexWrap: "wrap" }}>
                {Roles.map((rol, index) => {
                    return (
                        <Flex direction="column" align="center" style={{ margin: "20px", width: "160px" }}>
                            <Flex style={{ position: 'relative' }}>
                                <Absolute className='background-container-profiles ' style={{
                                    width: '80%',
                                    height: '74%',
                                    margin: '15% auto 34%'
                                }}>

                                </Absolute>
                                <Flex>
                                    <MaskedAvatarWithTitle
                                        id="colaborador2"
                                        avatar={rol.image || estudiante}
                                        containerImage={contapersonajes}
                                        padding={'20% 20% 38% 21%'}
                                        paddingLabel={0}
                                        maskBorder={0}
                                        imageTitle={Colaborador}
                                        textAlign={"center"}
                                        debug={false}
                                        label={<label style={{ color: "var(--yellow-ligth)" }}>{rol.text}</label>}
                                        pointer={true}
                                        listener={() => props.listener(rol.text)}
                                        leftLabel={"-1%"}
                                        topLabel={"75%"}
                                    >
                                    </MaskedAvatarWithTitle>
                                </Flex>
                            </Flex>
                            <ButtonMultiStateWithText
                                id={`btn${index}1`}
                                state={'on'}
                                scale={1.2} //1.1
                                images={{ off: contatiempo, on: contatiempoactivo }}
                                listeners={{
                                    off: () => { },
                                    on: () => { },
                                }}
                                stylesText={{ off: { color: 'var(--dark-grey)', marginBottom: '5%' }, on: { color: 'var(--yellow-ligth)', marginBottom: '5%' } }}
                                styles={{}}
                                text={<label className='label'>{rol.schedule1}</label>}
                            />
                            <ButtonMultiStateWithText
                                id={`btn${index}2`}
                                state={'off'}
                                scale={1.2} //1.1
                                images={{ off: contatiempo, on: contatiempoactivo }}
                                listeners={{
                                    off: () => { },
                                    on: () => { },
                                }}
                                stylesText={{ off: { color: 'var(--dark-grey)', marginBottom: '5%' }, on: { color: 'var(--yellow-ligth)', marginBottom: '5%' } }}
                                styles={{}}
                                text={<label className='label2'>{rol.schedule2}</label>}
                            />
                        </Flex>
                    )
                })}

            </Flex>
        </Flex>
    )
}


export default SedeScreen;