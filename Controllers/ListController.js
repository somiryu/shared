//debug, justify, align, direction, style = {textAlign: 'center', ...},list = [<Component>, ...],styleItems= {} (FROM LIST)
//turnOn = state images
//numberItems = number || default(10)
//on = [ image, image, image] 
//off = [image, image, image]
//icons = {3: image}
//positionIcons = {3: {top: 0, left: 0}}
import React, { useState, useEffect } from 'react'
import List from '../Containers/List'
import ImageMultiStateAndIcon from '../Images/ImageMultiStateAndIcon'

export default function ListController(props) {

    const [list, setList] = useState([])
    useEffect(() => {
        let items = props.on.length
        let arr = []
        for (let key = 0; key < items; key++) {
            arr.push(
                key <= props.turnOn  ? 'on' : 'off'
            )
        }
        let listComps = []
        for (let index = 0; index < items; index++) {
            listComps.push(
                <ImageMultiStateAndIcon
                    state={arr[index]}
                    images={{ off: props.off[index], on: props.on[index] }}
                    icon={props.icons && props.icons[index] ? props.icons[index] : '' }
                    iconPosition={ props.positionIcons && props.positionIcons[index] ? props.positionIcons[index] : ''}
                />
            )
        }
        setList(listComps)
    }, [props.turnOn, props.list, props.numberItems, props.off, props.items, props.icons, props.on, props.positionIcons])

    return (
        <div>
            <List
                {...props}
                list={list}
            >

            </List>
        </div>
    )
}
