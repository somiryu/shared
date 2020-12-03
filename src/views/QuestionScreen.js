import React, { useState, useEffect } from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImage from "../images/buttons/btnprincipal.png"
import ButtonImageWithLabel from '../shared/Buttons/ButtonImageWithLabel'
import CheckBoxesController from '../shared/Controllers/CheckboxesController'
import lampHard from "../images/Graficos/bombillorojo.png"
import lampMedium from "../images/Graficos/bombillonaranja.png"
import lampLow from "../images/Graficos/bombilloverde.png"
import tubo from "../images/general/lineatubocontenedor.png"
import btnrespuesta from "../images/buttons/btnrespuesta.png"
import ButtonMultiState from "../shared/Buttons/ButtonMultiState"
import btnrespuestaactivo from "../images/buttons/btnrespuestaactivo.png"
import ProgressBarWithImage from "../shared/Indicators/ProgressBarWithImage"
import screw from "../images/Graficos/tornillobarratrivias.png"
import { Agents, Immutables, Trivia } from "../shared/Utils/engine"
import { formatTrivia } from "../models/Trivias"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ContentSede from "../images/general/contasedejuego.png"
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import key from "../images/header/llaveheader.png"
const feedbacks = {
    won: 'Muy bien',
    lost: 'La cagaste'
}
const keysWin = {
    low: 1,
    medium: 2,
    hard: 3
}
const formatDifficulty = (dif) => {
    let strDif = ''
    switch (dif) {
        case 1:
            strDif = 'low'
            break;
        case 2:
            strDif = 'medium'
            break;
        case 3:
            strDif = 'hard'
            break;
        default:
            strDif = 'low'
            break;
    }
    console.log('HELLO ===> ', dif, strDif)
    return strDif
}
const getTagFeedbackVP = (dif) => {
    let feedbackName = ''
    switch (dif) {
        case 'low':
            feedbackName = 'win_vp_easy'
            break;
        case 'medium':
            feedbackName = 'win_vp_dif_2'
            break;
        case 'hard':
            feedbackName = 'win_vp_dif_3'
            break;
        default:
            feedbackName = 'low'
            break;
    }
    return feedbackName
}

function QuestionScreen(props) {
    const [trivia, setTrivia] = useState(null)
    const [difficulty, setDifficulty] = useState('low')
    const [screen, setScreen] = useState('Trivia')
    const [result, setResult] = useState(false)
    let resp = false
    useEffect(() => {
        if (props.immutables) {
            feedbacks.won = Immutables.byName(props.immutables, 'feedback_trivias')['text_1']
            feedbacks.lost = Immutables.byName(props.immutables, 'feedback_trivias')['text_2']
            keysWin.low = Immutables.byName(props.immutables, 'keys_win_trivias')['text_1']
            keysWin.medium = Immutables.byName(props.immutables, 'keys_win_trivias')['text_1']
            keysWin.hard = Immutables.byName(props.immutables, 'keys_win_trivias')['text_1']

        }
    }, [props.immutables])
    useEffect(() => {
        if (props.player && props.character) {
            const dif = props.player.agent.currencies.trivia_difficulty.quantity;
            setDifficulty(formatDifficulty(dif))
            Trivia.get(`${props.character.toLowerCase()}_${dif}`, (trivia) => {
                setTrivia(formatTrivia(trivia))
                console.log('TRIVIA ==> ', trivia)
            })
        }
    }, [props.player, props.character])
    const pointsBar = (points) => {
        console.log("puntos", points)
        // puntos = points
    }
    const marcado = (e) => {
        console.log('RESPUESTA ====> ', e)
        let ids = Object.keys(e)
        ids.map((id) => {
            if (e[id] === "check") {
                resp = id
            }
            return null
        })
    }
    const incrementCurrencies = (listener, result) => {
        let currencies = {}
        if (result === 'won') {
            currencies = {
                currencies: {
                    [`trivias_${props.character.toLowerCase()}`]: {
                        add: {
                            value: 1
                        }
                    },
                    xp: {
                        add: {
                            value: 10
                        }
                    },
                    trivia_difficulty: {
                        add: {
                            value: 1
                        }
                    }
                }
            }
        } else if (result === 'lost') {
            currencies = {
                currencies: {
                    [`trivias_${props.character.toLowerCase()}`]: {
                        add: {
                            value: 1
                        }
                    }
                }
            }
        }
        Agents.update(
            props.player,
            currencies,
            listener
        )
    }
    const validateTrivias = (result) => {
        incrementCurrencies(
            (player_update) => {
                const triviaDif = player_update.agent.currencies.trivia_difficulty;
                validateTrivias(triviaDif)
                if (result === 'won') {
                    setResult(true)
                    setScreen('feedback')
                    window.getPlayerAgain()
                }
                if (result === 'lost') {
                    Agents.feedback(props.player, 'reset_trivia_difficulty', (feedback_result) => {
                        setResult(false)
                        setScreen('feedback')
                    })
                }
            },
            result
        )
    }
    const verifyTrivia = () => {
        if (resp === false) {
            window.flash("No has elegido aun una respuesta", "error")
        } else {
            Trivia.answer(trivia.id, resp, (answer) => {
                console.log('ANSWER TRIVIA ===> ', answer)
                if (answer.correct) {
                    validateTrivias('won')
                } else {
                    validateTrivias('lost')
                }
            })
        }
    }
    const listenerFeedback = () => {
        console.log('FEEDBACK')
    }
    if (!trivia) return <div></div>
    return screen === 'Trivia' ? (
        <Flex id="QuestionScreen" align="center" direction="column" style={{ marginTop: "0%", marginLeft: "5%", marginRight: "5%", height: '80vh' }}>
            <Flex style={{ height: '10%' }} align="center">
                <Flex>
                    <ButtonMultiState
                        id="btnlamp"
                        state={difficulty}
                        scale={1.2} //1.1
                        images={{ hard: lampHard, medium: lampMedium, low: lampLow }}
                        listeners={{
                            hard: () => { setDifficulty("medium") },
                            medium: () => { setDifficulty("low") },
                            low: () => { setDifficulty("hard") },
                        }}
                    ></ButtonMultiState>
                </Flex>
                <Flex>
                    <p style={{ color: "#F2C75C" }}>{trivia.description || 'Responde la Trivia'}</p>
                </Flex>
                <Flex>
                    <ButtonMultiState
                        id="btnlamp"
                        state={difficulty}
                        scale={1.2} //1.1
                        images={{ hard: lampHard, medium: lampMedium, low: lampLow }}
                        listeners={{
                            hard: () => { setDifficulty("medium") },
                            medium: () => { setDifficulty("low") },
                            low: () => { setDifficulty("hard") },
                        }}
                    ></ButtonMultiState>
                </Flex>
            </Flex>
            <Tubo legend={trivia.question} title={trivia.title}></Tubo>
            <Flex style={{ width: '100%', height: 'auto' }}>
                <CheckBoxesController
                    options={[
                        ...Array(trivia.options.length).fill().map((_, index) => ({ id: parseInt(trivia.options[index].answer_id), description: <p>{trivia.options[index].answer}</p>, images: { uncheck: btnrespuesta, check: btnrespuestaactivo } }))
                    ]}
                    listener={marcado}
                >
                </CheckBoxesController>
            </Flex>
            <div style={{ display: "flex", justifyContent: "center", margin: "0 auto", width: props.widthButton || "60%", marginBottom: "10px" }}>
                <ButtonImageWithLabel
                    id={props.buttonId || "firstbutton"}
                    image={props.buttonImage || ButtonImage}
                    label={props.buttonLabel || <label className='label-bg' style={{ fontWeight: "700" }}>CONTINUAR</label>}
                    listener={verifyTrivia}
                >
                </ButtonImageWithLabel>
            </div>
            {difficulty === 'hard' &&
                <Flex>
                    <ProgressBarWithImage
                        //image={Bar}
                        listener={pointsBar}
                        padding='1% 0% 1%'
                        styleContainer={{ width: "300px", height: "21px" }}
                        imageRelative={screw}
                        background={"linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)"}
                        border={{ border: "1px var(--yellow-ligth) solid" }}
                        barColor={"var(--green)"}
                    >
                    </ProgressBarWithImage>
                </Flex>
            }
        </Flex>
    ) : <FeedbackScreen
            listener={listenerFeedback}
            pointsBar={pointsBar}
            legend={result ? feedbacks.won : feedbacks.lost}
            keysWon={result ? keysWin[difficulty] : 0}
            title={result ? 'Felicitaciones' : 'Lo lamento'}
        />
}

