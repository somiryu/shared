import React, {useState, useEffect} from 'react'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import ProgressBar from "../shared/Indicators/ProgressBar";
import ButtonImage from "../shared/Buttons/ButtonImage"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle";
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import Chip from "../shared/Buttons/Chip"
import AvatarContainer from "../shared/ExampleImages/avcont.png"
import Avatar from "../shared/ExampleImages/avatar.png"
import Colaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"
import TituloColaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import CheckBoxesController from  '../shared/Controllers/CheckboxesController'

function QuestionBarScreen(props) {
    const [state1, setState1] = useState("off");
    return (
        <Flex align="center" direction="column" style={{marginTop:"10%",marginLeft:"10%",marginRight:"10%"}}>
            {/* <Header></Header> */}
            <h2>{props.title || "Titulo"}</h2>
            <p>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
            <CheckBoxesController
                options={[{id:"pregunta1",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",images:{ uncheck: circ20, check: circ40}},
                {id:"pregunta2",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",images:{ uncheck: circ20, check: circ40}},{id:"pregunta3",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",images:{ uncheck: circ20, check: circ40}}]}
            >
            </CheckBoxesController>
            <div style={{display:"flex",justifyContent:"center", margin:"0 auto",width:props.widthButton || "25%"}}>
                <ButtonImageWithLabel
                    id={props.buttonId || "firstbutton"}
                    image={props.buttonImage || ImageTest}
                    label={props.buttonLabel || "button"}
                    listener={props.listener || console.log("hola soy un boton sin listener")}
                >
                </ButtonImageWithLabel>
            </div>
        </Flex>
    )
}

export default QuestionBarScreen;