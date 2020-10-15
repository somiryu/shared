import React, {useState, useEffect} from 'react'
import Chip from "../Buttons/Chip"

let aux={};

function ChipController(props){
    const [estado, setEstado] = useState({})
    useEffect(() => {
        props.chips.map(e=>{
            return aux[e.id]=false
        })
        setEstado(aux)
    }, [props.chips])
	const listener = (state) => {
        console.log("click")
        console.log(state[0].target.id)
        props.chips.map(e=>{
            return aux[e.id]=false
        })
        console.log(aux)
        aux[state[0].target.id]=true
        let auxn = {
            ...aux
        }
        setEstado(auxn)
        console.log(estado)
    }
    console.log("----Chips")
 	return( 
    	<div style={{display:"flex",justifyContent:"space-around",margin:"2%",...props.chipControllerStyle}}>
            {props.chips.map(e=>
                <Chip
                    id={e.id}
                    label={e.label}
                    listener={listener}
                    active={estado[e.id]}
                    imageselect={props.imageChip}
                    imagenoselect={props.imageChipDeactivate}
                    style ={{width: "33%",height: "78px",color: "black",fontSize: "28px",fontFamily: 'Squada One', paddingBottom:"10px"}}
                ></Chip>
            )}
		</div>
    )
}

export default ChipController;