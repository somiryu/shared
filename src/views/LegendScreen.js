import React, {useState, useEffect} from 'react'
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";

function LegendScreen(props) {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-around",flexDirection:"column", ...props.styles}}>
                {props.title || <h3>Titulo Formulario</h3>}
                {props.legend || <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
                <div style={{display:"flex", margin:"0 auto",width:props.widthButton || "25%"}}>
                    <ButtonImageWithLabel
                        id={props.button.id}
                        image={props.button.image}
                        label={props.button.label}
                        listener={props.listener}
                    >
                    </ButtonImageWithLabel>
                </div>
            </div> 
        </div>
    )
}

export default LegendScreen;