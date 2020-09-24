import React, {useState, useEffect} from 'react'
import ButtonImageWithLabel from  '../Buttons/ButtonImageWithLabel'
import ImageTest from "../ExampleImages/Buttons/boton.png";


let formAux ={}
function SimpleForm(props) {
    useEffect(() => {
        console.log("se disparo use effect")
        props.inputs.map(e=>{
            formAux[e.name]=""
        }) 
        console.log(formAux)
    }, [])
    return (
        <div>
            <form id={props.idForm || "form"} >
                <div style={{display:"flex", justifyContent:"space-evenly",flexDirection:"column",padding:"0 20%", ...props.styles}}>
                    {props.title && 
                        props.title
                    }
                    {props.ImageTitle &&
                       <div>
                           <img src={props.ImageTitle}></img>
                       </div> 
                    }
                    {props.inputs.map(e => 
                        <input onChange={(evn)=> {formAux[e.name] = evn.target.value}} style={{...props.stylesInput}} id={e.id} type={e.type} placeholder={e.placeholder} name={e.name}/>
                    )}
                    <div style={{display:"flex", margin:"0 auto",width:props.widthButton || "auto",justifyContent:"center"}}>
                        <ButtonImageWithLabel
                            id={props.button.id}
                            image={props.button.image}
                            label={props.button.label}
                            listener={() =>{
                                 props.listener(formAux)
                            }}
                        >
                        </ButtonImageWithLabel>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SimpleForm;