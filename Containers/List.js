//debug, justify, align, direction, style = {textAlign: 'center', ...} (FROM FLEX)
//list = [<Component>, ...]
//styleItems= {}
import React, { useState, useEffect } from 'react'
import Flex from '../Containers/Flex'
import { shuffle } from '../Utils/libs'
export default function List(props) {
    const [list, setList] = useState([])
    useEffect(( ) =>{
        if(props.list) setList(props.list)
        if(props.shuffle) setList(shuffle(props.list))
    }, [props.list, props.shuffle])
    return (
        <Flex {...props}>
            {
                list.map((e, i) => <Flex key={i} className={props.classNameChild}  style={props.styleItems}>{e}</Flex>)
            }
        </Flex>
    )
}
