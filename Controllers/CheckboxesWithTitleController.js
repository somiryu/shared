//options = [ {id: id, descripcion: descripcion, state:"check" def:(uncheck),images : { uncheck: '', check: '}} ]
//shuffle
//listener
import React, { useState, useEffect } from 'react'
import CheckboxTitle from '../Checkbox'
import {shuffle} from '../Utils/libs' 


export default function CheckboxesWithTitleController(props) {
    const [stateCheckBoxes, setStateCheckboxes] = useState(null);
    const [options, setOptions] = useState([])
    useEffect(() => {
        let opt = props.shuffle ? shuffle(props.options) : props.options;
        let controlCheck = {}
        opt.map((e) => controlCheck[e.id] = e.state || "uncheck")
        setOptions(opt)
        setStateCheckboxes(controlCheck)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const setCheckbox = (id, nextState) => {
        let controlCheckAux = {...stateCheckBoxes};
        Object.keys(stateCheckBoxes).map((key) => key === id && nextState === 'check' ? controlCheckAux[key] = 'check' : controlCheckAux[key] = 'uncheck')
        setStateCheckboxes(controlCheckAux)
        if(props.listener) props.listener(controlCheckAux)
    }
    if (!stateCheckBoxes) return (<div></div>)
    return (
        <div className={props.debug ? 'testBox' : ''}
            style={{ width: '100%', margin: '0 auto' }}>
            <div className={props.debug ? 'testBox' : ''}
                style={{ display: 'flex', flexDirection: props.direction || 'column', width: '70%', padding: '10px', height: '80%', margin: '0 auto', overflowY: 'auto', }}>
                {
                    options.map((option) => (
                            <div key={option.id}
                                className={props.debug ? 'testBox' : ''}
                                style={{ marginBottom:'.5rem' , color: "var(--wine)", height: `calc( 100% / ${props.options.length})` }}>
                                
                                <CheckboxTitle
                                    images={option.images}
                                    paragraph={option.description}
                                    id={option.id}
                                    state={stateCheckBoxes[option.id] || "uncheck"}
                                    listener={(id, nextState) => setCheckbox(id, nextState)}
                                    sizeText={props.sizeText}
                                    sizeIcon = {props.sizeIcon}
                                    title={option.title}
                                />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}