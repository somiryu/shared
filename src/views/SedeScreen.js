import React, { useState, useEffect } from 'react'
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
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import s, { HashSedes } from '../models/Sedes'
import key from "../images/header/llaveheader.png"
import { Immutables } from '../shared/Utils/engine';
import Timer from "../shared/TimerV2"
let sedes = s;
const Roles = [
    {
        id: 1,
        text: 'Profesora',
        image: profesora
    },
    {
        id: 2,
        text: 'Secretaria',
        image: secretaria
    },
    {
        id: 3,
        text: 'Fraile',
        image: Fraile
    },
    {
        id: 4,
        text: 'Estudiante',
        image: estudiante
    }
]
function SedeScreen(props) {
    const [currentSede, setCurrentSede] = useState(sedes[0])
    const [description, setDescription] = useState('')
    const [start, setstart] = useState(false)
    useEffect(() => {
        if (!start) {
            setTimeout(() => {
                setstart(true)
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.cooldowns])
    useEffect(() => {
        sedes.map((e) => {
            if (e.name === props.sede) {
                setCurrentSede(e)
                setDescription(Immutables.byName(props.immutables, 'text_welcome_sede')[`text_${HashSedes[e.name]}`])
            }
            return null
        })
    }, [props.sede, props.immutables])
    const time1 = (rol) => {
        let tiempo = rol.schedule1.split("-")
        let hour = props.date.getHours();
        if (parseInt(tiempo[0]) <= hour && parseInt(tiempo[1]) >= hour) {
            return "on"
        }
        else {
            return "off"
        }
    }
    const time2 = (rol) => {
        let tiempo = rol.schedule2.split("-")
        let hour = props.date.getHours()
        if (parseInt(tiempo[0]) <= hour && parseInt(tiempo[1]) >= hour) {
            return "on"
        }
        else {
            return "off"
        }
    }
    return (
        <Flex id="SedeScreenContainer" align="center" style={{ marginTop: "0%", marginLeft: "5%", marginRight: "5%", flexWrap: "wrap" }}>
            <Flex style={{ width: "50%" }} align="center" direction="column">
                <ImagePanel
                    image={ContentSede}
                    padding={"0"}
                    style={{ width: "400px", }}
                >
                    <Flex align="center" justify='flex-start' direction="column" style={{ width: '100%', height: '100%' }}>
                        <Flex align="center" style={{ width: '100%', height: '20%' }} >
                            <h2>{props.title || "Titulo"}</h2>
                        </Flex>
                        <Flex className='scrollbar' align="flex-start" style={{ margin: '2% 0', width: '60%', height: '25%', overflowY: 'auto' }} >
                            <p style={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: description || '<b>Not found</b>' }}></p>
                        </Flex>
                        <Flex align="flex-start" style={{ height: '25%' }} >
                            <img alt="portal" src={portalVillavicencio} style={{ height: '100%' }}></img>
                        </Flex>
                        <Flex jsutify={"center"} style={{ height: '15%' }}>
                            <CurrencyHorizontal
                                className="source"
                                quantity={currentSede.keysRequiredForOpen || 0}
                                image={key}
                                displayX={true}
                                styleX={{ padding: "0 5px", color: 'var(--yellow-ligth)' }}
                                childStyle={{ color: 'var(--yellow-ligth)' }}
                                id="counterkeyssede"
                                idX="xcounterkeyssede"
                                styleBox={{ display: "flex" }}
                            ></CurrencyHorizontal>
                        </Flex>
                    </Flex>
                </ImagePanel>
            </Flex>
            <Flex style={{ width: "50%", flexWrap: "wrap" }}>
                {Roles.map((rol, index) => {
                    console.log('ROL ===> ', props.cooldowns[`${rol.text.toLowerCase()}`])
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
                                        listener={() => { }}
                                        leftLabel={"-1%"}
                                        topLabel={"75%"}
                                    >
                                    </MaskedAvatarWithTitle>
                                </Flex>
                            </Flex>
                            <ButtonMultiStateWithText
                                id={`btn${index}1`}
                                state={!props.cooldowns[`${rol.text.toLowerCase()}`] ? 'on' : 'off'}
                                scale={1.2} //1.1
                                images={{ off: contatiempo, on: contatiempoactivo }}
                                listeners={{
                                    off: () => { },
                                    on: () => { props.listener(rol.text) },
                                }}
                                stylesText={{ off: { color: 'var(--dark-grey)', marginBottom: '5%' }, on: { color: 'var(--yellow-ligth)', marginBottom: '5%', fontSize:'.7rem' } }}
                                styles={{}}
                                text={
                                    !props.cooldowns[`${rol.text.toLowerCase()}`] ?
                                        <label>
                                            Abierto
                                        </label>
                                        :
                                        <Timer
                                            segundos={props.cooldowns[`${rol.text.toLowerCase()}`]}
                                            iniciar={start}
                                            styleTimer={{ fontSize: '.7rem' }}
                                        />
                                }
                            />
                        </Flex>
                    )
                })}

            </Flex>
        </Flex>
    )
}


export default SedeScreen;