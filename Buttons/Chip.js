import React, {useState} from 'react'
import "../../shared/SimpleButton.css"

function Chip(props){
    const [active,setActive] = useState(props.active)
    const [image] = useState(props.active === true?props.imageselect:props.imagenoselect)
    // console.log("Boton")
    // console.log(props)
    // console.log(props.active)
	const clickHandler = (e) => {
        if(props.listener){
            props.listener([e,active])
            setActive(!props.active)
        }
        console.log(props.id,props.active)
	}
   let color = props.color || "purple"
   if(color === "var(--purple)") color = "purple";
   if(color === "var(--pink)") color = "pink";
   if(color === "var(--orange)") color = "orange";
   if(color === "var(--yellow)") color = "yellow";
   
   if(props.disable) color = "grey";
   const style = {
       
   }
   if(props.labelColor){style.color = props.labelColor}
   if(props.bgColor){style.backgroundColor = props.bgColor}

 	return( 
    	<div 
    		id={props.id}
			onClick={clickHandler}
            style={{cursor:"pointer", display:"flex", alignItems: props.align || "center", justifyContent: props.justify || "center", position:"relative",...props.style}}
		>
            <img style={{position:"absolute",width:'100%'}} src={image} alt='background' ></img>
			{props.label}
		</div>
    )
}

export default Chip;