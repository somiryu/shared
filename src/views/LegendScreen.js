import React, {useState, useEffect} from 'react'
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";


function LegendScreen(props) {
    return (
        <div>
            <div style={{margin: "auto",display:"flex",alignItems:"center", justifyContent:"space-around",flexDirection:"column",maxWidth: "400px",...props.styles}}>
                {props.title || <h3>Titulo Formulario</h3>}
                {props.legend || <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
                <div style={{display:"flex",justifyContent:"center", margin:"0 auto",width:props.widthButton || "25%"}}>
                    <ButtonImageWithLabel
                        id={props.buttonId || "firstbutton"}
                        image={props.buttonImage || ImageTest}
                        label={props.buttonLabel || "button"}
                        listener={props.listener || console.log("hola soy un boton sin listener")}
                    >
                    </ButtonImageWithLabel>
                </div>
            </div> 
        </div>
    )
}

export default LegendScreen;