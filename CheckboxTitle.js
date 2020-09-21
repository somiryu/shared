//id, state: "check" || "uncheck" (marks initial state)
//images = { state1: url , state2: url}
//paragraph
//listener
//disabled (boolean)
//title(string)
import React, { useEffect, useState } from 'react'

export default function CheckboxTitle(props) {
    const [checkbox, setCheckbox] = useState(props.state);
    let image = props.images[checkbox]
    useEffect(() => {
        setCheckbox(props.state)
    }, [props.state])
    const changeState = () =>{
        if(props.disabled && props.disabled === true) return;
        const nextState = checkbox === "uncheck" ? "check" : "uncheck"
        if(props.listener) props.listener(props.id, nextState)
        setCheckbox(nextState)
    }
    
    return (
        <div key={props.id}
            onClick={()=>changeState()}
            className={props.debug ? 'testBox' : ''} 
            style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <div className={props.debug ? 'testBox' : ''} style={{ width: props.sizeIcon || '15%', textAlign:'center', cursor:'pointer' }}>
                <img src={image} alt='Check' style={{width:'60%'}}></img>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <h3>{props.title}</h3>
                <div className={props.debug ? 'testBox' : ''} style={{ width: props.sizeText || '85%', display: 'flex', alignItems: 'center'}}>
                    {props.paragraph}
                </div>
            </div>
        </div>
    )
}