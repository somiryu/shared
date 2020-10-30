import React from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImage from "../images/buttons/btnprincipal.png"
import ButtonImageWithLabel from '../shared/Buttons/ButtonImageWithLabel'
import CheckBoxesController from '../shared/Controllers/CheckboxesController'
import lamp from "../images/general/lampara.png"
import tubo from "../images/general/lineatubocontenedor.png"
import btnrespuesta from "../images/buttons/btnrespuesta.png"
import btnrespuestaactivo from "../images/buttons/btnrespuestaactivo.png"
import preguntas from "../views/models/trivias"
import ProgressBarWithImage from "../shared/Indicators/ProgressBarWithImage"
import screw from "../images/Graficos/tornillobarratrivias.png"

function QuestionScreen(props) {
    let resp = false
    let ran = Math.floor(Math.random() * 4)
    let question = preguntas[ran]
    const marcado = (e) => {
        console.log(e)
        let llaves = Object.keys(e)
        llaves.map((llave) => {
            if (e[llave] === "check") {
                resp = llave
            }
            return null
        })
    }
    console.log()
    return (
        <Flex id="QuestionScreen" align="center" direction="column" style={{ marginTop: "0%", marginLeft: "5%", marginRight: "5%", height: '80vh' }}>
            <Flex style={{ height: '10%' }} align="center">
                <Flex>
                    <img alt="lamp" src={lamp}></img>
                </Flex>
                <Flex>
                    <p style={{ color: "#F2C75C" }}>Encuentra la palabra escondida. Si ganas puedes conseguir 2 llaves, sino pierdes 1</p>
                </Flex>
                <Flex>
                    <img alt="lamp2" src={lamp}></img>
                </Flex>
            </Flex>
            <Tubo legend={question.question}></Tubo>
            <Flex style={{ width: '100%', height: 'auto' }}>
                <CheckBoxesController
                    options={[{ id: "option1", description: <p>{question.option1}</p>, images: { uncheck: btnrespuesta, check: btnrespuestaactivo } },
                    { id: "option2", description: <p>{question.option2}</p>, images: { uncheck: btnrespuesta, check: btnrespuestaactivo } }
                        , { id: "option3", description: <p>{question.option3}</p>, images: { uncheck: btnrespuesta, check: btnrespuestaactivo } }
                        , { id: "option4", description: <p>{question.option4}</p>, images: { uncheck: btnrespuesta, check: btnrespuestaactivo } }]}
                    listener={marcado}
                >
                </CheckBoxesController>
            </Flex>

            <div style={{ display: "flex", justifyContent: "center", margin: "0 auto", width: props.widthButton || "60%", marginBottom: "10px" }}>
                <ButtonImageWithLabel
                    id={props.buttonId || "firstbutton"}
                    image={props.buttonImage || ButtonImage}
                    label={props.buttonLabel || <label className='label-bg' style={{ fontWeight: "700" }}>CONTINUAR</label>}
                    listener={() => {
                        if (resp === false) {
                            window.flash("No has elegido aun una respuesta", "error")
                        } else {
                            if (question.susseful === resp) {
                                console.log("es correcto")
                                props.listener(8, true)
                            } else {
                                console.log("es incorrecto")
                                props.listener(8, false)
                            }
                        }
                    }}
                >
                </ButtonImageWithLabel>
            </div>
            <Flex>
                <ProgressBarWithImage 
                    //image={Bar}
                    padding='1% 0% 1%'
                    styleContainer={{ width: "300px", height: "21px" }}
                    imageRelative={screw}
                    background={"linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)"}
                    border={{ border: "1px var(--yellow-ligth) solid" }}
                    barColor={"var(--green)"}
                >
                </ProgressBarWithImage>
            </Flex>
        </Flex>
    )
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
                <p>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
            </Flex>
            <Flex style={{ width: '100%', margin: '0 auto' }}>
                <img alt="tubo2" src={tubo} style={{ width: '100%' }}>
                </img>
            </Flex>
        </Flex>
    )
}

export default QuestionScreen;