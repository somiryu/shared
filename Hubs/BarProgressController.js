import React, { useState, useEffect } from 'react'
import List from '../Containers/List'
import FlexWithAbsoluteIcon from '../Containers/FlexWithAbsoluteIcon'

export default function BarProgressController(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        let on = {
            first: { height: '100%', width: '100%', borderRight: '#F39640 solid 2px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', backgroundColor: '#3F958A' },
            middle: { height: '100%', width: '100%', borderRight: '#F39640 solid 2px', backgroundColor: '#3F958A' },
            last: { height: '100%', width: '100%', borderTopRightRadius: '50px', borderBottomRightRadius: '50px', backgroundColor: '#3F958A' }
        }
        let off = {
            first: { height: '100%', width: '100%', borderRight: '#F39640 solid 2px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px' },
            middle: { height: '100%', width: '100%', borderRight: '#F39640 solid 2px' },
            last: { height: '100%', width: '100%', borderTopRightRadius: '50px', borderBottomRightRadius: '50px' }
        }
        let turnOn = props.turnOn || 6;
        let progress = []
        let listComponent = []

        for (let index = 0; index < 10; index++) {
            progress.push(index < turnOn ? on : off)
        }
        for (let key in progress) {
            // eslint-disable-next-line eqeqeq
            if(key == 0){
                listComponent.push(
                    <FlexWithAbsoluteIcon
                        style={progress[key].first}
                        icon={props.icons && props.icons[key] ? props.icons[key] : ''}
                        iconPosition={props.positionIcons && props.positionIcons[key] ? props.positionIcons[key] : {}}
                    />
                )
            // eslint-disable-next-line eqeqeq
            } else if (key == 9){
                listComponent.push(
                    <FlexWithAbsoluteIcon
                        style={progress[key].last}
                        icon={props.icons && props.icons[key] ? props.icons[key] : ''}
                        iconPosition={props.positionIcons && props.positionIcons[key] ? props.positionIcons[key] : {}}
                    />
                )

            } else {
                listComponent.push(
                    <FlexWithAbsoluteIcon
                        style={progress[key].middle}
                        icon={props.icons && props.icons[key] ? props.icons[key] : ''}
                        iconPosition={props.positionIcons && props.positionIcons[key] ? props.positionIcons[key] : {}}
                    />
                )

            }
        }
        setList(listComponent)
    }, [props.turnOn, props.icons, props.positionIcons])
    return (
        <List
            style={{ height: '100%', width: '100%', paddingBottom: '2%' }}
            list={list}
            styleItems={{ flex: '1', height: '100%' }}
        >

        </List>
    )
}
