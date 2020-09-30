import React, {useEffect} from 'react'
import ButtonImageWithLabel from  '../Buttons/ButtonImageWithLabel'


let formAux ={}
function SimpleForm(props) {
    useEffect(() => {
        console.log("se disparo use effect")
        props.inputs.map(e=>{
            return formAux[e.name]=""
        }) 
        console.log(formAux)
    }, [props.inputs])
    return (
        <div>
            <form id={props.idForm || "form"} >
                <div style={{display:"flex", justifyContent:"space-evenly",flexDirection:"column",padding:"0 20%", ...props.styles}}>
                    {props.title && 
                        props.title
                    }
                    {props.ImageTitle &&
                       <div>
                           <img alt={"title"} src={props.ImageTitle} style={{width:"100%",padding:"5px"}}></img>
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