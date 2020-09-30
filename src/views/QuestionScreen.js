import React from 'react'
import Flex from "../shared/Containers/Flex"
import ButtonImage from "../images/buttons/btnprincipal.png"
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import CheckBoxesController from  '../shared/Controllers/CheckboxesController'
import lamp from "../images/general/lampara.png"
import tubo from "../images/general/lineatubocontenedor.png"
import btnrespuesta from "../images/buttons/btnrespuesta.png"
import btnrespuestaactivo from "../images/buttons/btnrespuestaactivo.png"

function QuestionScreen(props) {
    return (
        <Flex align="center" direction="column" style={{marginTop:"0%",marginLeft:"5%",marginRight:"5%"}}>
            <Flex align="center">
                <Flex>
                    <img alt="lamp" src={lamp}></img>
                </Flex>
                <Flex>
                    <p style={{color:"#F2C75C"}}>Encuentra la palabra escondida. Si ganas puedes conseguir 2 llaves, sino pierdes 1</p>
                </Flex>
                <Flex>
                    <img alt="lamp2" src={lamp}></img>
                </Flex>
            </Flex>
            <Tubo></Tubo>
            <CheckBoxesController
                options={[{id:"pregunta1",description:<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>,images:{ uncheck: btnrespuesta, check: btnrespuestaactivo}},
                {id:"pregunta2",description:<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>,images:{ uncheck: btnrespuesta, check: btnrespuestaactivo}}
                ,{id:"pregunta3",description:<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>,images:{ uncheck: btnrespuesta, check: btnrespuestaactivo}}
                ,{id:"pregunta4",description:<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>,images:{ uncheck: btnrespuesta, check: btnrespuestaactivo}}]}
            >
            </CheckBoxesController>
            <div style={{display:"flex",justifyContent:"center", margin:"0 auto",width:props.widthButton || "25%"}}>
                <ButtonImageWithLabel
                    id={props.buttonId || "firstbutton"}
                    image={props.buttonImage || ButtonImage}
                    label={props.buttonLabel || <label style={{fontWeight:"700",fontSize:"17px",height:"30px"}}>CONTINUAR</label>}
                    listener={props.listener || console.log("hola soy un boton sin listener")}
                >
                </ButtonImageWithLabel>
            </div>
        </Flex>
    )
}

function Tubo(props){
	return(
        <Flex direction={"column"} justify={"center"} align="center" style={{maxWidth:"607px"}}>
            <div style={{marginBottom:"-5px"}}>
                <img alt="tubo" src={tubo}>
                </img>
            </div>
            <div style={{textAlign:"center",background:"linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)"}}>  
                <h2>{props.title || "Pregunta"}</h2>
                <p>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
            </div> 
            <div>
                <img alt="tubo2" src={tubo}>
                </img>
            </div>
        </Flex>
	)
}

export default QuestionScreen;