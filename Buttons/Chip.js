import React, {useState} from 'react'
import "../../shared/SimpleButton.css"

function Chip(props){
    const [active, setActive] = useState(props.active)
    console.log("Boton")
    console.log(props)
    console.log(props.active)
	const clickHandler = (e) => {
        if(props.listener){
            props.listener([e,active])
        }
        console.log(props.imageselect)
        console.log(props.imagenoselect)
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
            style={{cursor:"pointer", display:"flex", alignItems:"flex-start", position:"relative", width:'100%',backgroundImage:props.imageselect,...style}}
		>
            {/* { props.active ? 
                <img src={props.imageselect}></img>
                :
                <img src={props.imagenoselect}></img>
            } */}
			{props.label}
		</div>
    )
}

export default Chip;