function Tubo(props) {
    return (
        <Flex direction="column" justify={"center"} align="center" style={{ width: '80%' }}>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
            <Flex direction='column' justify='center' align='center' style={{
                width: "100%",
                padding: "2%", textAlign: "center", background: "linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)"
            }}>
                <h2 style={{ margin: '2%' }}>{props.title || "Pregunta"}</h2>
                <div id='Question' dangerouslySetInnerHTML={{ __html: (props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.") }}></div>
            </Flex>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo2" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
        </Flex>
    )
}

function FeedbackScreen({ title,keysWon, respuesta, legend, pointsBar, listener }) {
    return (
        <Flex id='FeedbackScreen' align="center" direction="column" style={{ marginTop: "0%", marginLeft: "10%", marginRight: "10%", height: '80vh' }}>
            <Flex id='FeedbackScreenContainer' style={{ width: "80%", height: '100%' }} align={"center"} direction={"column"}>
                <ImagePanel
                    image={ContentSede}
                    padding={"2% 10%"}
                    style={{ width: "90%", }}
                >
                    <Flex style={{ height: '90%', width: '100%' }} align={"center"} direction={"column"}>
                        <Flex align='center' justify='center' style={{ height: '18%', width: '100%' }}>
                            <h2>{title || "Titulo"}</h2>
                        </Flex>
                        <Flex align='flex-start' justify='center' style={{ marginTop: '10%', height: '30%', width: '100%', overflowX: "auto" }}>
                            <p style={{ color: "#F2C75C", paddingTop: "10px" }}>{legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                        </Flex>

                        <Flex align='center' justify='center' style={{ height: '20%', width: '100%' }}>
                            <CurrencyHorizontal
                                quantity={keysWon}
                                image={key}
                                displayX={true}
                                styleX={{ padding: "5px", fontSize: "30px" }}
                                styleImage={{ transform: "rotate(330deg)" }}
                                id="counterfeed"
                            ></CurrencyHorizontal>
                        </Flex>
                        <Flex align='flex-start' justify='center' style={{ height: '25%', margin: "0 auto", width: "80%" }}>
                            <ButtonImageWithLabel
                                id={"firstbutton"}
                                image={ButtonImage}
                                label={<label style={{ fontWeight: "700", fontSize: "17px", height: "30px" }}>VOLVER</label>}
                                listener={() => {
                                    listener(respuesta ? (pointsBar > 0 ? pointsBar : 2) : -1)
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
export default QuestionScreen;