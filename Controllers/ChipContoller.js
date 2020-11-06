import React, {useState, useEffect} from 'react'
import Chip from "../Buttons/Chip"

let aux={};

function ChipController(props){
    const [estado, setEstado] = useState({})
    useEffect(() => {
        console.log("una vez")
        props.chips.map(e=>{
            return aux[e.id]=false
        })
        setEstado(aux)
    }, [props.chips])

	const listener = (state) => {
        props.chips.map(e=>{
            return aux[e.id]=false
        })
        aux[state[0].target.id]=state[1]
        setEstado(aux)
    }
    console.log("----Chips",aux)
 	return( 
    	<div style={{display:"flex",justifyContent:"space-around",margin:"2%",...props.chipControllerStyle}}>
            {props.chips.map(e=>
                <Chip
                    id={e.id}
                    label={e.label}
                    listener={listener}
                    handle = {e.listener}
                    active={estado[e.id]?estado[e.id]:false}
                    imageselect={props.imageChip}
                    imagenoselect={props.imageChipDeactivate}
                    style ={{width: "33%",height: "78px",color: "black",fontSize: "28px",fontFamily: 'Squada One', paddingBottom:"10px"}}
                ></Chip>
            )}
		</div>
    )
}

export default ChipController;